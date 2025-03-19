import React, { useState, useEffect } from 'react';
import ktnImage from '../assets/images/knowthenatureimages/holy-basil.jpg';

export default function KnowTheNature() {
  const [bgPositionY, setBgPositionY] = useState(0);

  // Set up scroll event listener using useEffect
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      // Adjust background position based on scroll
      setBgPositionY(-scrollY * 0.3);
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <div
        className="relative w-full h-screen mt-6"
        style={{
          backgroundImage: `url(${ktnImage})`,
          backgroundPositionY: `${bgPositionY}px`, // Moves background up and down
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
          <h1 className="text-4xl font-bold">Know The Nature</h1>
          <p className="text-lg">For a healthy living</p>
        </div>
      </div>
    </>
  );
}
