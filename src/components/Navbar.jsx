import React, { useState, useEffect } from "react";
import { animateScroll as scroll, scroller } from 'react-scroll';

export default function Navbar() {
    const [isScrolling, setIsScrolling] = useState(false);
    const [navbarWidth, setNavbarWidth] = useState(64); // Initial width

    const options = {
        duration: 500,
        smooth: true,
    };

    const scrollToTop = (e) => {
        scroll.scrollToTop(options);
        e.preventDefault();
    };

    const About = (e) => {
        scroller.scrollTo('about', {
            duration: 400,
            delay: 10,
            smooth: true,
            offset: -180,
        });
        e.preventDefault();
    };

    const scrollToBottom = (e) => {
        e.preventDefault(); // Prevent default link behavior
        scroll.scrollTo(1883); // Use predefined options
    };

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolling(window.scrollY > 0);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        // Update navbar width based on scrolling state
        setNavbarWidth(isScrolling ? 96 : 64);
    }, [isScrolling]);

    return (
        <div className={`navbar text-[#cfcfcf] ${isScrolling ? 'sticky' : ''}  opacity-95 top-0 md:top-[10px] flex flex-row md:mt-5 mt-0 z-auto justify-center items-center md:w-96 w-full gap-24 mx-auto text-primary-brown ${isScrolling ? 'bg-meow' : ''} py-5 px-16 h-16 rounded-xl transition-all ease-in-out border-spacing-1 duration-300 border-[#867373] ${isScrolling ? 'backdrop-blur-lg border-[#867373] border-spacing-2  top-0 transition-all duration-1000' : ''}`}>

            <div className="flex-col-1 shrink-0">
                <a href="/" onClick={(e) => scrollToTop(e)}>/</a>
            </div>
            <div className="flex-col-1">
                <a href="" onClick={(e) => About(e)}>About</a>
            </div>
            <div className="flex-col-1">
                <a href="" onClick={scrollToBottom}>Work</a>
            </div>
        </div>
    );
}