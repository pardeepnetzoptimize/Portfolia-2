"use client";

import { useEffect, useRef, useState } from "react";
import { useMotionValueEvent, useScroll, useTransform } from "framer-motion";

import Overlay from "./Overlay";

const FRAME_COUNT = 75;
const FRAME_PREFIX = "frame_";
const FRAME_SUFFIX = "_delay-0.066s.webp";

const getFramePath = (index: number) => {
  const paddedIndex = index.toString().padStart(2, "0");
  return `/sequence/${FRAME_PREFIX}${paddedIndex}${FRAME_SUFFIX}`;
};

export default function ScrollyCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    let isMounted = true;
    const loadedImages: HTMLImageElement[] = [];
    let loadedCount = 0;

    for (let i = 0; i < FRAME_COUNT; i++) {
      const img = new window.Image();
      img.src = getFramePath(i);
      img.onload = () => {
        loadedCount++;
        if (loadedCount === FRAME_COUNT && isMounted) {
          setImagesLoaded(true);
        }
      };
      loadedImages.push(img);
    }

    setImages(loadedImages);

    return () => {
      isMounted = false;
    };
  }, []);

  const frameIndex = useTransform(scrollYProgress, [0, 1], [0, FRAME_COUNT - 1]);

  const drawFrame = (index: number) => {
    if (!canvasRef.current || images.length === 0) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const img = images[index];
    if (!img) return;

    const canvasRatio = canvas.width / canvas.height;
    const imgRatio = img.width / img.height;

    let renderWidth;
    let renderHeight;
    let x;
    let y;

    if (canvasRatio > imgRatio) {
      renderWidth = canvas.width;
      renderHeight = canvas.width / imgRatio;
      x = 0;
      y = (canvas.height - renderHeight) / 2;
    } else {
      renderHeight = canvas.height;
      renderWidth = canvas.height * imgRatio;
      x = (canvas.width - renderWidth) / 2;
      y = 0;
    }

    ctx.fillStyle = "#121212";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, x, y, renderWidth, renderHeight);
  };

  useMotionValueEvent(frameIndex, "change", (latest) => {
    if (!imagesLoaded) return;
    const currentIndex = Math.min(FRAME_COUNT - 1, Math.max(0, Math.floor(latest)));
    drawFrame(currentIndex);
  });

  useEffect(() => {
    const handleResize = () => {
      if (!canvasRef.current) return;

      canvasRef.current.width = window.innerWidth;
      canvasRef.current.height = window.innerHeight;

      if (imagesLoaded) {
        drawFrame(Math.floor(frameIndex.get()));
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, [imagesLoaded]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div
      ref={containerRef}
      className="relative h-[420vh] w-full bg-[#121212] sm:h-[460vh] md:h-[500vh]"
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <canvas
          ref={canvasRef}
          className="absolute inset-0 h-full w-full object-cover"
        />

        {!imagesLoaded && (
          <div className="absolute inset-0 z-50 flex items-center justify-center bg-[#121212] transition-opacity duration-500">
            <div className="flex flex-col items-center gap-4">
              <div className="h-8 w-8 animate-spin rounded-full border-t-2 border-white"></div>
              <span className="text-center text-xs tracking-[0.3em] text-white/50 uppercase sm:text-sm">
                Loading Experience
              </span>
            </div>
          </div>
        )}

        <div className="pointer-events-none absolute inset-0 z-10 h-full w-full">
          <Overlay scrollYProgress={scrollYProgress} />
        </div>
      </div>
    </div>
  );
}
