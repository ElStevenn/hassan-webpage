import React from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './sections/Hero';
import TrustBar from './sections/TrustBar';
import SocialAuthority from './sections/SocialAuthority';
import About from './sections/About';
import WhyTrustMe from './sections/WhyTrustMe';
import ContentCreator from './sections/ContentCreator';
import TeachingApproach from './sections/TeachingApproach';
import TargetAudience from './sections/TargetAudience';
import FreeTrial from './sections/FreeTrial';
import Pricing from './sections/Pricing';
import VideoIntro from './sections/VideoIntro';
import Testimonials from './sections/Testimonials';
import FAQ from './sections/FAQ';
import FinalCTA from './sections/FinalCTA';

function App() {
    return (
        <div className="font-sans antialiased text-gray-900 bg-white">
            <Navbar />
            <main>
                <Hero />
                <TrustBar />
                <SocialAuthority />
                <About />
                <WhyTrustMe />
                <TeachingApproach />
                <ContentCreator />
                <TargetAudience />
                <VideoIntro />
                <FreeTrial />
                <Pricing />
                <Testimonials />
                <FAQ />
                <FinalCTA />
            </main>
            <Footer />
        </div>
    );
}

export default App;
