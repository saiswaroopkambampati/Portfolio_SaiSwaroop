import React, { useState, useEffect, useRef } from 'react';
import { Code2, Database, Cloud, Shield, Users, Workflow } from 'lucide-react';

const skills = [
    {
        category: "Programming & Frameworks",
        icon: <Code2 />,
        description: "Core development technologies",
        items: [
            { name: "C#", level: 95 },
            { name: "JavaScript/TypeScript", level: 90 },
            { name: "ASP.NET Core", level: 95 },
            { name: "Angular (10-17)", level: 90 },
            { name: "React.js", level: 85 },
            { name: "Vue.js", level: 80 },
            { name: "React Native", level: 75 },
            { name: "Blazor WebAssembly", level: 80 }
        ]
    },
    {
        category: "Cloud & DevOps",
        icon: <Cloud />,
        description: "Cloud infrastructure and deployment",
        items: [
            { name: "Azure Functions", level: 90 },
            { name: "Azure App Services", level: 85 },
            { name: "Azure DevOps", level: 90 },
            { name: "YAML Pipelines", level: 85 },
            { name: "Terraform", level: 80 },
            { name: "Azure SignalR Service", level: 85 }
        ]
    },
    {
        category: "Databases",
        icon: <Database />,
        description: "Database technologies and optimization",
        items: [
            { name: "SQL Server", level: 90 },
            { name: "Cosmos DB", level: 85 },
            { name: "MongoDB", level: 80 },
            { name: "T-SQL", level: 85 }
        ]
    },
    {
        category: "Testing & Quality",
        icon: <Shield />,
        description: "Testing and code quality",
        items: [
            { name: "Test-Driven Development", level: 85 },
            { name: "Jasmine", level: 80 },
            { name: "Karma", level: 80 },
            { name: "Unit Testing", level: 90 }
        ]
    },
    {
        category: "Methodologies",
        icon: <Workflow />,
        description: "Development practices and methodologies",
        items: [
            { name: "Agile/Scrum", level: 90 },
            { name: "CI/CD", level: 85 },
            { name: "Software Architecture", level: 85 },
            { name: "Design Patterns", level: 90 }
        ]
    },
    {
        category: "Team Leadership",
        icon: <Users />,
        description: "Team collaboration and leadership",
        items: [
            { name: "Technical Leadership", level: 85 },
            { name: "Code Reviews", level: 90 },
            { name: "Mentoring", level: 85 },
            { name: "Project Planning", level: 80 }
        ]
    }
];

export default function Skills() {
    const [expandedCategory, setExpandedCategory] = useState<string | null>(null);
    const skillsRef = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        if (skillsRef.current) {
            observer.observe(skillsRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section id="skills" className="section-padding" ref={skillsRef}>
            <div className="container">
                <div className="text-center">
                    <h2 className="section-title">Technical Expertise</h2>
                    <p className="section-description">
                        With over 7 years of experience in software development, I've developed expertise
                        across a wide range of technologies and methodologies, focusing on delivering
                        scalable enterprise solutions.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {skills.map((skill) => (
                        <div
                            key={skill.category}
                            className={`card transition-all duration-300 ${expandedCategory === skill.category
                                    ? 'sm:col-span-2 lg:col-span-2 shadow-2xl'
                                    : expandedCategory !== null
                                        ? 'scale-95 opacity-70'
                                        : ''
                                } card-hover`}
                        >
                            <div
                                className="flex items-center gap-4 cursor-pointer"
                                onClick={() => setExpandedCategory(
                                    expandedCategory === skill.category ? null : skill.category
                                )}
                            >
                                <div className={`p-3 rounded-lg text-white transition-all duration-300 ${expandedCategory === skill.category
                                        ? 'bg-gradient-to-r from-[#4169E1] to-[#5E85FF] scale-110'
                                        : 'bg-gradient-to-r from-[#4169E1]/70 to-[#5E85FF]/70'
                                    }`}>
                                    {skill.icon}
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-base md:text-xl font-semibold text-white">{skill.category}</h3>
                                    <p className="text-xs md:text-sm text-gray-400">{skill.description}</p>
                                </div>
                            </div>

                            <div className={`mt-6 space-y-4 transition-all duration-300 ${expandedCategory === skill.category ? 'opacity-100 max-h-[1000px]' : 'opacity-0 max-h-0 overflow-hidden'
                                }`}>
                                {skill.items.map((item) => (
                                    <div key={item.name} className="space-y-2">
                                        <div className="flex justify-between items-center">
                                            <span className="text-sm md:text-base font-medium text-gray-300">{item.name}</span>
                                            <span className="text-xs md:text-sm text-gray-400">{item.level}%</span>
                                        </div>
                                        <div className="w-full bg-[#3a3a3a] rounded-full h-2 overflow-hidden">
                                            <div
                                                className={`skill-bar h-2 rounded-full bg-gradient-to-r from-[#4169E1] to-[#5E85FF] ${isVisible && expandedCategory === skill.category ? 'animate' : ''
                                                    }`}
                                                style={{ width: `${item.level}%` }}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
