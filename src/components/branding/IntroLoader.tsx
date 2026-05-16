import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BRAND_ASSETS } from '@/constants/branding';

const INTRO_STORAGE_KEY = 'shrigyro:intro-played';
const INTRO_FAILSAFE_MS = 12000;

const IntroLoader: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const hasFinishedRef = useRef(false);
  const closeTimerRef = useRef<number | null>(null);
  const failsafeTimerRef = useRef<number | null>(null);
  const [isVisible, setIsVisible] = useState(() => {
    if (typeof window === 'undefined') return false;
    return sessionStorage.getItem(INTRO_STORAGE_KEY) !== 'true';
  });
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    if (!isVisible) return;

    const previousOverflow = document.body.style.overflow;
    const previousOverscroll = document.documentElement.style.overscrollBehavior;
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overscrollBehavior = 'none';

    failsafeTimerRef.current = window.setTimeout(() => {
      finishIntro();
    }, INTRO_FAILSAFE_MS);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.documentElement.style.overscrollBehavior = previousOverscroll;
      if (closeTimerRef.current) window.clearTimeout(closeTimerRef.current);
      if (failsafeTimerRef.current) window.clearTimeout(failsafeTimerRef.current);
    };
  }, [isVisible]);

  const finishIntro = () => {
    if (hasFinishedRef.current) return;
    hasFinishedRef.current = true;
    sessionStorage.setItem(INTRO_STORAGE_KEY, 'true');
    if (failsafeTimerRef.current) window.clearTimeout(failsafeTimerRef.current);
    closeTimerRef.current = window.setTimeout(() => setIsVisible(false), 420);
  };

  const handleCanPlay = () => {
    setIsReady(true);
    const video = videoRef.current;
    if (!video) return;

    video.muted = true;
    video.play().catch(() => {
      window.setTimeout(finishIntro, 1600);
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden bg-black"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, filter: 'blur(10px)' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          aria-hidden="true"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.22),transparent_34%),linear-gradient(180deg,#020617_0%,#000_55%,#020617_100%)]" />
          <motion.video
            ref={videoRef}
            src={BRAND_ASSETS.introVideo}
            className="relative z-10 h-full w-full object-cover"
            autoPlay
            muted
            playsInline
            preload="metadata"
            controls={false}
            disablePictureInPicture
            onCanPlay={handleCanPlay}
            onEnded={finishIntro}
            onError={finishIntro}
            initial={{ opacity: 0, scale: 1.015 }}
            animate={{ opacity: isReady ? 1 : 0, scale: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          />
          <motion.div
            className="absolute inset-0 z-20 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_30%,rgba(0,0,0,0.42)_100%)]"
            animate={{ opacity: isReady ? 0.55 : 0.9 }}
            transition={{ duration: 0.8 }}
          />
          <motion.div
            className="absolute z-30 flex h-24 w-24 items-center justify-center rounded-full border border-blue-400/20 bg-black/30 shadow-[0_0_70px_rgba(37,99,235,0.45)] backdrop-blur-md sm:h-28 sm:w-28"
            animate={{ opacity: isReady ? 0 : 1, scale: isReady ? 0.9 : 1 }}
            transition={{ duration: 0.35 }}
          >
            <img
              src={BRAND_ASSETS.globe}
              alt="ShriGyro Technologies loading logo"
              className="h-14 w-14 animate-pulse object-contain drop-shadow-[0_0_22px_rgba(56,189,248,0.85)] sm:h-16 sm:w-16"
              width="64"
              height="64"
              decoding="async"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default IntroLoader;
