import React, { useEffect, useRef, useState } from 'react';

const CustomCursor = () => {
    const cursorRef = useRef(null);
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        const cursor = cursorRef.current;
        if (!cursor) return;

        // Fare koordinatlarını state yerine doğrudan değişkenlerde tutuyoruz
        let mouseX = 0;
        let mouseY = 0;

        const onMouseMove = (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;

            // React render döngüsünü beklemeden doğrudan DOM'u güncelliyoruz
            // Bu, 'lag' hissini tamamen ortadan kaldırır
            cursor.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
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

        return () => {
            window.removeEventListener('mousemove', onMouseMove);
            window.removeEventListener('mouseover', handleMouseOver);
            window.removeEventListener('mouseout', handleMouseOut);
        };
    }, []);

    return (
        <div
            ref={cursorRef}
            className="fixed top-0 left-0 pointer-events-none z-[9999] will-change-transform"
            style={{
                // İlk değerler ve geçiş efektleri
                backfaceVisibility: 'hidden',
                perspective: 1000
            }}
        >
            <div className={`transition-all duration-300 ease-out ${isHovering ? 'scale-150' : 'scale-100'}`}
                style={{ filter: isHovering ? 'drop-shadow(0px 0px 8px rgba(168, 85, 247, 0.6))' : 'drop-shadow(0px 4px 6px rgba(0,0,0,0.3))' }}>
                <svg
                    width="28" height="28" viewBox="0 0 24 24" fill="none"
                    style={{ transform: 'rotate(-15deg)' }}
                >
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