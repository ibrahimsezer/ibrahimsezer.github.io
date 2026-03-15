import React from 'react';

const NavigationButton = () => {
    // Sayfa içi kaydırma fonksiyonu
    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="grid grid-cols-2 md:flex items-center gap-2 bg-zinc-950/40 backdrop-blur-md p-2 rounded-2xl border border-white/5 shadow-2xl">
            {/* About Butonu */}
            <button
                onClick={() => scrollToSection('about')}
                className="cursor-pointer bg-zinc-900/80 relative inline-flex items-center justify-center gap-2 rounded-xl text-xs sm:text-sm font-medium transition-all hover:bg-[#F5F5F5] hover:text-[#06B6D4] h-10 sm:h-9 px-3 w-full md:w-auto"
            >
                <svg className="lucide lucide-rocket text-cyan-500 dark:text-cyan-400 shrink-0" strokeLinejoin="round" strokeLinecap="round" strokeWidth={2} stroke="#06B6D4" fill="none" viewBox="0 0 24 24" height={18} width={18} xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
                    <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
                    <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
                    <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
                </svg>
                <span className="truncate">About</span>
            </button>

            {/* Skills Butonu */}
            <button
                onClick={() => scrollToSection('skills')}
                className="cursor-pointer bg-zinc-900/80 relative inline-flex items-center justify-center gap-2 rounded-xl text-xs sm:text-sm font-medium transition-all hover:bg-[#F5F5F5] hover:text-[#60A5FA] h-10 sm:h-9 px-3 w-full md:w-auto"
            >
                <svg className="lucide lucide-newspaper text-blue-400 dark:text-blue-600 shrink-0" strokeLinejoin="round" strokeLinecap="round" strokeWidth={2} stroke="#60A5FA" fill="none" viewBox="0 0 24 24" height={18} width={18} xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2" />
                    <path d="M18 14h-8" />
                    <path d="M15 18h-5" />
                    <path d="M10 6h8v4h-8V6Z" />
                </svg>
                <span className="truncate">Skills</span>
            </button>

            {/* Projects Butonu */}
            <button
                onClick={() => scrollToSection('projects')}
                className="cursor-pointer bg-zinc-900/80 relative inline-flex items-center justify-center gap-2 rounded-xl text-xs sm:text-sm font-medium transition-all hover:bg-[#F5F5F5] hover:text-[#FACC14] h-10 sm:h-9 px-3 w-full md:w-auto"
            >
                <svg className="lucide lucide-sticky-note text-yellow-400 dark:text-yellow-600 shrink-0" strokeLinejoin="round" strokeLinecap="round" strokeWidth={2} stroke="#FACC14" fill="none" viewBox="0 0 24 24" height={18} width={18} xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.5 3H5a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2V8.5L15.5 3Z" />
                    <path d="M15 3v6h6" />
                </svg>
                <span className="truncate">Projects</span>
            </button>

            {/* Contact Butonu */}
            <button
                onClick={() => scrollToSection('contact')}
                className="cursor-pointer bg-zinc-900/80 relative inline-flex items-center justify-center gap-2 rounded-xl text-xs sm:text-sm font-medium transition-all hover:bg-[#F5F5F5] hover:text-[#FB923C] h-10 sm:h-9 px-3 w-full md:w-auto"
            >
                <svg className="lucide lucide-star text-orange-400 dark:text-orange-600 shrink-0" strokeLinejoin="round" strokeLinecap="round" strokeWidth={2} stroke="#FB923C" fill="#FB923C" viewBox="0 0 24 24" height={18} width={18} xmlns="http://www.w3.org/2000/svg">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
                <span className="truncate">Contact</span>
            </button>
        </div>
    );
}

export default NavigationButton;