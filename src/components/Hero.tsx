import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
    return (
        <section className="relative min-h-screen w-full flex items-start justify-center px-3 sm:px-4">
            <div className="w-full max-w-[1200px] mx-auto mt-[3.5rem] xs:mt-[4rem] sm:mt-[4.5rem] md:mt-20">
                <div className="flex flex-col tablet:flex-row items-center tablet:items-start justify-between tablet:gap-8">
                    <div className="w-full tablet:w-[50%] flex flex-col items-center tablet:items-start">
                        <div className="w-full text-center tablet:text-left mb-2 xs:mb-3">
                            <div className="inline-block">
                                <h1 className="hero-title font-bold">
                                    <div className="whitespace-nowrap">Senior Full-Stack</div>
                                    <div className="text-[#4169E1] whitespace-nowrap mt-0.5 xs:mt-1">.NET Developer</div>
                                </h1>
                            </div>
                        </div>

                        <div className="mb-3 xs:mb-4">
                            <p className="hero-description text-gray-300 text-center tablet:text-left px-1 xs:px-0">
                                With 7+ years of experience crafting scalable applications using Angular and .NET Core, I deliver solutions that transform business processes. My expertise lies in building enterprise-grade software while fostering cross-team collaboration to ensure impactful outcomes.
                            </p>
                        </div>

                        <div className="flex flex-wrap justify-center tablet:justify-start gap-2 xs:gap-3">
                            <a
                                href="#contact"
                                className="text-[0.8125rem] xs:text-[0.875rem] tablet:text-base px-4 xs:px-5 py-2 xs:py-2.5 rounded-lg bg-[#4169E1] text-white hover:bg-[#5E85FF] transition-colors flex items-center gap-1.5 xs:gap-2"
                            >
                                Let's Connect
                                <ArrowRight size={16} className="xs:w-[18px] xs:h-[18px]" />
                            </a>
                            <a
                                href="#projects"
                                className="text-[0.8125rem] xs:text-[0.875rem] tablet:text-base px-4 xs:px-5 py-2 xs:py-2.5 rounded-lg border border-gray-600 text-white hover:bg-gray-800 transition-colors"
                            >
                                View Projects
                            </a>
                        </div>
                    </div>

                    <div className="w-full tablet:w-[45%] max-w-[260px] xs:max-w-[300px] sm:max-w-[340px] tablet:max-w-none mt-6 xs:mt-7 sm:mt-8 tablet:mt-0">
                        <div className="relative w-full">
                            <img
                                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1744&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                alt="Professional workspace with code editor"
                                className="w-full h-auto rounded-lg xs:rounded-xl shadow-2xl"
                                style={{
                                    aspectRatio: '4/3',
                                    objectFit: 'cover',
                                    filter: 'brightness(0.9) contrast(1.1)'
                                }}
                            />

                            <div className="absolute bottom-2 left-2 xs:bottom-3 xs:left-3 bg-[#1a1a1a]/90 backdrop-blur-sm p-2 xs:p-2.5 rounded-lg">
                                <div className="flex flex-col">
                                    <p className="font-semibold text-[0.8125rem] xs:text-[0.875rem] tablet:text-lg">7+ Years Experience</p>
                                    <p className="text-gray-400 text-xs tablet:text-base">Enterprise Solutions</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
