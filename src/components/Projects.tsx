import React, { useState } from 'react';
import { X } from 'lucide-react';

interface Project {
    id: number;
    title: string;
    company: string;
    description: string;
    image: string;
    problemStatement: string;
    solution: string;
    impact: string[];
    technologies: string[];
}

const projects: Project[] = [
    {
        id: 1,
        title: "Employee Self-Service Portal",
        company: "JPMorgan Chase",
        description: "Enterprise-scale internal portal providing comprehensive HR management and self-service capabilities.",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
        problemStatement: "Fragmented systems led to delays in HR processes, reducing productivity and increasing employee dissatisfaction. Manual processes were time-consuming, error-prone, and hindered efficient employee data management.",
        solution: "Designed an intuitive self-service portal with Angular and .NET Core, streamlining HR workflows and enabling real-time access to employee data. Implemented user-friendly features, automated workflows, and real-time data synchronization to empower both employees and HR staff.",
        impact: [
            "Improved employee productivity by 35%",
            "Reduced HR request processing time by 60%",
            "Minimized downtime with 99.9% system availability",
            "Saved 2,000+ HR hours annually through effortless data synchronization",
            "Decreased data entry errors by 90%"
        ],
        technologies: ["Angular", ".NET Core", "SQL Server", "Azure", "Redis", "SignalR"]
    },
    {
        id: 2,
        title: "Financial Transaction Management",
        company: "Financial Sector",
        description: "Secure, real-time transaction processing system with multi-currency support and automated compliance reporting.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
        problemStatement: "Legacy systems struggled to process high transaction volumes efficiently, causing delays and exposing compliance vulnerabilities. The inefficient handling of large-scale financial data led to processing bottlenecks and increased the risk of non-compliance.",
        solution: "Adopted a microservices architecture with Azure Functions and Cosmos DB to handle real-time processing of large-scale financial data. Implemented automation for compliance checks, ensuring efficient and secure transaction management.",
        impact: [
            "Processed over 1M+ transactions daily",
            "Reduced processing costs by 40%",
            "Future-proofed the system for scalability and increased transaction volumes",
            "Achieved 99.99% uptime",
            "Enabled real-time compliance reporting"
        ],
        technologies: ["Angular", ".NET Core", "Azure Functions", "Cosmos DB", "Redis", "Kubernetes"]
    },
    {
        id: 3,
        title: "OTT Platform Modernization",
        company: "YuppTV",
        description: "Complete platform overhaul for improved performance and user experience.",
        image: "https://images.unsplash.com/photo-1461151304267-38535e780c79?q=80&w=1633&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        problemStatement: "Outdated systems caused high churn rates during peak hours due to slow load times and maintenance issues, driving up operational costs. The existing OTT platform suffered from performance issues, poor user experience, and challenges in scaling during peak viewing times.",
        solution: "Revamped the platform with a microservices architecture leveraging Angular for dynamic front-end performance and .NET Core for robust back-end scaling. Implemented modern technologies to enhance performance and reduce maintenance overhead.",
        impact: [
            "Achieved 50% faster load times",
            "Reduced infrastructure costs by 40%",
            "Improved user satisfaction and retention rates",
            "Enabled seamless scaling during peak loads",
            "Reduced overall operational costs by 30%"
        ],
        technologies: ["Angular", ".NET Core", "MongoDB", "Azure", "Redis", "Elasticsearch"]
    },
    {
        id: 4,
        title: "Healthcare Management System",
        company: "University Hospitals",
        description: "Led the optimization and enhancement of healthcare web applications, improving performance and user experience for healthcare providers and patients.",
        image: "https://plus.unsplash.com/premium_photo-1681842931981-12ecdd712705?q=80&w=1728&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        problemStatement: "Slow database performance and limited UI responsiveness hindered healthcare providers' efficiency and patients' satisfaction. The existing web application needed significant performance improvements and a better user experience.",
        solution: "Collaboratively optimized Angular and ASP.NET Core integrations for smoother data transactions, leveraging SQL Server for lightning-fast queries. Implemented front-end optimizations and back-end improvements to enhance overall system performance.",
        impact: [
            "Reduced latency by 20% while maintaining a responsive UI",
            "Enhanced database query efficiency",
            "Empowered healthcare providers with real-time decision-making tools",
            "Developed responsive, user-friendly interfaces for better user experience",
            "Actively participated in Agile ceremonies for efficient delivery"
        ],
        technologies: ["ASP.NET Core", "Angular", "C#", "Entity Framework Core", "SQL Server", "Agile"]
    }
];

export default function Projects() {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    return (
        <section id="projects" className="section-padding">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-title">Featured Projects</h2>
                    <p className="section-description">
                        A selection of enterprise projects that demonstrate my expertise in building scalable, high-performance applications.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-12">
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            className="card card-hover cursor-pointer group"
                            onClick={() => setSelectedProject(project)}
                        >
                            <div className="aspect-video overflow-hidden rounded-lg">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                                <p className="text-gray-400 text-sm mb-4">{project.company}</p>
                                <p className="text-gray-300 text-sm mb-6">{project.description}</p>
                                <div className="flex flex-wrap gap-2">
                                    {project.technologies.slice(0, 4).map((tech, i) => (
                                        <span
                                            key={i}
                                            className="text-xs bg-[#1a1a1a] text-[#4169E1] px-3 py-1 rounded-full"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                    {project.technologies.length > 4 && (
                                        <span className="text-xs text-gray-400">
                                            +{project.technologies.length - 4} more
                                        </span>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Project Modal */}
            {selectedProject && (
                <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
                    <div className="bg-[#1a1a1a] max-w-4xl w-full max-h-[90vh] overflow-y-auto rounded-xl">
                        <div className="sticky top-0 flex justify-end p-4 bg-[#1a1a1a] z-10">
                            <button
                                onClick={() => setSelectedProject(null)}
                                className="text-gray-400 hover:text-white transition-colors p-2"
                                aria-label="Close modal"
                            >
                                <X size={24} />
                            </button>
                        </div>

                        <div className="p-6 md:p-8">
                            <h2 className="text-2xl md:text-3xl font-bold mb-2">{selectedProject.title}</h2>
                            <p className="text-gray-400 mb-8">{selectedProject.company}</p>

                            <div className="aspect-video mb-8 overflow-hidden rounded-lg">
                                <img
                                    src={selectedProject.image}
                                    alt={selectedProject.title}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            <div className="space-y-8">
                                <div>
                                    <h3 className="text-xl font-semibold mb-4">Problem Statement</h3>
                                    <p className="text-gray-300">{selectedProject.problemStatement}</p>
                                </div>

                                <div>
                                    <h3 className="text-xl font-semibold mb-4">Solution</h3>
                                    <p className="text-gray-300">{selectedProject.solution}</p>
                                </div>

                                <div>
                                    <h3 className="text-xl font-semibold mb-4">Impact</h3>
                                    <ul className="space-y-3">
                                        {selectedProject.impact.map((item, index) => (
                                            <li key={index} className="text-gray-300 flex items-center gap-3">
                                                <span className="w-1.5 h-1.5 bg-[#4169E1] rounded-full flex-shrink-0" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div>
                                    <h3 className="text-xl font-semibold mb-4">Technologies Used</h3>
                                    <div className="flex flex-wrap gap-3">
                                        {selectedProject.technologies.map((tech, index) => (
                                            <span
                                                key={index}
                                                className="bg-[#2a2a2a] text-[#4169E1] px-4 py-2 rounded-lg text-sm"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}
