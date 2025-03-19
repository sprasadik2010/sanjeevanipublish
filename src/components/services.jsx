import ServiceItem from "./serviceitem";
import { AiFillWechat } from 'react-icons/ai';
import { TbMassage } from 'react-icons/tb';
import { BiLeaf } from 'react-icons/bi';
import { MdProductionQuantityLimits } from 'react-icons/md';

import serviceImg1 from '../assets/images/serviceimages/s1.png';
import serviceImg2 from '../assets/images/serviceimages/s2.png';
import serviceImg3 from '../assets/images/serviceimages/s3.png';
import serviceImg4 from '../assets/images/serviceimages/s4.png';


export default function Services() {
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-1">
        <ServiceItem img={serviceImg1} text="Online Doctors" theme={{color:"white", backgroundColor:"#4FFFB0"}} fromLeft={true} />
        <ServiceItem img={serviceImg2} icon={TbMassage} text="Panchakarma" theme={{color:"white", backgroundColor:"#ACE1AF"}} fromLeft={true} />
        <ServiceItem img={serviceImg3} icon={BiLeaf} text="Ayurveda" theme={{color:"white", backgroundColor:"#4FFFB0"}} fromLeft={false} />
        <ServiceItem img={serviceImg4} icon={MdProductionQuantityLimits} text="Herbal Products" theme={{color:"white", backgroundColor:"#ACE1AF"}} fromLeft={false} />
      </div>
    </div>
  );
}
