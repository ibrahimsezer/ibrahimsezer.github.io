import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { AnimatedShinyText } from '../components/magicui/animated-shiny-text.tsx';
import { FaTerminal } from 'react-icons/fa';
import ExpandableCodeCard from '../components/basic-components/ExpandableCodeCard';
import { turbo_typescriptInitialize, flutterDebugCode } from '../lib/const';

function Blog() {
  const navigate = useNavigate();
  const goToHome = () => {
    navigate('/');
  };



  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col">
      <header className="py-8 px-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
            Blog
          </h1>
          <button
            onClick={goToHome}
            className="px-4 py-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors"
          >
            <AnimatedShinyText>Back to Home</AnimatedShinyText>
          </button>
        </div>
      </header>

      <main className="flex-1 py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <ExpandableCodeCard
              title="Flutter Wi-Fi Debugging Guide"
              icon={<FaTerminal />}
              code={flutterDebugCode}
              language="bash"
              description="This script helps you set up Wi-Fi debugging for Flutter applications. It automates the process of connecting your Android device to your development machine over Wi-Fi, eliminating the need for USB cables. The script checks for ADB installation, lists connected devices, and guides you through the connection process."
            />
            <ExpandableCodeCard
              title="Turbo+Typescript Initialize Guide"
              icon={<FaTerminal />}
              code={turbo_typescriptInitialize}
              language="bash"
              description="This script sets up a monorepo project using Turborepo and TypeScript. It creates a structured project with separate frontend (Vite + React + TypeScript) and backend (Express + TypeScript) applications, along with shared packages. The script handles all the necessary configurations for a modern development environment."
            />
          </motion.div>
        </div>
      </main>
    </div>
  );
}

export default Blog;