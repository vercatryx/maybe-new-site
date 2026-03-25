"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function ScrollHero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const catchphraseRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);

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
      if (!canvas || !ctx) return;
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
        end: "+=200%",
        scrub: 0.5,
      }
    });

    // Animate video frames (delayed to start AFTER the focus pull)
    tl.to(sequence, {
      frame: frameCount - 1,
      snap: "frame",
      ease: "none",
      onUpdate: () => render(),
      duration: 0.9
    }, 0.1);

    // Cinematic Focus Pull: Clear video blur instantly (first 10% of scroll)
    tl.fromTo(canvasRef.current,
      { filter: "blur(20px)", scale: 1.05 },
      { filter: "blur(0px)", scale: 1, duration: 0.1, ease: "power2.out" },
      0
    );

    // Cinematic Logo Fade: Slowly disappears stationary over the full scroll
    tl.to(logoRef.current,
      { opacity: 0, duration: 1, ease: "none" },
      0
    );

    // Animate the text popping up (takes full scroll duration)
    tl.fromTo(textRef.current,
      { y: 100, opacity: 0, scale: 0.9 },
      { y: 0, opacity: 1, scale: 1, duration: 0.6, ease: "power1.out" },
      0.4
    );

    // Animate the catchphrase sliding in slightly after the main text
    tl.fromTo(catchphraseRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.5, ease: "power1.out" },
      0.5
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-screen bg-white overflow-hidden"
    >
      {/* Fully Zoomed-in Video Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full object-cover z-0 origin-center"
      />

      {/* Cinematic Center Logo & Welcome Frame */}
      <div 
        ref={logoRef}
        className="absolute inset-0 z-40 flex flex-col items-center justify-center pointer-events-none"
      >
        <img 
          src="/logos/poel%20logo%20.png" 
          alt="Poel AI Official Logo" 
          className="h-28 md:h-40 w-auto object-contain drop-shadow-2xl brightness-0 invert opacity-90"
        />
        <div className="mt-12 flex flex-col items-center gap-2 animate-pulse drop-shadow-lg opacity-80">
          <p className="text-white tracking-[0.3em] uppercase text-xs sm:text-sm font-bold">Scroll to Automate</p>
          <div className="w-px h-6 bg-white/50" />
        </div>
      </div>

      {/* Small Catchphrase at bottom */}
      <div 
        ref={catchphraseRef}
        className="absolute bottom-6 left-6 md:bottom-12 md:left-12 z-20 pointer-events-none"
      >
        <div className="bg-black/40 backdrop-blur-md px-6 py-3 rounded-full border border-white/20 shadow-xl">
          <p className="text-white text-sm md:text-lg font-medium tracking-wide">Stop Hiring. Start Automating.</p>
        </div>
      </div>

      {/* Popping Text Catchphrase with Highlight Block */}
      <div
        ref={textRef}
        className="absolute top-1/2 right-6 lg:right-24 -translate-y-1/2 z-30 w-fit pointer-events-none"
      >
        <div className="bg-black/30 backdrop-blur-sm p-8 md:p-14 rounded-[2.5rem] border border-white/20 shadow-2xl">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-extrabold tracking-tighter text-white leading-none drop-shadow-xl">
            The<br />Chaos<br />Is Over.
          </h1>
        </div>
      </div>
    </div>
  );
}
