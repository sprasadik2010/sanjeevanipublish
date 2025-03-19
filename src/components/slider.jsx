import React, { useEffect, useState } from 'react';
import sliderimg1 from '../assets/images/sliderimages/ayurvedic-chyawanprash-or-chyavanprash-768x513.jpg';
import sliderimg2 from '../assets/images/sliderimages/homeopathic-medicine--768x512.jpg';

const Slider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const items = [sliderimg1, sliderimg2];

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index) => {
    setActiveIndex(index);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(intervalId); // Clean up the interval on component unmount
  }, []);

  return (
    <div id="default-carousel" className="relative w-100 overflow-hidden" data-carousel="slide">
      {/* Carousel wrapper */}
      <div className="relative h-screen rounded-lg">
        {items.map((item, index) => (
          <div
            key={index}
            className=
            {`absolute inset-0 transform transition-transform duration-1000 ease-in scale-100 ${
              index === activeIndex ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-100'
            }`}
            data-carousel-item
          >
            {/* <img style={{ filter: 'brightness(0.5)' }} src={item} className={`absolute block h-100 w-full ${ index === activeIndex ? 'animate-zoomIn' : ''}`} alt={`Slide ${index + 1}`} /> */}
            <div
              style={{
                backgroundImage: `url(${item})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                filter: 'brightness(0.5)',
                height:'599px'
              }}
              className={`absolute block w-full ${index === activeIndex ? 'animate-zoomIn' : ''}`}
              alt={`Slide ${index + 1}`}
            />
            <div className={`absolute inset-0 flex flex-col items-center justify-center text-white ${index === activeIndex ? 'animate-textUp' : ''}`}>
              <div className='md:text-4xl text-2xl font-bold text-center max-w-2/3 mx-auto font-poppins mb-[30px] underline pl-10 pr-10'>
                WE DELIVER THE PUREST FORM OF AYURVEDA
              </div>
              <div className='text-base font-normal font-poppins  text-center mb-[30px] underline max-w-2/3 mx-auto pl-10 pr-10'>
                The best facilities with the best in class doctors and professionals
              </div>
              <button className='bg-transparent border-2 border-white'>
                READ MORE
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Slider indicators */}
      <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse transition-transform duration-1000 ease-in-out">
        {items.map((_, index) => (
          <button
            key={index}
            type="button"
            className={`w-3 h-3 rounded-full ${index === activeIndex ? 'bg-blue-500' : 'bg-gray-400'}`}
            aria-current={index === activeIndex ? 'true' : 'false'}
            aria-label={`Slide ${index + 1}`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>

      {/* Slider controls */}
      <button
        type="button"
        className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group hover:border-none focus:outline-none bg-transparent"
        onClick={prevSlide}
        data-carousel-prev
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50">
          <svg
            className="w-4 h-4 text-white rtl:rotate-180"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 1 1 5l4 4"
            />
          </svg>
          <span className="sr-only">Previous</span>
        </span>
      </button>
      <button
        type="button"
        className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group hover:border-none focus:outline-none bg-transparent"
        onClick={nextSlide}
        data-carousel-next
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50">
          <svg
            className="w-4 h-4 text-white rtl:rotate-180"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 9 4-4-4-4"
            />
          </svg>
          <span className="sr-only">Next</span>
        </span>
      </button>
    </div>
  );
};

export default Slider;
