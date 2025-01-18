"use client";

import { useEffect, useState } from "react";

import Particles from "../../components/magicui/particles";

export function ParticlesDemo() {
  const [color, setColor] = useState("#ffffff");

  return (
    <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
      <span className="pointer-events-none z-10 whitespace-pre-wrap text-center text-8xl font-semibold leading-none">
        Particles
      </span>
      <Particles
        className="absolute inset-0 z-0"
        quantity={100}
        ease={80}
        color={color}
        refresh
      />
    </div>
  );
}
