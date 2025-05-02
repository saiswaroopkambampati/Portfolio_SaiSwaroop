
import React from 'react';
import { Code2, Database, Cloud, Shield, Users, Workflow } from 'lucide-react';

const skills = [
    {
        category: "Programming & Frameworks",
        icon: <Code2 />,
        description: "Core development technologies",
        items: [
            { name: "Java", level: 95 },
            { name: "Spring Boot", level: 90 },
            { name: "React.js", level: 85 },
            { name: "Node.js", level: 80 },
            { name: "HTML/CSS/JavaScript", level: 85 }
        ]
    },
    {
        category: "Cloud & DevOps",
        icon: <Cloud />,
        description: "Cloud infrastructure and deployment",
        items: [
            { name: "AWS", level: 90 },
            { name: "Kubernetes", level: 85 },
            { name: "Docker", level: 85 },
            { name: "Terraform", level: 80 },
            { name: "Jenkins", level: 85 }
        ]
    },
    {
        category: "Databases",
        icon: <Database />,
        description: "SQL & NoSQL databases",
        items: [
            { name: "MongoDB", level: 90 },
            { name: "Oracle", level: 85 },
            { name: "MySQL", level: 80 },
            { name: "CosmosDB", level: 75 }
        ]
    },
    {
        category: "Tools & Workflow",
        icon: <Workflow />,
        description: "Development tools and methodologies",
        items: [
            { name: "Git", level: 95 },
            { name: "Postman", level: 90 },
            { name: "Selenium", level: 85 },
            { name: "Agile/Scrum", level: 90 }
        ]
    }
];

export default skills;
