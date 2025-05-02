import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-[#1a1a1a]/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
            }`}>
            <div className="container">
                <nav className="flex items-center justify-between h-16 md:h-20">
                    <a href="#" className="text-xl md:text-2xl font-bold text-[#4169E1] hover:text-blue-400 transition-colors">
                        Santosh Reddy
                    </a>

                    <div className="hidden md:flex items-center gap-8">
                        <a href="#about" className="nav-link">About</a>
                        <a href="#skills" className="nav-link">Skills</a>
                        <a href="#experience" className="nav-link">Experience</a>
                        <a href="#projects" className="nav-link">Projects</a>
                        <a href="#design" className="nav-link">Architecture</a>
                        <a href="#education" className="nav-link">Education</a>
                        <a href="#contact" className="nav-link">Contact</a>
                    </div>

                    <div className="flex items-center gap-4">
                        <a
                            href="https://github.com/Santosh9688"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="social-link hover:text-blue-400"
                            aria-label="GitHub"
                        >
                            <Github size={20} />
                        </a>
                        <a
                            href="https://linkedin.com/in/santosh-reddy-k-fullstack-developer"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="social-link hover:text-blue-400"
                            aria-label="LinkedIn"
                        >
                            <Linkedin size={20} />
                        </a>
                        <a
                            href="mailto:santoshkanmanthareddy@gmail.com"
                            className="social-link hover:text-blue-400"
                            aria-label="Email"
                        >
                            <Mail size={20} />
                        </a>
                    </div>
                </nav>
            </div>

            {/* Mobile Menu */}
            <div className="md:hidden fixed bottom-0 left-0 right-0 bg-[#1a1a1a]/95 backdrop-blur-sm border-t border-gray-800">
                <nav className="container flex justify-around py-3">
                    <a href="#about" className="nav-link text-sm flex flex-col items-center">
                        <span className="text-xs">About</span>
                    </a>
                    <a href="#skills" className="nav-link text-sm flex flex-col items-center">
                        <span className="text-xs">Skills</span>
                    </a>
                    <a href="#experience" className="nav-link text-sm flex flex-col items-center">
                        <span className="text-xs">Experience</span>
                    </a>
                    <a href="#projects" className="nav-link text-sm flex flex-col items-center">
                        <span className="text-xs">Projects</span>
                    </a>
                    <a href="#education" className="nav-link text-sm flex flex-col items-center">
                        <span className="text-xs">Education</span>
                    </a>
                </nav>
            </div>
        </header>
    );
}
