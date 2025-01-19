"use client";

import { useEffect, useState } from "react";
import Particles from "../../components/magicui/particles";

export function ParticlesDemo() {
  const [color, setColor] = useState("#8B5CF6"); // Modern purple color

  return (
    <div className="relative min-h-[600px] w-full flex flex-col items-center justify-center overflow-hidden rounded-2xl border border-gray-800 bg-gradient-to-br from-gray-900 to-black p-8">
      <div className="relative z-10 text-center max-w-3xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-indigo-300 mb-4 animate-fade-in">
          Get In Touch
        </h2>
        <p className="text-lg md:text-xl text-gray-300/90 mb-10 leading-relaxed">
          Feel free to reach out for collaborations, opportunities, or just a friendly hello. 
          I'm always excited to connect with fellow developers and creators!
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="mailto:ibrahimsezer.ceng@gmail.com"
            className="group relative px-8 py-4 bg-gradient-to-r from-violet-600 to-indigo-600 rounded-full text-white font-semibold shadow-lg shadow-violet-500/25 hover:shadow-violet-500/40 transition-all duration-300 hover:-translate-y-1"
          >
            <span className="relative z-10">Let's Connect</span>
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-violet-600/50 to-indigo-600/50 blur-lg group-hover:blur-xl transition-all duration-300 opacity-75"></div>
          </a>
          <a
            href="https://github.com/ibrahimsezer"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 rounded-full text-gray-300 font-semibold border border-gray-700 hover:border-violet-500/50 hover:text-white transition-all duration-300 hover:-translate-y-1"
          >
            View GitHub
          </a>
        </div>
      </div>
      <Particles
        className="absolute inset-0 z-0"
        quantity={150}
        ease={100}
        color={color}
        refresh
        staticity={30}
      />
    </div>
  );
}
