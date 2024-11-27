import React, { useState } from 'react';

const testimonials = [
    {
        quote: "Santosh's contribution to our platform modernization was exceptional. His expertise in Angular and .NET Core, coupled with his ability to mentor team members, significantly accelerated our development process.",
        author: "Emily Rodriguez",
        role: "Lead Developer at YuppTV"
    },
    {
        quote: "Working with Santosh on our healthcare management system was a great experience. His technical skills and problem-solving abilities helped us achieve significant performance improvements.",
        author: "David Chen",
        role: "Technical Lead at Healthcare Management"
    }
];

export default function Testimonials() {
    const [currentIndex, setCurrentIndex] = useState(0);

    return (
        <section className="py-16 md:py-20 bg-[#1a1a1a] text-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12 md:mb-16">
                    <h2 className="section-title">Client Testimonials</h2>
                    <p className="section-description">
                        Don't just take my word for it - here's what clients and colleagues have to say about working with me.
                    </p>
                </div>

                <div className="max-w-4xl mx-auto">
                    <div className="relative">
                        {/* Navigation Arrows */}
                        <button
                            onClick={() => setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))}
                            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 text-gray-400 hover:text-white transition-colors"
                            aria-label="Previous testimonial"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-8 w-8"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M15 19l-7-7 7-7"
                                />
                            </svg>
                        </button>

                        {/* Testimonial Card */}
                        <div className="bg-[#2a2a2a] p-8 md:p-10 rounded-xl border border-gray-800">
                            <div className="text-6xl text-gray-700 mb-6">"</div>
                            <blockquote className="text-lg md:text-xl text-gray-300 mb-8">
                                {testimonials[currentIndex].quote}
                            </blockquote>
                            <div className="flex items-center">
                                <div>
                                    <div className="font-semibold text-white">
                                        {testimonials[currentIndex].author}
                                    </div>
                                    <div className="text-sm text-gray-400">
                                        {testimonials[currentIndex].role}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <button
                            onClick={() => setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))}
                            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 text-gray-400 hover:text-white transition-colors"
                            aria-label="Next testimonial"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-8 w-8"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M9 5l7 7-7 7"
                                />
                            </svg>
                        </button>
                    </div>

                    {/* Navigation Dots */}
                    <div className="flex justify-center gap-2 mt-8">
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentIndex(index)}
                                className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentIndex
                                    ? 'bg-[#4169E1] w-6'
                                    : 'bg-gray-600 hover:bg-gray-500'
                                    }`}
                                aria-label={`Go to testimonial ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
