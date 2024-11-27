import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import DesignAndArchitecture from './components/DesignAndArchitecture';
import Contact from './components/Contact';
import Preloader from './components/Preloader';

function App() {
    const [isLoading, setIsLoading] = useState(true);

    return (
        <>
            {isLoading && <Preloader onLoadingComplete={() => setIsLoading(false)} />}
            <div className={`min-h-screen bg-[#1a1a1a] transition-opacity duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
                <Header />
                <main>
                    <Hero />
                    <About />
                    <Skills />
                    <Projects />
                    <DesignAndArchitecture />
                    <Contact />
                </main>
            </div>
        </>
    );
}

export default App;
