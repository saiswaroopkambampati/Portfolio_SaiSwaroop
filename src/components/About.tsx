import React from 'react';
import { Code2, Database, Cloud, Users, Brain, Coffee } from 'lucide-react';

export default function About() {
    return (
        <section id="about" className="section-padding1">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-title">About Me</h2>
                    <p className="section-description">
                        Results-driven Senior Software Engineer with over 7 years of experience in designing,
                        developing, and maintaining software applications.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">
                    {/* Left Column */}
                    <div className="space-y-6 md:space-y-8">
                        <h3 className="text-xl md:text-2xl font-bold text-white">Professional Journey</h3>
                        <p className="text-sm md:text-base text-gray-300 leading-relaxed text-justify">
                            With expertise in <strong>ASP.NET</strong>, <strong>C#</strong>, <strong>JavaScript</strong>, and <strong>Azure Cloud technologies</strong>, I've consistently
                            delivered scalable solutions and led technical initiatives that drive business success.
                            My experience spans from developing enterprise-level applications to optimizing cloud
                            infrastructure and mentoring development teams.
                        </p>
                        <p className="text-sm md:text-base text-gray-300 leading-relaxed text-justify">
                            I specialize in full-stack development with <strong>.NET Core</strong> and modern <strong>JavaScript frameworks</strong>,
                            focusing on building high-performance, scalable applications. My approach combines
                            technical excellence with strong collaboration skills, ensuring project success in
                            agile environments.
                        </p>

                        {/* Impact Metrics */}
                        <div className="pt-6 md:pt-8">
                            <h4 className="text-lg md:text-xl font-semibold mb-6 text-white">Impact Metrics</h4>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="card">
                                    <h4 className="text-lg md:text-xl font-semibold mb-2 text-[#3b82f6]">30%</h4>
                                    <p className="text-xs md:text-sm text-gray-400">Performance Improvement</p>
                                </div>
                                <div className="card">
                                    <h4 className="text-lg md:text-xl font-semibold mb-2 text-[#10b981]">25%</h4>
                                    <p className="text-xs md:text-sm text-gray-400">User Engagement Increase</p>
                                </div>
                                <div className="card">
                                    <h4 className="text-lg md:text-xl font-semibold mb-2 text-[#f59e0b]">20%</h4>
                                    <p className="text-xs md:text-sm text-gray-400">Cloud Cost Reduction</p>
                                </div>
                                <div className="card">
                                    <h4 className="text-lg md:text-xl font-semibold mb-2 text-[#ec4899]">40%</h4>
                                    <p className="text-xs md:text-sm text-gray-400">Faster Deployments</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="grid grid-cols-2 gap-4 md:gap-6">
                        <div className="space-y-4 md:space-y-6">
                            <div className="card card-hover">
                                <Code2 className="w-6 h-6 md:w-8 md:h-8 text-[#4169E1] mb-4" />
                                <h4 className="font-semibold mb-2 text-white">Full Stack Development</h4>
                                <p className="text-xs md:text-sm text-gray-400">Building robust applications using modern frameworks and libraries.</p>
                                <p className="text-xs md:text-sm text-gray-400 mt-2">ASP.NET Core, Angular, React</p>
                            </div>
                            <div className="card card-hover">
                                <Database className="w-6 h-6 md:w-8 md:h-8 text-green-400 mb-4" />
                                <h4 className="font-semibold mb-2 text-white">Database Expertise</h4>
                                <p className="text-xs md:text-sm text-gray-400">SQL Server, Cosmos DB, MongoDB</p>
                            </div>
                            <div className="card card-hover">
                                <Brain className="w-6 h-6 md:w-8 md:h-8 text-purple-400 mb-4" />
                                <h4 className="font-semibold mb-2 text-white">Problem Solving</h4>
                                <p className="text-xs md:text-sm text-gray-400">Complex technical challenges</p>
                            </div>
                        </div>
                        <div className="space-y-4 md:space-y-6 mt-8 md:mt-12">
                            <div className="card card-hover">
                                <Cloud className="w-6 h-6 md:w-8 md:h-8 text-orange-400 mb-4" />
                                <h4 className="font-semibold mb-2 text-white">Cloud Solutions</h4>
                                <p className="text-xs md:text-sm text-gray-400">Leveraging Azure services for scalable deployments.</p>
                                <p className="text-xs md:text-sm text-gray-400 mt-2">Azure Services & DevOps</p>
                            </div>
                            <div className="card card-hover">
                                <Users className="w-6 h-6 md:w-8 md:h-8 text-red-400 mb-4" />
                                <h4 className="font-semibold mb-2 text-white">Team Leadership</h4>
                                <p className="text-xs md:text-sm text-gray-400">Technical guidance & mentoring</p>
                            </div>
                            <div className="card card-hover">
                                <Coffee className="w-6 h-6 md:w-8 md:h-8 text-yellow-400 mb-4" />
                                <h4 className="font-semibold mb-2 text-white">Continuous Learning</h4>
                                <p className="text-xs md:text-sm text-gray-400">Latest tech & best practices</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
