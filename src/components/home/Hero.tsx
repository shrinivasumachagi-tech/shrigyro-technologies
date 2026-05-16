import React, { useRef, useLayoutEffect, useEffect } from 'react';
import gsap from 'gsap';
import * as THREE from 'three';
import { ArrowRight } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';
import { useNavigate } from 'react-router-dom';

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

      <div className={`absolute inset-0 z-[1] ${isDarkMode ? 'bg-slate-950/25' : 'bg-white/25'}`} />

      <div className="relative z-10 min-h-[calc(100vh-5rem)] flex items-center justify-center pointer-events-none py-24">
        <div ref={contentRef} className="text-center flex flex-col items-center max-w-4xl px-6 pointer-events-auto">
          
          <h1 className={`text-5xl md:text-7xl lg:text-[90px] leading-[0.95] font-bold tracking-tighter mb-8 transition-colors duration-500 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
            Bridging Intelligent Automation, Industrial Innovation & Digital Transformation
          </h1>
          
          <p className={`text-lg md:text-xl font-normal max-w-2xl leading-relaxed mb-12 transition-colors duration-500 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            ShriGyro Technologies builds modern AI automation systems, embedded solutions, smart web platforms, industrial monitoring systems, and intelligent digital infrastructure for startups, industries, and businesses.</p>
          <p className={`text-lg md:text-xl font-normal max-w-2xl leading-relaxed mb-12 transition-colors duration-500 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>From intelligent automation and AI-powered business systems to industrial embedded solutions and scalable web platforms, we help businesses adopt modern technology with practical and affordable innovation.</p>

          <div className="flex flex-col sm:flex-row items-center gap-6">
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
              className={`rounded-full px-8 py-4 text-sm font-medium hover:scale-105 transition-all duration-300 flex items-center gap-2 shadow-lg ${isDarkMode ? 'bg-electric-blue text-white hover:bg-cyan-500' : 'bg-blue-600 text-white hover:bg-blue-700'}`}
            >
              Free Consultation
              <ArrowRight size={18} />
            </button>
            <button 
              onClick={() => navigate('/solutions')}
              className={`text-sm font-medium hover:opacity-70 transition-opacity flex items-center gap-1 ${isDarkMode ? 'text-electric-blue' : 'text-blue-600'}`}
            >
              Explore Solutions <span>-&gt;</span>
            </button>
          </div>

          <div className="mt-16 flex flex-wrap justify-center gap-6 text-xs font-semibold tracking-widest opacity-60">
            <span>AI-POWERED</span>
            <span>/</span>
            <span>ENTERPRISE-GRADE</span>
            <span>/</span>
            <span>CLOUD-NATIVE</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
