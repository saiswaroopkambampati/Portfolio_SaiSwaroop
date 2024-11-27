import React from 'react';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';

export default function Hero() {
    return (
        <section className="min-h-screen flex items-center section-padding -mt-20">
            <div className="container">
                <div className="flex flex-col md:flex-row items-center justify-between gap-12 lg:gap-16">
                    <div className="flex-1 space-y-8">
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                            Senior Full-Stack
                            <span className="block text-[#4169E1]">.NET Developer</span>
                        </h1>

                        <p className="text-lg md:text-xl text-gray-300 max-w-2xl leading-relaxed text-justify">
                            With 7+ years of experience crafting scalable applications using Angular and .NET Core, I deliver solutions that transform business processes. My expertise lies in building enterprise-grade software while fostering cross-team collaboration to ensure impactful outcomes.
                        </p>

                        <div className="flex flex-wrap gap-4">
                            <a
                                href="#contact"
                                className="button-primary"
                            >
                                Let's Connect
                                <ArrowRight size={20} />
                            </a>
                            <a
                                href="#projects"
                                className="button-secondary"
                            >
                                View Projects
                            </a>
                        </div>

                        {/* <div className="flex gap-6 pt-4">
                            <a
                                href="https://github.com/Santosh9688"
                                className="social-link"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Github size={24} />
                            </a>
                            <a
                                href="https://linkedin.com/in/santosh-reddy-k-fullstack-developer"
                                className="social-link"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Linkedin size={24} />
                            </a>
                            <a
                                href="mailto:santoshkanmanthareddy@gmail.com"
                                className="social-link"
                            >
                                <Mail size={24} />
                            </a>
                        </div> */}
                    </div>

                    <div className="flex-1 relative max-w-[600px] w-full">
                        <img
                            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1744&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt="Professional workspace with code editor"
                            className="rounded-3xl shadow-2xl w-full object-cover"
                            style={{
                                aspectRatio: '4/3',
                                objectFit: 'cover',
                                filter: 'brightness(0.9) contrast(1.1)'
                            }}
                        />

                        <div className="absolute bottom-6 md:bottom-8 left-6 md:left-8 bg-[#1a1a1a]/90 backdrop-blur-sm p-4 md:p-6 rounded-lg text-white">
                            <div className="flex flex-col">
                                <p className="font-semibold text-lg md:text-xl mb-1">7+ Years Experience</p>
                                <p className="text-gray-400 text-sm md:text-base">Enterprise Solutions</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
