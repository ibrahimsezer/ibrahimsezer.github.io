"use client";

import { useState } from "react";
import Particles from "../magicui/particles";
import { MarqueeDemo } from "./marquee-components";
import { FaGithub, FaLinkedin, FaMedium, FaEnvelope, FaDev } from "react-icons/fa";

export function ParticlesDemo() {
  const [color] = useState("#8B5CF6"); // Modern purple color

  const socialLinks = [
    {
      icon: <FaEnvelope className="w-6 h-6" />,
      href: "mailto:ibrahimsezer.ceng@gmail.com",
      label: "Email"
    },
    {
      icon: <FaGithub className="w-6 h-6" />,
      href: "https://github.com/ibrahimsezer",
      label: "GitHub"
    },
    {
      icon: <FaLinkedin className="w-6 h-6" />,
      href: "https://www.linkedin.com/in/ibrahim-sezer/",
      label: "LinkedIn"
    },
    {
      icon: <FaMedium className="w-6 h-6" />,
      href: "https://medium.com/@ibrahimsezer",
      label: "Medium"
    },
    {
      icon: <FaDev className="w-6 h-6" />,
      href: "https://dev.to/ibrahimsezer",
      label: "Dev.to"
    }
  ];

  return (
    <footer className="relative w-full min-h-screen bg-gradient-to-br from-gray-900 to-black mt-0">
      <div className="relative z-10 w-full">
        <div className="py-12">
          <h3 className="text-3xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-indigo-300 mb-8">
            Latest Articles
          </h3>
          <MarqueeDemo />
        </div>
        <div className="flex gap-4 justify-center">
          <div style={{ padding: "30px" }}>
            <video
              src="images/app_scene.mp4"
              autoPlay
              loop
              muted
              playsInline
              width="320"
              height="180"
              style={{ borderRadius: "12px", boxShadow: "0 2px 12px rgba(0,0,0,0.2)" }}
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 py-12 flex flex-col items-center">
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-indigo-300 mb-8 animate-fade-in text-center">
            Let's Connect
          </h2>

          <div className="flex flex-wrap justify-center gap-6 mb-12">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 px-6 py-3 bg-gray-800/50 backdrop-blur-sm rounded-xl hover:bg-gray-700/50 transition-all duration-300 hover:-translate-y-1"
              >
                {link.icon}
                <span className="text-gray-300 group-hover:text-white font-medium">
                  {link.label}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>

      <Particles
        className="absolute inset-0 z-0"
        quantity={200}
        ease={100}
        color={color}
        refresh
        staticity={30}
      />
    </footer>
  );
}
