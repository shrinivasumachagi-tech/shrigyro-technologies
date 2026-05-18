import { useCallback } from 'react';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import type { Container } from "tsparticles-engine";
import { useTheme } from '@/context/ThemeContext';

export const ParticleBackground = ({ id = "tsparticles" }: { id?: string }) => {
  const { theme } = useTheme();
  const isDarkMode = theme === 'dark';

  const particlesInit = useCallback(async (engine: any) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (_container: Container | undefined) => {}, []);

  return (
    <Particles
      id={id}
      init={particlesInit}
      loaded={particlesLoaded}
      className="absolute inset-0 z-0 pointer-events-none"
      options={{
        background: {
          color: {
            value: "transparent",
          },
        },
        fpsLimit: 60,
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "grab",
            },
            resize: true,
          },
          modes: {
            grab: {
              distance: 140,
              links: {
                opacity: 0.5,
              },
            },
          },
        },
        particles: {
          color: {
            value: isDarkMode ? "#0ea5e9" : "#3b82f6",
          },
          links: {
            color: isDarkMode ? "#0ea5e9" : "#3b82f6",
            distance: 150,
            enable: true,
            opacity: isDarkMode ? 0.2 : 0.1,
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: true,
            speed: 0.5,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 60,
          },
          opacity: {
            value: isDarkMode ? 0.3 : 0.2,
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 1, max: 3 },
          },
        },
        detectRetina: true,
      }}
    />
  );
};

export const GlowBackground = () => {
  const { theme } = useTheme();
  const isDarkMode = theme === 'dark';

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      <div className={`absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full blur-[120px] mix-blend-multiply opacity-50 animate-pulse-slow ${isDarkMode ? 'bg-cyan-900/40' : 'bg-blue-200/50'}`}></div>
      <div className={`absolute top-[40%] -right-[10%] w-[60%] h-[60%] rounded-full blur-[150px] mix-blend-multiply opacity-50 animate-pulse-slow ${isDarkMode ? 'bg-blue-900/40' : 'bg-cyan-200/50'}`} style={{ animationDelay: '2s' }}></div>
      <div className={`absolute -bottom-[20%] left-[20%] w-[50%] h-[50%] rounded-full blur-[120px] mix-blend-multiply opacity-40 animate-pulse-slow ${isDarkMode ? 'bg-sky-900/30' : 'bg-indigo-200/40'}`} style={{ animationDelay: '4s' }}></div>
    </div>
  );
};
