import React, { useRef, useLayoutEffect, useEffect } from 'react';
import gsap from 'gsap';
import * as THREE from 'three';
import { motion } from 'framer-motion';
import { ArrowRight, Bot, Cpu, Network, Sparkles, Cloud, Activity, CheckCircle } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';
import { useNavigate } from 'react-router-dom';
import { GlowBackground, ParticleBackground } from '@/components/ui/BackgroundAnimations';

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();
  const navigate = useNavigate();
  
  // Store refs for cleanup and animation
  const sceneRef = useRef<THREE.Scene | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const segmentsRef = useRef<THREE.Group[]>([]);
  const scrollPosRef = useRef(0);

  const isDarkMode = theme === 'dark';

  // --- CONFIGURATION ---
  const TUNNEL_WIDTH = 24;
  const TUNNEL_HEIGHT = 16;
  const SEGMENT_DEPTH = 6;
  const NUM_SEGMENTS = 14;

  const FLOOR_COLS = 6;
  const WALL_ROWS = 4;

  const COL_WIDTH = TUNNEL_WIDTH / FLOOR_COLS;
  const ROW_HEIGHT = TUNNEL_HEIGHT / WALL_ROWS;

  // Tech-themed textures for ShriGyro
  const imageUrls = [
    "https://images.unsplash.com/photo-1677442d019cecf8171eaa026dd3471df1018888c?q=80&w=600&fit=crop", // AI
    "https://images.unsplash.com/photo-1518331247390-079b06d883d7?q=80&w=600&fit=crop", // Tech
    "https://images.unsplash.com/photo-1488229297570-58520e57993b?q=80&w=600&fit=crop", // Code
    "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=600&fit=crop", // Network
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&fit=crop", // Circuit
    "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=600&fit=crop", // Tech
    "https://images.unsplash.com/photo-1620712014386-11bde9dcc1e7?q=80&w=600&fit=crop", // IoT
    "https://images.unsplash.com/photo-1516321318423-f06f70d504f0?q=80&w=600&fit=crop", // Robotics
    "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=600&fit=crop", // Digital
    "https://images.unsplash.com/photo-1621905251918-48416bd8575a?q=80&w=600&fit=crop", // Cloud
    "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=600&fit=crop", // Data
    "https://images.unsplash.com/photo-1460925895917-adf4e565b650?q=80&w=600&fit=crop", // Analytics
    "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=600&fit=crop", // Development
    "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=600&fit=crop", // Future
  ];

  // Helper: Create a segment with grid lines and filled cells
  const createSegment = (zPos: number) => {
    const group = new THREE.Group();
    group.position.z = zPos;

    const w = TUNNEL_WIDTH / 2;
    const h = TUNNEL_HEIGHT / 2;
    const d = SEGMENT_DEPTH;

    // Grid Lines
    const accentColor = isDarkMode ? 0x0ea5e9 : 0x3b82f6;
    const lineMaterial = new THREE.LineBasicMaterial({ color: accentColor, transparent: true, opacity: isDarkMode ? 0.4 : 0.6 });
    const lineGeo = new THREE.BufferGeometry();
    const vertices: number[] = [];

    // Longitudinal Lines
    for (let i = 0; i <= FLOOR_COLS; i++) {
      const x = -w + (i * COL_WIDTH);
      vertices.push(x, -h, 0, x, -h, -d);
      vertices.push(x, h, 0, x, h, -d);
    }
    for (let i = 1; i < WALL_ROWS; i++) {
      const y = -h + (i * ROW_HEIGHT);
      vertices.push(-w, y, 0, -w, y, -d);
      vertices.push(w, y, 0, w, y, -d);
    }

    // Latitudinal Lines
    vertices.push(-w, -h, 0, w, -h, 0);
    vertices.push(-w, h, 0, w, h, 0);
    vertices.push(-w, -h, 0, -w, h, 0);
    vertices.push(w, -h, 0, w, h, 0);

    lineGeo.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
    const lines = new THREE.LineSegments(lineGeo, lineMaterial);
    group.add(lines);

    populateImages(group, w, h, d);
    return group;
  };

  // Helper: Populate images in a segment
  const populateImages = (group: THREE.Group, w: number, h: number, d: number) => {
    const textureLoader = new THREE.TextureLoader();
    const cellMargin = 0.4;

    const addImg = (pos: THREE.Vector3, rot: THREE.Euler, wd: number, ht: number) => {
      const url = imageUrls[Math.floor(Math.random() * imageUrls.length)];
      const geom = new THREE.PlaneGeometry(wd - cellMargin, ht - cellMargin);
      const mat = new THREE.MeshBasicMaterial({ transparent: true, opacity: 0, side: THREE.DoubleSide });
      textureLoader.load(url, (tex: THREE.Texture) => {
        tex.minFilter = THREE.LinearFilter;
        mat.map = tex;
        mat.needsUpdate = true;
        gsap.to(mat, { opacity: 0.85, duration: 1 });
      });
      const m = new THREE.Mesh(geom, mat);
      m.position.copy(pos);
      m.rotation.copy(rot);
      m.name = "slab_image";
      group.add(m);
    };

    // Floor
    let lastFloorIdx = -999;
    for (let i = 0; i < FLOOR_COLS; i++) {
      if (i > lastFloorIdx + 1) {
        if (Math.random() > 0.80) {
          addImg(new THREE.Vector3(-w + i*COL_WIDTH + COL_WIDTH/2, -h, -d/2), new THREE.Euler(-Math.PI/2,0,0), COL_WIDTH, d);
          lastFloorIdx = i;
        }
      }
    }
    
    // Ceiling
    let lastCeilIdx = -999;
    for (let i = 0; i < FLOOR_COLS; i++) {
      if (i > lastCeilIdx + 1) {
        if (Math.random() > 0.88) {
          addImg(new THREE.Vector3(-w + i*COL_WIDTH + COL_WIDTH/2, h, -d/2), new THREE.Euler(Math.PI/2,0,0), COL_WIDTH, d);
          lastCeilIdx = i;
        }
      }
    }
    
    // Left Wall
    let lastLeftIdx = -999;
    for (let i = 0; i < WALL_ROWS; i++) {
      if (i > lastLeftIdx + 1) {
        if (Math.random() > 0.80) {
          addImg(new THREE.Vector3(-w, -h + i*ROW_HEIGHT + ROW_HEIGHT/2, -d/2), new THREE.Euler(0,Math.PI/2,0), d, ROW_HEIGHT);
          lastLeftIdx = i;
        }
      }
    }
    
    // Right Wall
    let lastRightIdx = -999;
    for (let i = 0; i < WALL_ROWS; i++) {
      if (i > lastRightIdx + 1) {
        if (Math.random() > 0.80) {
          addImg(new THREE.Vector3(w, -h + i*ROW_HEIGHT + ROW_HEIGHT/2, -d/2), new THREE.Euler(0,-Math.PI/2,0), d, ROW_HEIGHT);
          lastRightIdx = i;
        }
      }
    }
  }

  // --- INITIAL SETUP ---
  useEffect(() => {
    if (!canvasRef.current || !containerRef.current) return;

    // THREE JS SETUP
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    const width = window.innerWidth;
    const height = window.innerHeight;
    const camera = new THREE.PerspectiveCamera(70, width / height, 0.1, 1000);
    camera.position.set(0, 0, 0); 
    cameraRef.current = camera;

    const renderer = new THREE.WebGLRenderer({ 
      canvas: canvasRef.current, 
      antialias: true,
      alpha: false,
      powerPreference: "high-performance"
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    rendererRef.current = renderer;

    // Scene background
    scene.background = new THREE.Color(isDarkMode ? 0x020617 : 0xf8fafc);

    // Generate segments
    const segments: THREE.Group[] = [];
    for (let i = 0; i < NUM_SEGMENTS; i++) {
      const z = -i * SEGMENT_DEPTH;
      const segment = createSegment(z);
      scene.add(segment);
      segments.push(segment);
    }
    segmentsRef.current = segments;

    // Animation Loop
    let frameId: number;
    const animate = () => {
      frameId = requestAnimationFrame(animate);
      if (!cameraRef.current || !sceneRef.current || !rendererRef.current) return;

      const targetZ = -scrollPosRef.current * 0.05; 
      const currentZ = cameraRef.current.position.z;
      cameraRef.current.position.z += (targetZ - currentZ) * 0.1;

      const tunnelLength = NUM_SEGMENTS * SEGMENT_DEPTH;
      const camZ = cameraRef.current.position.z;
      
      segmentsRef.current.forEach((segment) => {
        if (segment.position.z > camZ + SEGMENT_DEPTH) {
          let minZ = 0;
          segmentsRef.current.forEach(s => minZ = Math.min(minZ, s.position.z));
          segment.position.z = minZ - SEGMENT_DEPTH;
          
          const toRemove: THREE.Object3D[] = [];
          segment.traverse((c: THREE.Object3D) => { if (c.name === 'slab_image') toRemove.push(c); });
          toRemove.forEach((c: THREE.Object3D) => {
            segment.remove(c);
            if (c instanceof THREE.Mesh) {
              c.geometry.dispose(); 
              if ((c.material as THREE.MeshBasicMaterial).map) (c.material as THREE.MeshBasicMaterial).map?.dispose();
              c.material.dispose();
            }
          });
          const w = TUNNEL_WIDTH / 2; const h = TUNNEL_HEIGHT / 2; const d = SEGMENT_DEPTH;
          populateImages(segment, w, h, d);
        }

        if (segment.position.z < camZ - tunnelLength - SEGMENT_DEPTH) {
          let maxZ = -999999;
          segmentsRef.current.forEach(s => maxZ = Math.max(maxZ, s.position.z));
          segment.position.z = maxZ + SEGMENT_DEPTH;

          const toRemove: THREE.Object3D[] = [];
          segment.traverse((c: THREE.Object3D) => { if (c.name === 'slab_image') toRemove.push(c); });
          toRemove.forEach((c: THREE.Object3D) => {
            segment.remove(c);
            if (c instanceof THREE.Mesh) {
              c.geometry.dispose(); 
              if ((c.material as THREE.MeshBasicMaterial).map) (c.material as THREE.MeshBasicMaterial).map?.dispose();
              c.material.dispose();
            }
          });
          const w = TUNNEL_WIDTH / 2; const h = TUNNEL_HEIGHT / 2; const d = SEGMENT_DEPTH;
          populateImages(segment, w, h, d);
        }
      });

      rendererRef.current.render(sceneRef.current, cameraRef.current);
    };
    animate();

    const onScroll = () => { scrollPosRef.current = window.scrollY; };
    window.addEventListener('scroll', onScroll);
    const handleResize = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(frameId);
      renderer.dispose();
    };
  }, [isDarkMode]);

  // --- THEME UPDATE EFFECT ---
  useEffect(() => {
    if (!sceneRef.current) return;

    const bgHex = isDarkMode ? 0x020617 : 0xf8fafc;
    const lineHex = isDarkMode ? 0x0ea5e9 : 0x3b82f6;
    const lineOp = isDarkMode ? 0.4 : 0.6;

    sceneRef.current.background = new THREE.Color(bgHex);

    segmentsRef.current.forEach(segment => {
      segment.children.forEach((child: THREE.Object3D) => {
        if (child instanceof THREE.LineSegments) {
          const mat = child.material as THREE.LineBasicMaterial;
          mat.color.setHex(lineHex);
          mat.opacity = lineOp;
          mat.needsUpdate = true;
        }
      });
    });
  }, [isDarkMode]);

  // Text Entrance Animation
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(contentRef.current, 
        { opacity: 0, y: 30, scale: 0.95 },
        { opacity: 1, y: 0, scale: 1, duration: 1.2, ease: "power3.out", delay: 0.5 }
      );
    }, containerRef);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section id="home" ref={containerRef} className={`relative w-full min-h-[calc(100vh-5rem)] overflow-hidden transition-colors duration-700 ${isDarkMode ? 'bg-slate-950' : 'bg-slate-50'}`}>
      <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
        <canvas ref={canvasRef} className="w-full h-full block" />
      </div>
      
      {/* Premium Background Animations */}
      <GlowBackground />
      {isDarkMode && <ParticleBackground id="hero-particles" />}

      <div className={`absolute inset-0 z-[1] ${isDarkMode ? 'bg-slate-950/40' : 'bg-white/40'} backdrop-blur-[1px]`} />

      {/* Floating Tech Indicators */}
      <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden hidden md:block">
        <motion.div animate={{y: [0, -15, 0]}} transition={{duration: 5, repeat: Infinity, ease: "easeInOut"}} className="absolute top-[20%] left-[10%] p-4 glass rounded-2xl text-cyan/70 border-cyan/20">
          <Bot size={28} />
        </motion.div>
        <motion.div animate={{y: [0, 15, 0]}} transition={{duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1}} className="absolute top-[30%] right-[12%] p-4 glass rounded-2xl text-electric-blue/70 border-electric-blue/20">
          <Cpu size={28} />
        </motion.div>
        <motion.div animate={{y: [0, -10, 0]}} transition={{duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2}} className="absolute bottom-[30%] left-[15%] p-4 glass rounded-2xl text-blue-500/70 border-blue-500/20">
          <Network size={28} />
        </motion.div>
        <motion.div animate={{y: [0, 10, 0]}} transition={{duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5}} className="absolute bottom-[25%] right-[15%] p-4 glass rounded-2xl text-purple-500/70 border-purple-500/20">
          <Cloud size={28} />
        </motion.div>
      </div>

      <div className="relative z-10 min-h-[calc(100vh-5rem)] flex items-center justify-center pointer-events-none py-24 pb-48">
        <div ref={contentRef} className="text-center flex flex-col items-center max-w-5xl px-6 pointer-events-auto">
          
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8">
            <Sparkles size={16} className={isDarkMode ? 'text-electric-blue' : 'text-blue-600'} />
            <span className="text-sm font-bold tracking-widest uppercase text-gradient">
              Enterprise AI & Automation
            </span>
          </div>
          
          <h1 className={`text-5xl md:text-6xl lg:text-[76px] leading-[1.1] font-black tracking-tight mb-8 transition-colors duration-500 ${isDarkMode ? 'text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.3)]' : 'text-slate-900'}`}>
            Transforming Industries Through <br className="hidden lg:block"/> <span className="text-gradient">Intelligent Automation</span>
          </h1>
          
          <p className={`text-lg md:text-xl font-medium max-w-3xl leading-relaxed mb-12 transition-colors duration-500 ${isDarkMode ? 'text-gray-300 drop-shadow-sm' : 'text-gray-700'}`}>
            We build production-ready AI models, robust embedded systems, and scalable enterprise SaaS architectures for visionary industrial leaders.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-6 z-20 relative">
            <button 
              onClick={() =>
                window.dispatchEvent(
                  new CustomEvent('openQueryModal', {
                    detail: {
                      formName: 'Free Consultation',
                      title: 'Free Consultation',
                    },
                  })
                )
              }
              className={`rounded-full px-10 py-5 text-sm font-bold tracking-wide uppercase hover:scale-105 transition-all duration-300 flex items-center gap-3 shadow-lg neon-border ${isDarkMode ? 'bg-slate-900/80 text-white hover:bg-slate-800' : 'bg-blue-600 text-white hover:bg-blue-700'}`}
            >
              Start Your Project
              <ArrowRight size={18} />
            </button>
            <button 
              onClick={() => navigate('/solutions')}
              className={`text-sm font-bold uppercase tracking-widest hover:opacity-70 transition-opacity flex items-center gap-2 px-6 py-4 rounded-full ${isDarkMode ? 'text-electric-blue glass hover:shadow-[0_0_20px_rgba(14,165,233,0.3)]' : 'text-blue-600 bg-blue-50'}`}
            >
              Explore Solutions <span>-&gt;</span>
            </button>
          </div>
        </div>
      </div>

      {/* Animated Stats Panel */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-full max-w-4xl px-4 z-20 pointer-events-none">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className={`grid grid-cols-2 md:grid-cols-4 gap-4 p-4 rounded-3xl ${isDarkMode ? 'glass border-white/10' : 'bg-white/80 backdrop-blur-md border border-slate-200 shadow-xl'} pointer-events-auto`}
        >
          <div className="flex flex-col items-center justify-center p-3 text-center border-r border-slate-200 dark:border-white/10 last:border-0 md:border-r-0 md:[&:not(:last-child)]:border-r">
            <CheckCircle className={`mb-2 ${isDarkMode ? 'text-electric-blue' : 'text-blue-600'}`} size={20} />
            <span className={`text-xl font-bold font-sora ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>500+</span>
            <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Projects Delivered</span>
          </div>
          <div className="flex flex-col items-center justify-center p-3 text-center border-r border-slate-200 dark:border-white/10 last:border-0 md:border-r-0 md:[&:not(:last-child)]:border-r">
            <Bot className={`mb-2 ${isDarkMode ? 'text-cyan' : 'text-blue-500'}`} size={20} />
            <span className={`text-xl font-bold font-sora ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>25+</span>
            <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">AI Solutions</span>
          </div>
          <div className="flex flex-col items-center justify-center p-3 text-center border-r border-slate-200 dark:border-white/10 last:border-0 md:border-r-0 md:[&:not(:last-child)]:border-r">
            <Cpu className={`mb-2 ${isDarkMode ? 'text-purple-400' : 'text-purple-600'}`} size={20} />
            <span className={`text-xl font-bold font-sora ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>40+</span>
            <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Industrial Systems</span>
          </div>
          <div className="flex flex-col items-center justify-center p-3 text-center">
            <Activity className={`mb-2 ${isDarkMode ? 'text-emerald-400' : 'text-emerald-600'}`} size={20} />
            <span className={`text-xl font-bold font-sora ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>24/7</span>
            <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Client Support</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
