import React, { useEffect, useRef, useState } from 'react';

const CustomCursor = () => {
    const cursorRef = useRef(null);
    const [isHovering, setIsHovering] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const timeoutRef = useRef(null);

    useEffect(() => {
        // Cihazın dokunmatik olup olmadığını kontrol et
        const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

        // Eğer dokunmatik cihazsa hiçbir event listener ekleme ve çık
        if (isTouchDevice) return;

        const cursor = cursorRef.current;
        if (!cursor) return;

        const onMouseMove = (e) => {
            if (!isVisible) setIsVisible(true);
            cursor.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;

            if (timeoutRef.current) clearTimeout(timeoutRef.current);
            timeoutRef.current = setTimeout(() => {
                setIsVisible(false);
            }, 3000);
        };

        const handleMouseOver = (e) => {
            if (e.target.closest('button') || e.target.closest('a') || e.target.closest('.cursor-pointer')) {
                setIsHovering(true);
            }
        };

        const handleMouseOut = () => {
            setIsHovering(false);
        };

        window.addEventListener('mousemove', onMouseMove);
        window.addEventListener('mouseover', handleMouseOver);
        window.addEventListener('mouseout', handleMouseOut);
        document.addEventListener('mouseleave', () => setIsVisible(false));

        return () => {
            window.removeEventListener('mousemove', onMouseMove);
            window.removeEventListener('mouseover', handleMouseOver);
            window.removeEventListener('mouseout', handleMouseOut);
            document.removeEventListener('mouseleave', () => setIsVisible(false));
            if (timeoutRef.current) clearTimeout(timeoutRef.current);
        };
    }, [isVisible]);

    return (
        <div
            ref={cursorRef}
            /* hidden lg:block: 1024px altındaki cihazlarda (tabletler dahil) gizler */
            className={`fixed top-0 left-0 pointer-events-none z-[9999] will-change-transform hidden lg:block transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
        >
            <div className={`transition-all duration-300 ease-out ${isHovering ? 'scale-150' : 'scale-100'}`}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" style={{ transform: 'rotate(-15deg)' }}>
                    <defs>
                        <linearGradient id="cursorGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor={isHovering ? "#fb923c" : "#9333ea"} />
                            <stop offset="100%" stopColor={isHovering ? "#facc14" : "#4f46e5"} />
                        </linearGradient>
                    </defs>
                    <path
                        d="M5.5 3.21V20.8c0 .45.54.67.85.35l4.83-4.83c.2-.2.46-.31.73-.31h6.29c.45 0 .67-.54.35-.85L6.35 2.86c-.31-.31-.85-.09-.85.35z"
                        fill="url(#cursorGradient)"
                        stroke="white"
                        strokeWidth="1"
                    />
                </svg>
            </div>
        </div>
    );
};

export default CustomCursor;