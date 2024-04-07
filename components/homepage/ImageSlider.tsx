import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const images = ['/public/frame1.png', '/public/frame2.png', '/public/frame3.png', '/public/frame4.png'];

const ImageSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 2000); // Change slide every 2 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="w-full h-64 relative overflow-hidden">
            {images.map((image, index) => (
                <motion.div
                    className={`absolute top-0 left-0 w-full h-full transition-transform duration-500 ${index === currentIndex ? 'opacity-100' : 'opacity-0'
                        }`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    key={index}
                >
                    <Image
                        src={image}
                        alt={`Image ${index + 1}`}
                        width={5}
                        height={6}
                    />
                </motion.div>
            ))}
        </div>
    );
};

export default ImageSlider;