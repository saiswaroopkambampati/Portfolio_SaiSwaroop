
import React from 'react';

interface Experience {
    title: string;
    company: string;
    location: string;
    period: string;
    achievements: string[];
    responsibilities: string[];
}

const Experience = () => {
    const experiences: Experience[] = [
        {
            title: "Software Engineer",
            company: "Mphasis Corporation",
            location: "Plano, TX, USA",
            period: "Mar 2024 – Present",
            achievements: [
                "Built scalable microservices using Java, Spring Boot, and MongoDB.",
                "Deployed apps on AWS via Kubernetes and Docker.",
                "Optimized Kafka-based real-time ingestion pipelines.",
                "Automated CI/CD workflows using Jenkins and Git."
            ],
            responsibilities: []
        },
        {
            title: "Associate Software Engineer",
            company: "American Express",
            location: "Fort Lauderdale, FL, USA",
            period: "Sep 2022 – Feb 2024",
            achievements: [
                "Developed secure APIs and financial microservices using Spring Boot.",
                "Implemented Kafka event sourcing for real-time data processing.",
                "Improved Cosmos DB and MongoDB performance.",
                "Streamlined deployment via Jenkins pipelines and GitOps."
            ],
            responsibilities: []
        }
    ];

    return (
        <section id="experience" className="section-padding1">
            <div className="container">
                <h2 className="section-title text-center">Experience</h2>
                <div className="space-y-8">
                    {experiences.map((exp, index) => (
                        <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-xl font-semibold">{exp.title}</h3>
                            <p className="text-sm text-gray-500">{exp.company} – {exp.location}</p>
                            <p className="text-sm text-gray-400 mb-2">{exp.period}</p>
                            <ul className="list-disc list-inside text-gray-700 text-sm">
                                {exp.achievements.map((ach, i) => (
                                    <li key={i}>{ach}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
