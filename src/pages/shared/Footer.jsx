import appGallery from "../../assets/appgallery.png";
import apple from "../../assets/apple.png";
import bangladesh from "../../assets/ban.png";
import bkash from "../../assets/bkash.png";
import cash from "../../assets/cash.png";
import google from "../../assets/google.png";
import master from "../../assets/master.png";
import mayanmar from "../../assets/mnmr.png";
import nagad from "../../assets/nagad.png";
import nepal from "../../assets/nep.png";
import pakistan from "../../assets/pak.png";
import qrCode from "../../assets/qr-code2.png";
import rocket from "../../assets/rocket.jpg";
import srilanka from "../../assets/sl.png";
import visa from "../../assets/visa.png";

const Footer = () => {
  return (
    <div className="bg-[#F5F5F5] py-4">
      <div className="max-w-screen-xl mx-auto grid grid-cols-4">
      <div>
        <div>
          <h3 className="text-xl text-[#F85606] font-medium mb-2">Customer Care</h3>
          <ul className="space-y-1">
            <li>Help Center</li>
            <li>How to Buy</li>
            <li>Returns & Refunds</li>
            <li>Contact Us</li>
            <li>Terms & Condition</li>
            <li>CCMS - Central Complain Management System</li>
          </ul>
        </div>
        <div className="mt-8">
          <h3 className="text-xl text-[#F85606] font-medium mb-2">Earn with Daraz</h3>
          <ul className="space-y-1">
            <li>Daraz University</li>
            <li>Sell on Daraz</li>
            <li>Code of Conduct</li>
            <li>Join the Daraz Affiliate Program</li>
          </ul>
        </div>
      </div>
      <div>
        <h3 className="text-xl text-[#F85606] font-medium mb-2">Daraz</h3>
        <ul className="space-y-1">
          <li>About Daraz</li>
          <li>Digital Payments</li>
          <li>Daraz Blog</li>
          <li>Daraz Cares</li>
          <li>Daraz Mart</li>
          <li>Privacy Policy</li>
          <li>Daraz App</li>
          <li>Daraz Exclusives</li>
          <li>Hungrynaki Food Delivery</li>
          <li>Daraz Donates</li>
          <li>Daraz BPL Live</li>
        </ul>
      </div>
      <div>
        <div>
          <h3 className="text-xl text-[#F85606] font-medium mb-2">Daraz International</h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center">
              <img src={bangladesh} alt="" className="w-8 mr-2"/>
              <span>Bangladesh</span>
            </div>
            <div className="flex items-center">
              <img src={pakistan} alt="" className="w-8 mr-2"/>
              <span>Bangladesh</span>
            </div>
            <div className="flex items-center">
              <img src={srilanka} alt="" className="w-8 mr-2"/>
              <span>Bangladesh</span>
            </div>
            <div className="flex items-center">
              <img src={mayanmar} alt="" className="w-8 mr-2"/>
              <span>Bangladesh</span>
            </div>
            <div className="flex items-center">
              <img src={nepal} alt="" className="w-8 mr-2"/>
              <span>Bangladesh</span>
            </div>
          </div>
        </div>
        <div className="mt-8">
          <h3 className="text-xl text-[#F85606] font-medium mb-2">Payment Methods</h3>
          <div className="flex flex-wrap space-x-2 space-y-2 items-center">
          <img src={cash} alt="" className="w-20 h-16 bg-slate-200 p-2 rounded"/>
          <img src={visa} alt="" className="w-20 h-16 bg-slate-200 p-2 rounded"/>
          <img src={master} alt="" className="w-20 h-16 bg-slate-200 p-2 rounded"/>
          <img src={bkash} alt="" className="w-20 h-16 bg-slate-200 p-2 rounded"/>
          <img src={nagad} alt="" className="w-20 h-16 bg-slate-200 p-2 rounded"/>
          <img src={rocket} alt=""className="w-20 h-16 bg-slate-200 p-2 rounded" />
          </div>
        </div>
      </div>
      <div>
        <div>
          <h3 className="text-xl text-[#F85606] font-medium mb-2">Exclusive Deals and Offers!</h3>
          <div className="flex items-center">
            <img src={qrCode} alt="" className="w-32"/>
            <div className="space-y-2 ml-4">
              <img src={apple} alt="" className="w-24"/>
              <img src={google} alt="" className="w-24"/>
              <img src={appGallery} alt="" className="w-24"/>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
    </div>
  );
};

export default Footer;
