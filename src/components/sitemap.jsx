import React from 'react';
import Logo from './logo';

const Sitemap = () => {
  return (
    <section className="bg-white py-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Column 1: Quick Links */}
        <div className='text-left pl-5 md:pl-20 text-xl'>
          <h2 className="text-2xl font-semibold mb-4">Quick Links</h2>
          <ul className="space-y-2">
            <li>
              <a href="https://sanjeevanigroup.org" className="font-normal text-black hover:underline">Home</a>
            </li>
            <li>
              <a href="http://sanjeevanigroup.org/about/" className="font-normal text-black hover:underline">About Us</a>
            </li>
            <li>
              <a href="#" className="font-normal text-black hover:underline">Our Services</a>
            </li>
            <li>
              <a href="#" className="font-normal text-black hover:underline">Consultations</a>
            </li>
            <li>
              <a href="#" className="font-normal text-black hover:underline">Insights</a>
            </li>
            <li>
              <a href="http://sanjeevanigroup.org/contact/" className="font-normal text-black hover:underline">Contact Us</a>
            </li>
          </ul>
        </div>

        {/* Column 2: Logo and Social Links */}
        <div className="flex flex-col items-left md:items-center pl-5 md:pl-0">
          {/* <img
            width="325"
            height="91"
            src="https://sanjeevanigroup.org/wp-content/uploads/2021/05/sanjeevani-logo.png"
            alt="Sanjeevani Logo"
            className="mb-4"
            loading="lazy"
          /> */}
          <Logo/>
          <ul className="flex space-x-4">
            <li>
              <a href="https://www.facebook.com/sanjeevanitradingco/" className="text-blue-500">
                <i aria-hidden="true" className="fab fa-facebook">facebook</i>
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/sanjeevanitradingco/" className="text-pink-500">
                <i aria-hidden="true" className="fab fa-instagram">instagram</i>
              </a>
            </li>
            <li>
              <a href="#" className="text-blue-400">
                <i aria-hidden="true" className="fab fa-twitter">twitter</i>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/company/sanjeevani-group-estd-1979" className="text-blue-700">
                <i aria-hidden="true" className="fab fa-linkedin">linkedin</i>
              </a>
            </li>
          </ul>
        </div>

        {/* Column 3: Reach Us */}
        <div className='text-xl text-left pl-5 md:text-right md:pr-20'>
          <h2 className="text-2xl font-semibold mb-4">Reach Us</h2>
          <p>
            Sanjeevani Trading &amp; Ayurvedics<br />
            1st Floor, MBA Arcade<br />
            DHSS road, Kanhangad<br />
            Kasaragode District.<br />
            671 315<br />
            Kerala, India
          </p>
        </div>

      </div>
    </section>
  );
};

export default Sitemap;
