import { useEffect, useState } from "react";
import './scroll-to-top.css';


const UpArrowIcon = () => (
    <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px" width="32px" height="32px" viewBox="0 0 122.88 80.593" enable-background="new 0 0 122.88 80.593" ><g><polygon points="122.88,80.593 122.88,49.772 61.44,0 0,49.772 0,80.593 61.44,30.82 122.88,80.593"/></g></svg>
 );

const ScrollToTop: React.FC = () => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setVisible(true)
            } else {
                setVisible(false)
            }
        };

        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    if (!visible) return null;

    return (
        <button className="scroll-to-top" onClick={scrollToTop} aria-label="Go to top"><UpArrowIcon /></button >
    );

};

export default ScrollToTop;