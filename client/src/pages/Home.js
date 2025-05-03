import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaEnvelope, FaMedium } from 'react-icons/fa';
import { SiDotnet, SiTensorflow, SiPytorch, SiX, SiFlutter, } from 'react-icons/si';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { TypingAnimation } from '../components/magicui/typing-animation.tsx';
import { ParticlesDemo } from '../components/basic-components/particles.tsx';
import { AnimatedShinyText } from "../components/magicui/animated-shiny-text.tsx";

//import {MarqueeDemo} from './components/basic-components/marquee-components.tsx'
//import MediumButton from './components/basic-components/medium-button.jsx';

function Home() {
  const navigate = useNavigate();
  const goToBlog = () => {
    navigate('/blog');
  }
  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col">
      {/* Hero Section */}
      <header className="h-screen flex items-center justify-center relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="images/colorful_bg.jpg"
            alt="Background"
            className="w-full h-full object-cover opacity-100"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/70 to-gray-900/90" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center z-10"
        >
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-48 h-48 md:w-96 md:h-96 mx-auto mb-8 rounded-full overflow-hidden border-4 border-purple-500/30 shadow-lg shadow-purple-500/20 relative"
          >
            <video
              className="w-full h-full object-cover object-center scale-100"
              src="images/intro-bg.mp4"
              autoPlay
              muted
              loop
              playsInline
            >
              Your browser does not support the video tag.
            </video>
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent" />
          </motion.div>
          <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
            Ibrahim Sezer
          </h1>
          {/* TypingAnimation*/}
          <TypingAnimation
            className="text-xl md:text-2xl text-gray-300 mb-8"
            duration={50}
            delay={500}
            startOnView={true}
          >
            Computer Engineer & AI Enthusiast
          </TypingAnimation>
          <div className="flex gap-4 justify-center">
            <SocialLink href="https://github.com/ibrahimsezer" icon={<FaGithub />} />
            <SocialLink href="https://www.linkedin.com/in/ibrahim-sezer" icon={<FaLinkedin />} />
            <SocialLink href="mailto:ibrahimsezer.ceng@gmail.com" icon={<FaEnvelope />} />
            <SocialLink href="https://x.com/joulesezarwatt" icon={<SiX />} />
            <SocialLink href="https://medium.com/@ibrahimsezer" icon={<FaMedium />} />
          </div>

          <div className="flex gap-4 justify-center">
            <div style={{ padding: "30px" }}>
              <button onClick={goToBlog}>
                <AnimatedShinyText>Go to Blog</AnimatedShinyText>
              </button>
            </div>
          </div>
        </motion.div>
      </header>

      {/* About Section */}
      <Section id="about" title="About Me">
        <div className="max-w-3xl mx-auto text-gray-300">
          <p className="mb-4">
            I am a computer engineer with a passion for developing innovative ideas and products using generative artificial intelligence.
            I am currently working on TÜBİTAK projects involving deep learning and machine learning, and also developing mobile applications with Flutter. </p>
          <p className="mb-12">
            As a YouTuber, I produce music and visual content using artificial intelligence, exploring the intersection of technology and creativity.
          </p>

          <div className="mt-12">
            <h3 className="text-2xl font-semibold mb-6 text-white">Work History</h3>
            <div className="space-y-8">
              <WorkHistoryItem
                company="TUBITAK"
                position="Project Research Assistant"
                duration="1 Year"
                description=" Within the scope of the TÜBİTAK project, where I predicted earthquakes using GNSS (Global Satellite Station
                          Coordinate Data) data, I carried out research and development with MATLAB using machine learning and deep learning
                          applications. In this process, I developed various algorithms and methods to create earthquake prediction models by
                          processing large data sets. Additionally, I gained in-depth knowledge and experience in data analysis and model
                          optimization."
              />
              <WorkHistoryItem
                company="LOG Find Solutions for Technology"
                position="Flutter Developer | Intern"
                duration="1 Year"
                description="Developed user-friendly mobile applications using Flutter framework, implementing state management and working with Agile methodologies."
              />
              <WorkHistoryItem
                company="Morphosium Yazılım Ve Donanım Hizmetleri"
                position=".Net Developer | Intern"
                duration="3 Months"
                description="Worked on monolithic and microarchitectural structures with .Net Core, gaining experience in modern software architectures."
              />
              <WorkHistoryItem
                company="IEEE Amasya Student Branch"
                position="Social Media Committee Leader"
                duration="1 Year"
                description="Led social media initiatives and community engagement for the IEEE student branch."
              />
            </div>
          </div>

          <div className="mt-16">
            <h3 className="text-2xl font-semibold mb-6 text-white">Education</h3>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="relative pl-8 border-l-2 border-purple-500/30"
            >
              <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-purple-500/30 border-2 border-purple-500"></div>
              <h4 className="text-xl font-semibold text-white">Computer Engineering</h4>
              <div className="flex flex-wrap items-center gap-2 mt-1 mb-2">
                <span className="text-purple-400">Amasya University</span>
                <span className="text-gray-500">•</span>
                <span className="text-gray-400">3rd Place in Faculty</span>
              </div>
              <div className="text-gray-300">
                <p className="mb-2">Final Grade: 3.22</p>
                <p className="font-medium">Thesis: Developing an earthquake prediction algorithms using Time-Resolved GNSS data</p>
              </div>
            </motion.div>
          </div>
        </div>
      </Section>

      {/* Skills Section */}
      <Section id="skills" title="Skills">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-16">
          <ToolCard
            icon={<SiFlutter className="w-12 h-12" />}
            title="Flutter"
            description="Mobile app development with Flutter framework and Dart"
            color="cyan"
            skills={["State Management", "UI/UX Design", "Firebase", "WebRTC"]}
          />
          <ToolCard
            icon={<SiDotnet className="w-12 h-12" />}
            title="C# & .NET"
            description="Backend development with .NET Core and C#"
            color="purple"
            skills={["ASP.NET Core", "Entity Framework", "SQL Server", "REST APIs"]}
          />
          <ToolCard
            icon={<SiTensorflow className="w-12 h-12" />}
            title="Deep Learning"
            description="Neural networks and deep learning applications"
            color="orange"
            skills={["TensorFlow", "Neural Networks", "Computer Vision", "MATLAB"]}
          />
          <ToolCard
            icon={<SiPytorch className="w-12 h-12" />}
            title="AI & ML"
            description="Machine learning and artificial intelligence solutions"
            color="red"
            skills={["PyTorch", "Regression", "Classification", "Data Analysis"]}
          />
        </div>
      </Section>

      {/* Projects Section */}
      <Section id="projects" title="Featured Projects">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <ProjectCard
            title="KafeKolay"
            description="Cafe Management Saas Platform"
            tags={["React.js", "Firebase Authentication", "TailwindCSS", "Chart.js for Analytics", "Framer Motion for Animations"]}
            link="https://kafekolay.web.app"
            image="https://github.com/ibrahimsezer/kafekolay/raw/main/src/logo600.png"
            className="h-48"
          /><ProjectCard
            title="Finavix"
            description="Personal Finance Manager App (Coming soon to PlayStore)"
            tags={["Flutter", "Riverpod", "Firebase", "MVVM", "Authorization", "Cursor AI"]}
            link="#"
            image="images/finavix.png"
            className="h-48"
          />
          <ProjectCard
            title="Media Player"
            description="A modern and feature-rich media player application built with Flutter, offering a seamless music playback experience with an intuitive user interface and dynamic theming capabilities."
            tags={["Flutter", "Provider", "MVVM", "UI/UX Design"]}
            link={"https://github.com/ibrahimsezer/mediaplayer"}
            image="https://github.com/ibrahimsezer/mediaplayer/blob/main/lib/assets/images/default_music_photo.png?raw=true"
            className="h-48"
          />
          <ProjectCard
            title="Seezme"
            description="A feature-rich voice and chat messaging application developed in Flutter with real-time communication capabilities."
            tags={["Flutter", "Provider", "Firebase", "Webrtc Module", "UI/UX Design"]}
            link="https://github.com/ibrahimsezer/Seezme"
            image="https://github.com/ibrahimsezer/Seezme/blob/main/lib/assets/appimage/logosquare.jpeg?raw=true"
            className="h-48"
          />
          <ProjectCard
            title="File Transfer"
            description="A file transfer application that allows users to share files using single-use codes. Built with React, Node.js, and Express. (Cursor ai was used)"
            tags={["React", "Node.js", "Express", "Tailwindcss", "Cursor AI"]}
            link="https://file-tranfer-web-interface.onrender.com/"
            image="https://github.com/ibrahimsezer/file_tranfer_web_interface/blob/main/client/public/images/logo.png?raw=true"
            className="h-48"
          />
          <ProjectCard
            title="Draggable Interaction"
            description="A modular application combining diagram and workflow tools for interactive user experiences."
            tags={["Flutter", "UI/UX", "Interaction Design", "Endless Board"]}
            link="https://github.com/ibrahimsezer/Draggable_Interaction"
            image="https://github.com/ibrahimsezer/Draggable_Interaction/blob/main/lib/assets/images/logo.jpg?raw=true"
            className="h-48"
          />
          <ProjectCard
            title="Lofi Sezar | Youtube Channel"
            description="In this channel, you will meet the music produced at the point where artificial intelligence meets creativity."
            tags={["Capcut", "Canva", "Generative AI", "Youtube"]}
            link="https://www.youtube.com/@LofiSezar"
            image="https://avatars.githubusercontent.com/u/100922010?v=4"
            className="h-48"
          />
        </div>
      </Section>
      {/* Medium Articles Section */}

      {/* <Section id="medium-articles" title="My Latest Medium Articles">
          <MarqueeDemo></MarqueeDemo>
        <div className="my-5 mt-8 flex justify-center">
          <MediumButton href="https://medium.com/@ibrahimsezer" />
        </div>
  
        </Section> */}
      {/* Contact Section */}

      <Section id="contact" title="">

      </Section>
      <ParticlesDemo />

      {/* Navigation */}
      <nav className="fixed bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-800/80 backdrop-blur-sm px-6 py-3 rounded-full z-50">
        <ul className="flex space-x-8">
          <NavItem to="about" label="About" />
          <NavItem to="skills" label="Skills" />
          <NavItem to="projects" label="Projects" />
          <NavItem to="contact" label="Contact" />
        </ul>
      </nav>

    </div>
  );
}

export default Home;



// Helper Components
const SocialLink = ({ href, icon }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-2xl text-gray-400 hover:text-white transition-colors"
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
  >
    {icon}
  </motion.a>
);

const Section = ({ id, title, children }) => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <section id={id} className="py-20 px-4">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">{title}</h2>
        {children}
      </motion.div>
    </section>
  );
};


const ProjectCard = ({ title, description, tags, link, image, className }) => (
  <motion.a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ scale: 1.02 }}
    className="block bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors overflow-hidden"
  >
    <div className="aspect-square relative">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
    </div>
    <div className="p-6">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-300 mb-4">{description}</p>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag, index) => (
          <span key={index} className="px-3 py-1 bg-gray-700 rounded-full text-sm">
            {tag}
          </span>
        ))}
      </div>
    </div>
  </motion.a>
);

const NavItem = ({ to, label }) => (
  <li>
    <Link
      to={to}
      smooth={true}
      duration={500}
      className="text-gray-400 hover:text-white cursor-pointer transition-colors"
    >
      {label}
    </Link>
  </li>
);

const WorkHistoryItem = ({ company, position, duration, description }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}
    className="relative pl-8 border-l-2 border-purple-500/30"
  >
    <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-purple-500/30 border-2 border-purple-500"></div>
    <h4 className="text-xl font-semibold text-white">{company}</h4>
    <div className="flex flex-wrap items-center gap-2 mt-1 mb-2">
      <span className="text-purple-400">{position}</span>
      <span className="text-gray-500">•</span>
      <span className="text-gray-400">{duration}</span>
    </div>
    <p className="text-gray-300">{description}</p>
  </motion.div>
);

const ToolCard = ({ icon, title, description, color, skills }) => (
  <motion.div
    whileHover={{ scale: 1.02 }}
    className="relative group"
  >
    <div className="bg-gray-800 rounded-xl p-6 relative z-10 h-full">
      <div className="flex flex-col items-center text-center">
        <div className={`text-${color}-400 mb-4 transition-colors duration-300 group-hover:text-${color}-300`}>
          {icon}
        </div>
        <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
        <p className="text-gray-400 text-sm mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 justify-center">
          {skills.map((skill, index) => (
            <span
              key={index}
              className={`text-xs px-2 py-1 rounded-full bg-gray-700/50 text-gray-300`}
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
    <motion.div
      className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl -z-10"
      style={{
        background: `radial-gradient(circle, ${color}30 0%, transparent 70%)`,
        transform: 'scale(1.1)',
      }}
    />
  </motion.div>
);