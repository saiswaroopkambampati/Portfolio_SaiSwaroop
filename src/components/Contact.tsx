import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Contact() {
    return (
        <section id="contact" className="section-padding">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-title">Connect with Me</h2>
                    <p className="section-description">
                        Looking for a passionate and skilled Full-Stack Developer to contribute to your next big project? I'm actively seeking exciting opportunities to apply my expertise in building scalable, maintainable solutions. Let's connect to discuss how I can bring value to your team and projects!
                    </p>
                </div>

                <div className="max-w-4xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                        <a
                            href="https://github.com/Santosh9688"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="card card-hover flex flex-col items-center gap-6 p-8 group hover:bg-[#2a2a2a] hover:-translate-y-1 transition-all duration-300"
                        >
                            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-[#2a2a2a] group-hover:bg-[#1a1a1a] transition-colors">
                                <Github size={32} className="text-[#4169E1] group-hover:scale-110 transition-transform duration-300" />
                            </div>
                            <div className="text-center">
                                <h3 className="text-lg font-semibold mb-2 group-hover:text-[#4169E1] transition-colors">GitHub</h3>
                                <p className="text-sm text-gray-400">View my code repositories</p>
                            </div>
                        </a>

                        <a
                            href="https://linkedin.com/in/santosh-reddy-k-fullstack-developer"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="card card-hover flex flex-col items-center gap-6 p-8 group hover:bg-[#2a2a2a] hover:-translate-y-1 transition-all duration-300"
                        >
                            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-[#2a2a2a] group-hover:bg-[#1a1a1a] transition-colors">
                                <Linkedin size={32} className="text-[#4169E1] group-hover:scale-110 transition-transform duration-300" />
                            </div>
                            <div className="text-center">
                                <h3 className="text-lg font-semibold mb-2 group-hover:text-[#4169E1] transition-colors">LinkedIn</h3>
                                <p className="text-sm text-gray-400">Connect with me professionally</p>
                            </div>
                        </a>

                        <a
                            href="mailto:santoshkanmanthareddy@gmail.com"
                            className="card card-hover flex flex-col items-center gap-6 p-8 group hover:bg-[#2a2a2a] hover:-translate-y-1 transition-all duration-300"
                        >
                            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-[#2a2a2a] group-hover:bg-[#1a1a1a] transition-colors">
                                <Mail size={32} className="text-[#4169E1] group-hover:scale-110 transition-transform duration-300" />
                            </div>
                            <div className="text-center">
                                <h3 className="text-lg font-semibold mb-2 group-hover:text-[#4169E1] transition-colors">Email</h3>
                                <p className="text-sm text-gray-400">Send me a message</p>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
