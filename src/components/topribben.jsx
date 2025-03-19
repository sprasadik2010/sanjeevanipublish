import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faInstagram, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';

export default function Topribbon() {
    return (
      <div className="flex bg-[#2D8053] h-10 w-full hidden md:flex p-5">
        <div className="flex-1 flex items-center">
          <ul className="flex items-center space-x-4">
            <li className="flex items-center text-white text-xl">
              <FontAwesomeIcon icon={faClock} />
            </li>
            <li className="flex items-center text-white text-sm">
              Mon- Sat: 8am-6pm
            </li>
            <li className="flex items-center mx-2">
              <div className="border-l-2 border-white h-full"></div>
            </li>
            <li className="flex items-center text-white text-xl">
              <FontAwesomeIcon icon={faEnvelope} />
            </li>
            <li className="flex items-center text-white text-sm">
              info@sanjeevanigroup.org
            </li>
          </ul>
        </div>
        <div className="flex-1 flex justify-end items-center">
          <ul className="flex items-center space-x-4 text-white text-2xl">
            <li className='hover:text-yellow-500 hover:animate-bounce'><FontAwesomeIcon icon={faFacebookF} /></li>
            <li className='hover:text-yellow-500 hover:animate-bounce'><FontAwesomeIcon icon={faInstagram} /></li>
            <li className='hover:text-yellow-500 hover:animate-bounce'><FontAwesomeIcon icon={faTwitter} /></li>
            <li className='hover:text-yellow-500 hover:animate-bounce'><FontAwesomeIcon icon={faLinkedin} /></li>
          </ul>
        </div>
      </div>
    );
}
