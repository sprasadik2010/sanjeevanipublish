import React from 'react';
import aboutImg from '../assets/images/aboutimages/ayurveda-aromatherapy-massage-pouring-aromatic-oil-in-essential-oil-diffuser.jpg';
import { useInView } from 'react-intersection-observer';

const About = () => {

  const { ref: refTitle, inView: inViewTitle } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const { ref: refDetails, inView: inViewDetails } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const { ref: refButton, inView: inViewButton } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <section className="w-full">
      <div className="flex flex-wrap pt-8">
        {/* First Column - Spacer */}
        <div className="w-full md:w-1/2"
            style={{ 
              backgroundImage: `url(${aboutImg})`,
              backgroundSize: 'cover'
            }}
        >
            <div className="h-screen"></div>
        </div>

        {/* Second Column - Content */}
        <div className="w-full md:w-1/2">
          <div className="p-4 animate-fadeInUp">
            {/* Heading */}
            <h2 
              ref={refTitle}
              className={`text-3xl font-bold mb-4 ${inViewTitle ? ' animate-fadeInUpTitle' : ''}`}
            >
              About <br /> Sanjeevani Group
            </h2>

            {/* Text Editor */}
            <p
              ref={refDetails} className={`mb-4 ${inViewDetails ? ' animate-fadeInUpDetails' : ''}`}
            >
              Sanjeevani Vaidhyashala was a renowned traditional medicine outlet
              started by Vaidyar Sri. M. Vishnu Patteri at Koramkund in the
              Kasargod district of Kerala in 1979, and it sold authentic
              ayurvedic products. The Vaidyar himself prepared many of the
              products by referring to the ancient ayurveda texts and using the
              readily available herbs and other local ingredients.
            </p>

            {/* Button */}
            <button 
              ref={refButton}
              className={`text-white bg-blue-500 hover:bg-blue-600 py-2 px-4 rounded ${inViewButton ? ' animate-fadeInUpButton' : ''}`}
            >
              Read More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
