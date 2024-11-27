import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

interface Diagram {
    title: string;
    description: string;
    image: string;
    pdfPath: string;
}

interface DesignAndArchitectureProps {
    intervalDuration?: number;
}

const diagrams: Diagram[] = [
    {
        title: 'Healthcare Management System Architecture',
        description: 'System architecture diagram illustrating the microservices-based design with Angular frontend and .NET Core backend.',
        image: 'https://i.postimg.cc/fyhSnr5K/download.png',
        pdfPath: '/pdf/Healthcare-Management.pdf',
    },
    {
        title: 'YuppTV OTT Platform Modernization Process Flow',
        description: 'Authentication and authorization flow diagram showing the secure user login process and token-based validation system.',
        image: 'https://i.postimg.cc/rpjhfz2V/aiplugin-94ea7b51-649f-41ca-bd26-80a8b97c4c1e.png',
        pdfPath: '/src/pdf/YuppTv.pdf',
    }
];

export default function DesignAndArchitecture({
    intervalDuration = 5000,
}: DesignAndArchitectureProps): JSX.Element {
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState<boolean>(true);
    const [isOpen, setIsOpen] = useState<boolean>(false);

    useEffect(() => {
        if (!isAutoPlaying) return;

        const interval = setInterval(() => {
            setCurrentIndex((current) => (current + 1) % diagrams.length);
        }, intervalDuration);

        return () => clearInterval(interval);
    }, [isAutoPlaying, intervalDuration]);

    const navigate = (direction: 'prev' | 'next') => {
        setIsAutoPlaying(false);
        setCurrentIndex((current) => {
            if (direction === 'prev') {
                return current === 0 ? diagrams.length - 1 : current - 1;
            }
            return (current + 1) % diagrams.length;
        });
    };

    const openPDF = (pdfPath: string) => {
        window.open(pdfPath, '_blank');
    };

    return (
        <section className="section-padding">
            <div className="container">
                <div className="text-center mb-12">
                    <h2 className="section-title">Design & Architecture</h2>
                    <p className="section-description">
                        Explore the architectural designs and process flows of key projects,
                        showcasing my approach to building scalable enterprise solutions.
                    </p>
                </div>

                <div className="max-w-5xl mx-auto relative"> {/* Added relative positioning */}
                    <div className="card card-hover">
                        <div className="aspect-[16/9] relative overflow-hidden rounded-lg mb-6 bg-[#2A2A2A] p-4">
                            <img
                                src={diagrams[currentIndex].image}
                                alt={diagrams[currentIndex].title}
                                className="w-full h-full object-contain cursor-pointer hover:scale-105 transition-transform duration-300"
                                onClick={() => setIsOpen(true)}
                            />
                        </div>

                        <div className="text-center">
                            <h3 className="text-xl md:text-2xl font-semibold mb-3 text-white">
                                {diagrams[currentIndex].title}
                            </h3>
                            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                                {diagrams[currentIndex].description}
                            </p>
                            <button
                                onClick={() => openPDF(diagrams[currentIndex].pdfPath)}
                                className="inline-flex items-center gap-2 text-[#4169E1] hover:text-[#5E85FF] transition-colors font-medium"
                            >
                                View Full Diagram (PDF)
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-4 w-4"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                    />
                                </svg>
                            </button>
                        </div>

                        {/* Chevron navigation */}
                        <button
                            onClick={() => navigate('prev')}
                            className="absolute left-4 top-1/2 -translate-y-1/2 p-2 text-gray-400 hover:text-white transition-colors hover:bg-[#1a1a1a] rounded-full"
                            aria-label="Previous slide"
                        >
                            <ChevronLeft size={24} />
                        </button>

                        <button
                            onClick={() => navigate('next')}
                            className="absolute right-4 top-1/2 -translate-y-1/2 p-2 text-gray-400 hover:text-white transition-colors hover:bg-[#1a1a1a] rounded-full"
                            aria-label="Next slide"
                        >
                            <ChevronRight size={24} />
                        </button>
                    </div>

                    {/* Pagination dots */}
                    <div className="flex justify-center gap-2 mt-6">
                        {diagrams.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => {
                                    setCurrentIndex(index);
                                    setIsAutoPlaying(false);
                                }}
                                className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentIndex
                                    ? 'bg-[#4169E1] w-6'
                                    : 'bg-gray-600 hover:bg-gray-500'
                                    }`}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>

            <Lightbox
                open={isOpen}
                close={() => setIsOpen(false)}
                slides={[{ src: diagrams[currentIndex].image }]}
            />
        </section>
    );
}
