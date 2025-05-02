
import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
    return (
        <section className="relative min-h-screen w-full flex items-start justify-center px-3 sm:px-4">
            <div className="w-full max-w-[1200px] mx-auto mt-[3.5rem] xs:mt-[4rem] sm:mt-[4.5rem] md:mt-20">
                <div className="flex flex-col tablet:flex-row items-center tablet:items-start justify-between tablet:gap-8">
                    <div className="w-full tablet:w-[50%] flex flex-col items-center tablet:items-start">
                        <div className="w-full text-center tablet:text-left mb-2 xs:mb-3">
                            <div className="inline-block">
                                <h1 className="font-bold text-3xl xs:text-4xl sm:text-5xl">
                                    <div className="whitespace-nowrap">Sai Swaroop Kambampati</div>
                                    <div className="text-[#4169E1] whitespace-nowrap mt-1 xs:mt-2">Full Stack Java Developer</div>
                                </h1>
                                <p className="text-gray-600 text-base sm:text-lg mt-4 max-w-md">
                                    Specializing in Java, Spring Boot, AWS, Kafka, and scalable cloud-native microservices.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
