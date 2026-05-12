import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '@/context/ThemeContext';

const GlobeBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  // Initialize canvas-based particle effects
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    interface Star {
      x: number;
      y: number;
      radius: number;
      opacity: number;
      velocityX: number;
      velocityY: number;
    }

    // Create stars
    const stars: Star[] = Array.from({ length: 50 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 1.5,
      opacity: Math.random() * 0.7 + 0.3,
      velocityX: (Math.random() - 0.5) * 0.3,
      velocityY: (Math.random() - 0.5) * 0.3,
    }));

    interface GridPoint {
      x: number;
      y: number;
      originalX: number;
      originalY: number;
      opacity: number;
    }

    // Create grid points
    const gridSpacing = 80;
    const gridPoints: GridPoint[] = [];
    for (let x = 0; x < canvas.width; x += gridSpacing) {
      for (let y = 0; y < canvas.height; y += gridSpacing) {
        gridPoints.push({
          x,
          y,
          originalX: x,
          originalY: y,
          opacity: Math.random() * 0.3 + 0.1,
        });
      }
    }

    let animationFrame: number;
    let time = 0;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      time += 0.5;

      // Draw background gradient
      const gradient = ctx.createRadialGradient(
        canvas.width / 2,
        canvas.height / 2,
        0,
        canvas.width / 2,
        canvas.height / 2,
        Math.max(canvas.width, canvas.height)
      );

      if (isDark) {
        gradient.addColorStop(0, 'rgba(15, 23, 42, 0.4)');
        gradient.addColorStop(0.5, 'rgba(5, 10, 25, 0.6)');
        gradient.addColorStop(1, 'rgba(2, 5, 15, 0.8)');
      } else {
        gradient.addColorStop(0, 'rgba(240, 248, 255, 0.2)');
        gradient.addColorStop(0.5, 'rgba(230, 240, 255, 0.15)');
        gradient.addColorStop(1, 'rgba(200, 220, 255, 0.1)');
      }

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw and update stars
      stars.forEach((star) => {
        star.x += star.velocityX;
        star.y += star.velocityY;

        // Wrap around screen
        if (star.x < 0) star.x = canvas.width;
        if (star.x > canvas.width) star.x = 0;
        if (star.y < 0) star.y = canvas.height;
        if (star.y > canvas.height) star.y = 0;

        ctx.fillStyle = isDark ? `rgba(0, 217, 255, ${star.opacity})` : `rgba(0, 102, 204, ${star.opacity})`;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fill();

        // Add star glow
        ctx.strokeStyle = isDark ? `rgba(0, 217, 255, ${star.opacity * 0.3})` : `rgba(0, 102, 204, ${star.opacity * 0.2})`;
        ctx.lineWidth = 0.5;
        ctx.stroke();
      });

      // Draw animated grid
      ctx.strokeStyle = isDark ? `rgba(0, 217, 255, 0.08)` : `rgba(0, 102, 204, 0.05)`;
      ctx.lineWidth = 0.5;

      gridPoints.forEach((point) => {
        // Add wave effect to grid
        const wave = Math.sin((point.originalX + time) * 0.01) * 2 + Math.cos((point.originalY + time) * 0.01) * 2;
        point.x = point.originalX + wave;
        point.y = point.originalY + wave;

        // Draw grid connections
        const nearbyPoints = gridPoints.filter(
          (p) =>
            Math.hypot(p.x - point.x, p.y - point.y) < gridSpacing * 1.5 && p !== point
        );

        nearbyPoints.forEach((nearPoint) => {
          ctx.beginPath();
          ctx.moveTo(point.x, point.y);
          ctx.lineTo(nearPoint.x, nearPoint.y);
          ctx.stroke();
        });
      });

      // Draw grid points
      ctx.fillStyle = isDark ? 'rgba(0, 217, 255, 0.2)' : 'rgba(0, 102, 204, 0.15)';
      gridPoints.forEach((point) => {
        ctx.beginPath();
        ctx.arc(point.x, point.y, 1, 0, Math.PI * 2);
        ctx.fill();
      });

      animationFrame = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener('resize', handleResize);
    };
  }, [isDark]);

  return (
    <>
      {/* Canvas for animated particles and grid */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none"
        style={{ zIndex: 1 }}
      />

      {/* Radial gradient overlays */}
      <motion.div
        animate={{
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute inset-0 pointer-events-none"
        style={{
          background: isDark
            ? 'radial-gradient(circle at 30% 40%, rgba(0, 217, 255, 0.1) 0%, transparent 60%)'
            : 'radial-gradient(circle at 30% 40%, rgba(0, 102, 204, 0.05) 0%, transparent 60%)',
          zIndex: 2,
        }}
      />

      {/* Secondary radial gradient */}
      <motion.div
        animate={{
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="absolute inset-0 pointer-events-none"
        style={{
          background: isDark
            ? 'radial-gradient(circle at 70% 60%, rgba(138, 43, 226, 0.08) 0%, transparent 50%)'
            : 'radial-gradient(circle at 70% 60%, rgba(100, 50, 200, 0.04) 0%, transparent 50%)',
          zIndex: 2,
        }}
      />

      {/* Floating glow elements */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={`glow-${i}`}
          animate={{
            x: [0, 30, 0],
            y: [0, -30, 0],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 8 + i * 2,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: i * 1,
          }}
          className="absolute rounded-full pointer-events-none"
          style={{
            width: `${200 + i * 100}px`,
            height: `${200 + i * 100}px`,
            left: `${20 + i * 30}%`,
            top: `${-50 + i * 40}%`,
            background: isDark
              ? `radial-gradient(circle, rgba(0, ${217 - i * 50}, 255, 0.2) 0%, transparent 70%)`
              : `radial-gradient(circle, rgba(0, 102, 204, 0.1) 0%, transparent 70%)`        ,
            filter: 'blur(40px)',
            zIndex: 0,
          }}
        />
      ))}
    </>
  );
};

export default GlobeBackground;
