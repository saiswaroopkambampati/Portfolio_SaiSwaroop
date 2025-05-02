
import React from 'react';
import { Code2, Database, Cloud, Users, Brain, Coffee } from 'lucide-react';

export default function About() {
    return (
        <section id="about" className="section-padding1">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-title">About Me</h2>
                    <p className="section-description">
                        Full Stack Java Developer with 6+ years of experience in building secure, scalable, and cloud-native applications using Java, Spring Boot, AWS, Kafka, and Kubernetes.
                        Passionate about designing microservices, integrating APIs, and automating CI/CD pipelines.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">
                    <div className="space-y-6 md:space-y-8">
                        <h3 className="text-xl md:text-2xl font-bold text-white">Professional Journey</h3>
                        <p className="text-sm md:text-base text-gray-300">
                            I have worked with Mphasis and American Express in developing cloud-native applications, implementing secure RESTful services, and automating deployment workflows using modern DevOps tools like Jenkins, Terraform, and Kubernetes.
                        </p>
                    </div>

                    <div className="space-y-6 md:space-y-8">
                        <h3 className="text-xl md:text-2xl font-bold text-white">Core Technologies</h3>
                        <ul className="list-disc list-inside text-sm md:text-base text-gray-300">
                            <li>Java, Spring Boot, REST APIs</li>
                            <li>AWS, Docker, Kubernetes, Terraform</li>
                            <li>Kafka, MongoDB, Oracle, CosmosDB</li>
                            <li>CI/CD, Git, Jenkins, Agile</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
