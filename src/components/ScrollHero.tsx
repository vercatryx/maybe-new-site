"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function ScrollHero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = 1920;
    canvas.height = 1080;

    const frameCount = 121;
    const currentFrame = (index: number) =>
      `/frames/frame_${index.toString().padStart(3, "0")}.jpg`;

    const images: HTMLImageElement[] = [];
    const sequence = { frame: 0 };

    for (let i = 0; i < frameCount; i++) {
      const img = new Image();
      img.src = currentFrame(i);
      images.push(img);
    }

    images[0].onload = render;

    function render() {
      if (images[sequence.frame] && images[sequence.frame].complete) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(images[sequence.frame], 0, 0, canvas.width, canvas.height);
      }
    }

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        pin: true,           
        start: "top top",    
        end: "+=300%",       
        scrub: 0.5,          
      }
    });

    tl.to(sequence, {
      frame: frameCount - 1,
      snap: "frame",
      ease: "none",
      onUpdate: () => render()
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div ref={containerRef} className="relative w-full h-screen bg-white overflow-hidden">
      <div className="absolute inset-0 flex flex-col items-start justify-center top-[-40%] z-10 pointer-events-none p-12">
        <h1 className="text-black text-5xl md:text-8xl font-bold tracking-tighter drop-shadow-2xl text-left bg-white/70 p-4 rounded-3xl backdrop-blur-sm border border-black/10">
          Bring order <br/> to chaos.
        </h1>
        <p className="text-zinc-800 mt-6 text-2xl max-w-lg text-left font-medium drop-shadow-xl bg-white/70 p-4 rounded-2xl backdrop-blur-sm border border-black/10">
          Scroll down to watch your workflows automate.
        </p>
      </div>

      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full object-cover z-0"
      />
    </div>
  );
}
