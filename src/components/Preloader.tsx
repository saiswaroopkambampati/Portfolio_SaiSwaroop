import React, { useEffect, useState } from 'react';

interface PreloaderProps {
    onLoadingComplete?: () => void;
}

export default function Preloader({ onLoadingComplete }: PreloaderProps) {
    const [progress, setProgress] = useState(0);
    const [showContent, setShowContent] = useState(true);
    const [loadingText, setLoadingText] = useState('Initializing...');

    useEffect(() => {
        const loadingSteps = [
            'Initializing development environment...',
            'Loading dependencies...',
            'Building components...',
            'Optimizing performance...',
            'Starting up...'
        ];

        const timer = setInterval(() => {
            setProgress((prev) => {
                const newProgress = prev + 1;
                // Update loading text based on progress
                const textIndex = Math.floor((newProgress / 100) * loadingSteps.length);
                if (textIndex < loadingSteps.length) {
                    setLoadingText(loadingSteps[textIndex]);
                }

                if (newProgress >= 100) {
                    clearInterval(timer);
                    setTimeout(() => {
                        setShowContent(false);
                        if (onLoadingComplete) onLoadingComplete();
                    }, 500);
                    return 100;
                }
                return newProgress;
            });
        }, 30);

        return () => clearInterval(timer);
    }, [onLoadingComplete]);

    if (!showContent) return null;

    return (
        <div className="fixed inset-0 bg-[#1a1a1a] z-50 flex flex-col items-center justify-center">
            <div className="w-full max-w-2xl px-6">
                <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold text-white mb-2">Loading Level</h2>
                    <p className="text-gray-400 text-lg">{loadingText}</p>
                </div>

                {/* Loading Bar Container */}
                <div className="relative">
                    <div className="bg-white/10 rounded-full h-4 backdrop-blur-sm shadow-lg">
                        {/* Progress Bar */}
                        <div
                            className="h-full rounded-full bg-gradient-to-r from-[#4169E1] to-[#5E85FF] transition-all duration-300 relative overflow-hidden"
                            style={{ width: `${progress}%` }}
                        >
                            {/* Animated Shine Effect */}
                            <div className="absolute inset-0 w-full animate-shine">
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"></div>
                            </div>
                        </div>
                    </div>

                    {/* Progress Indicator */}
                    <div className="absolute -right-4 -top-4 bg-[#4169E1] text-white text-sm px-2 py-1 rounded transform -translate-y-full">
                        {progress}%
                    </div>
                </div>

                {/* Interactive Buttons */}
                <div className="flex justify-center gap-4 mt-12">
                    <button
                        onClick={() => setProgress(p => Math.min(100, p + 10))}
                        className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-lg backdrop-blur-sm transition-all duration-300 flex items-center gap-2"
                    >
                        <span>Increase</span>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                        </svg>
                    </button>
                    <button
                        onClick={() => setProgress(p => Math.max(0, p - 10))}
                        className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-lg backdrop-blur-sm transition-all duration-300 flex items-center gap-2"
                    >
                        <span>Decrease</span>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                    </button>
                    <button
                        onClick={() => setProgress(100)}
                        className="px-6 py-3 bg-[#4169E1] hover:bg-[#5E85FF] text-white rounded-lg transition-all duration-300"
                    >
                        Complete
                    </button>
                    <button
                        onClick={() => setProgress(0)}
                        className="px-6 py-3 bg-red-500/20 hover:bg-red-500/30 text-red-500 rounded-lg backdrop-blur-sm transition-all duration-300"
                    >
                        Reset
                    </button>
                </div>
            </div>

            {/* Loading Animation */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
                <div className="flex gap-1">
                    {[...Array(3)].map((_, i) => (
                        <div
                            key={i}
                            className="w-3 h-3 bg-[#4169E1] rounded-full animate-bounce"
                            style={{ animationDelay: `${i * 0.1}s` }}
                        ></div>
                    ))}
                </div>
            </div>
        </div>
    );
}
