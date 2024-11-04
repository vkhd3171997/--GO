import SocialMediaFooter from "./SocialMediaFooter";
import { HiChevronDown } from "react-icons/hi2";
import kiran from '../assets/kiran.png'


const Footer = () => {
  return (
    <>

      <SocialMediaFooter />
      
      <footer className="max-w-screen-2xl mx-auto border-b-8 border-secondaryBrown px-5 max-[400px]:px-3">
        <div className="flex justify-center gap-24 text-center mt-12 max-[800px]:flex-col max-[800px]:gap-10">
          <div className="flex flex-col gap-1">
            <h3 className="text-2xl font-bold max-sm:text-xl">Company Info</h3>
            <p className="text-lg max-sm:text-base">About Us</p>
            <p className="text-lg max-sm:text-base">Contact Us</p>
          </div>

          <div className="flex flex-col gap-1">
            <h3 className="text-2xl font-bold max-sm:text-xl">Services</h3>
            <p className="text-lg max-sm:text-base">Home Shifting Services</p>
            <p className="text-lg max-sm:text-base">Car Transport</p>
            <p className="text-lg max-sm:text-base">Local Shifting</p>
            <p className="text-lg max-sm:text-base">Office Relocation</p>
          </div>

          <div className="flex flex-col gap-1">
            <h3 className="text-2xl font-bold max-sm:text-xl">For Businesses</h3>
            <p className="text-lg max-sm:text-base">List Your Business</p>
            <p className="text-lg max-sm:text-base">Buy Leads</p>
            <p className="text-lg max-sm:text-base">Advertise with TPM</p>
          </div>
        </div>
        <div className="flex flex-col gap-8 my-20">
          <h1 className="text-6xl font-light text-center max-sm:text-5xl">Founders</h1>
     
          <img src={kiran} alt="Description of image"  className="image-class"/>
         <h2 className="text-size">Vijay Kumar and Kiran</h2>
          <p className="flex justify-center items-center text-2xl gap-2 max-sm:text-xl">Worldwide / English <HiChevronDown /></p>
          <h2 className="text-6xl font-light text-center max-sm:text-5xl">ಸಾ-GO          </h2>
          <p className="text-base text-center max-sm:text-sm">All rights reserved ©2024</p>
          <ul className="flex justify-center items-center gap-7 text-base max-sm:text-sm max-[350px]:flex-col max-[350px]:gap-5">
            <li>Cookie Policy</li>
            <li>Privacy Policy</li>
            <li>Legal Notes</li>
          </ul>

        </div>
      </footer>
    </>
  );
};
export default Footer;
