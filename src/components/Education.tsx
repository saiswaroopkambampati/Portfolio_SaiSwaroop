import React from 'react';

interface Education {
    degree: string;
    school: string;
    location: string;
    year: string;
    keyAreas: string[];
    projects: string[];
}

const Education = () => {
    const education: Education[] = [
        {
            degree: "Master's in Computer Sciences",
            school: "Cleveland State University",
            location: "Cleveland, OH",
            year: "2024",
            keyAreas: [
                "Advanced Database Systems & Data Mining",
                "Cloud Computing & Distributed Systems",
                "Advanced Algorithms & Data Structures",
                "Software Engineering Principles",
                "Machine Learning & AI Applications",
                "Web Application Development"
            ],
            projects: [
                "Developed a distributed system using microservices architecture",
                "Implemented machine learning algorithms for data analysis",
                "Created scalable web applications using modern frameworks"
            ]
        },
        {
            degree: "Bachelor of Technology in Computer Science",
            school: "CVR College of Engineering",
            location: "JNTUH Affiliated, India",
            year: "2017",
            keyAreas: [
                "Data Structures & Algorithms",
                "Object-Oriented Programming",
                "Database Management Systems",
                "Computer Networks",
                "Operating Systems",
                "Software Engineering Fundamentals"
            ],
            projects: [
                "Built a comprehensive database management system",
                "Developed network protocols implementation",
                "Created object-oriented software applications"
            ]
        }
    ];

    return (
        <section id="education" className="relative section-padding overflow-hidden">
            <div className="container relative z-10">
                <h2 className="section-title text-center mb-16">Education</h2>
                <div className="grid gap-8 max-w-4xl mx-auto">
                    {education.map((edu, index) => (
                        <div key={index} className="transform hover:scale-[1.02] transition-all duration-300">
                            <div className="relative group">
                                <div className="absolute inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 opacity-75 blur group-hover:opacity-100 transition duration-300"></div>
                                <div className="relative bg-[#1a1a1a] p-8 rounded-lg">
                                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
                                        <div>
                                            <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                                                {edu.degree}
                                            </h3>
                                            <div className="flex flex-col md:flex-row md:items-center text-gray-300 space-y-1 md:space-y-0 md:space-x-2">
                                                <span className="font-semibold text-lg text-blue-400">{edu.school}</span>
                                                <span className="hidden md:block text-gray-500">•</span>
                                                <span className="text-gray-400">{edu.location}</span>
                                            </div>
                                        </div>
                                        <div className="mt-4 md:mt-0">
                                            <span className="bg-blue-900/30 text-blue-300 px-4 py-2 rounded-full text-sm font-medium border border-blue-800/50 shadow-lg">
                                                Graduated {edu.year}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="space-y-6">
                                        <div>
                                            <h4 className="text-xl font-semibold mb-4 text-blue-300 flex items-center">
                                                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                                    <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3z" />
                                                </svg>
                                                Key Areas of Study
                                            </h4>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                                {edu.keyAreas.map((area, i) => (
                                                    <div key={i} className="flex items-center p-3 rounded-lg bg-[#1a1a1a]/60 border border-gray-800/50 hover:border-blue-500/50 transition-all duration-300 group">
                                                        <span className="text-blue-400 mr-2 transform group-hover:scale-110 transition-transform duration-300">→</span>
                                                        <span className="text-gray-300 group-hover:text-blue-300 transition-colors duration-300">{area}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                        <div>
                                            <h4 className="text-xl font-semibold mb-4 text-blue-300 flex items-center">
                                                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                                                </svg>
                                                Academic Projects
                                            </h4>
                                            <ul className="space-y-3">
                                                {edu.projects.map((project, i) => (
                                                    <li key={i} className="flex items-start group">
                                                        <span className="text-blue-400 mr-2 transform group-hover:scale-110 transition-transform duration-300">•</span>
                                                        <span className="text-gray-300 group-hover:text-blue-300 transition-colors duration-300">{project}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="mt-12 text-center">
                    <a
                        href="/Santosh kanmanthareddy.docx"
                        download
                        className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg hover:shadow-blue-500/20 group"
                    >
                        <svg
                            className="w-5 h-5 mr-2 transform group-hover:scale-110 transition-transform duration-300"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                            />
                        </svg>
                        Download Resume
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Education;
