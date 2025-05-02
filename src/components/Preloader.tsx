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
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#0f172a] via-[#1a1a1a] to-[#0f172a]"></div>
            <div className="absolute inset-0 bg-grid opacity-20"></div>
            <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[120px]"></div>
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-[120px]"></div>

            <div className="relative z-10 w-full max-w-2xl px-6">
                <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent mb-2">Loading Level</h2>
                    <p className="text-gray-400 text-lg">{loadingText}</p>
                </div>

                {/* Loading Bar Container */}
                <div className="relative">
                    <div className="bg-[#1a1a1a]/60 rounded-full h-4 backdrop-blur-sm shadow-lg border border-gray-800/50">
                        {/* Progress Bar */}
                        <div
                            className="progress-bar h-full rounded-full bg-gradient-to-r from-blue-600 to-blue-700 transition-all duration-300 relative overflow-hidden"
                            style={{ '--progress': `${progress}%` } as React.CSSProperties}
                        >
                            {/* Animated Shine Effect */}
                            <div className="absolute inset-0 w-full animate-shine">
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"></div>
                            </div>
                        </div>
                    </div>

                    {/* Progress Indicator */}
                    <div className="absolute -right-4 -top-4 bg-blue-900/30 text-blue-300 text-sm px-4 py-2 rounded-full border border-blue-800/50 backdrop-blur-sm">
                        {progress}%
                    </div>
                </div>

                {/* Interactive Buttons */}
                <div className="flex justify-center gap-4 mt-12">
                    <button
                        onClick={() => setProgress(p => Math.min(100, p + 10))}
                        className="px-6 py-3 bg-[#1a1a1a]/60 hover:bg-[#2a2a2a]/60 text-white rounded-lg backdrop-blur-sm transition-all duration-300 flex items-center gap-2 border border-gray-800/50"
                    >
                        <span>Increase</span>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                        </svg>
                    </button>
                    <button
                        onClick={() => setProgress(p => Math.max(0, p - 10))}
                        className="px-6 py-3 bg-[#1a1a1a]/60 hover:bg-[#2a2a2a]/60 text-white rounded-lg backdrop-blur-sm transition-all duration-300 flex items-center gap-2 border border-gray-800/50"
                    >
                        <span>Decrease</span>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                    </button>
                    <button
                        onClick={() => setProgress(100)}
                        className="px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-lg transition-all duration-300"
                    >
                        Complete
                    </button>
                    <button
                        onClick={() => setProgress(0)}
                        className="px-6 py-3 bg-[#1a1a1a]/60 text-red-400 rounded-lg backdrop-blur-sm transition-all duration-300 border border-red-900/50 hover:bg-red-900/20"
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
                            className="w-3 h-3 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full animate-bounce"
                            style={{ animationDelay: `${i * 0.1}s` }}
                        ></div>
                    ))}
                </div>
            </div>
        </div>
    );
}
