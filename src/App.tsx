import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import DesignAndArchitecture from './components/DesignAndArchitecture';
import Contact from './components/Contact';
import Preloader from './components/Preloader';

function App() {
    const [isLoading, setIsLoading] = useState(true);

    return (
        <>
            {isLoading && <Preloader onLoadingComplete={() => setIsLoading(false)} />}
            <div className={`min-h-screen transition-opacity duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'} noise-bg bg-grid`}>
                <div className="relative">
                    {/* Background gradient orbs */}
                    <div className="fixed top-0 left-0 w-[500px] h-[500px] bg-blue-500/30 rounded-full blur-[120px] -z-10"></div>
                    <div className="fixed top-[20%] right-0 w-[400px] h-[400px] bg-purple-500/20 rounded-full blur-[120px] -z-10"></div>
                    <div className="fixed bottom-0 left-[20%] w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[120px] -z-10"></div>

                    {/* Content */}
                    <Header />
                    <main className="relative">
                        <Hero />
                        <About />
                        <Skills />
                        <Experience />
                        <Projects />
                        <DesignAndArchitecture />
                        <Education />
                        <Contact />
                    </main>
                </div>
            </div>
        </>
    );
}

export default App;
