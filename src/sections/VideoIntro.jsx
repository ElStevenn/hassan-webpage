import React, { useRef, useState } from 'react';
import Section from '../components/ui/Section';
import { Play } from 'lucide-react';
import { motion } from 'framer-motion';

const VideoIntro = () => {
    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const togglePlay = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
            } else {
                videoRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    return (
        <Section id="video" background="gray">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Meet Your Teacher</h2>
                <p className="text-gray-600 mt-4 text-lg">Watch this short video to hear my accent and teaching style.</p>
            </div>

            <div className="max-w-4xl mx-auto">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-black aspect-video group" onClick={togglePlay}>
                    <video
                        ref={videoRef}
                        src="/videos/video-english-teacher.mp4"
                        className="w-full h-full object-cover"
                        controls={isPlaying}
                        onPlay={() => setIsPlaying(true)}
                        onPause={() => setIsPlaying(false)}
                        poster="/images/hero.png" // Fallback poster
                    />

                    {!isPlaying && (
                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center cursor-pointer group-hover:bg-black/30 transition-colors">
                            <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white border-2 border-white/50 shadow-lg"
                            >
                                <Play size={32} fill="currentColor" className="ml-1" />
                            </motion.button>
                        </div>
                    )}
                </div>
            </div>
        </Section>
    );
};

export default VideoIntro;
