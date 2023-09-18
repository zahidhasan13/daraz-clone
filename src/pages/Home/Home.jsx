import Carousel from "../../components/Carousel/slider";
import ad from "../../assets/ad.png";
import dress from "../../assets/icons/dress.png";
import beauty from "../../assets/icons/lipstick.png";
import watch from "../../assets/icons/wristwatch.png";
import men from "../../assets/icons/shirt.png";
import baby from "../../assets/icons/baby-boy.png";
import electronic from "../../assets/icons/responsive.png";
import tv from "../../assets/icons/fridge.png";
import plug from "../../assets/icons/power-plug.png";
import groceries from "../../assets/icons/food.png";
import sofa from "../../assets/icons/seater-sofa.png";
import sports from "../../assets/icons/sports.png";
import automotive from "../../assets/icons/automotive.png";
import mart from "../../assets/mart.png";
import low from "../../assets/low.png";
import free from "../../assets/free.png";
import deals from "../../assets/deals.png";
import glamour from "../../assets/beauty.png";
import lifestyle from "../../assets/lifestyle.png";
import electronics from "../../assets/electronic.png";
import budget from "../../assets/budget.png";
import best from "../../assets/best.png";
import mens from "../../assets/men.png";

const Home = () => {
  return (
    <div className="bg-[#F5F5F5] py-4">
      <div className="max-w-screen-xl mx-auto">
        <div className="grid grid-cols-5 gap-4">
          <div className="bg-white p-4 rounded-md">
            <ul className="space-y-1 text-gray-500">
              <li className="flex">
                <span className="bg-[#f5f5f5] w-6 h-6 rounded-full flex justify-center items-center mr-1">
                  <img src={dress} alt="" className="w-4" />
                </span>
                <a href="#" className="text-sm">
                  Women's & Girl's Fashions
                </a>
              </li>
              <li className="flex">
                <span className="bg-[#f5f5f5] w-6 h-6 rounded-full flex justify-center items-center mr-1">
                  <img src={beauty} alt="" className="w-4" />
                </span>
                <a href="#" className="text-sm">
                  Health & Beauty
                </a>
              </li>
              <li className="flex">
                <span className="bg-[#f5f5f5] w-6 h-6 rounded-full flex justify-center items-center mr-1">
                  <img src={watch} alt="" className="w-4" />
                </span>
                <a href="#" className="text-sm">
                  Watches, Bags, Jwellery
                </a>
              </li>
              <li className="flex">
                <span className="bg-[#f5f5f5] w-6 h-6 rounded-full flex justify-center items-center mr-1">
                  <img src={men} alt="" className="w-4" />
                </span>
                <a href="#" className="text-sm">
                  Men's & Boy's Fashion
                </a>
              </li>
              <li className="flex">
                <span className="bg-[#f5f5f5] w-6 h-6 rounded-full flex justify-center items-center mr-1">
                  <img src={baby} alt="" className="w-4" />
                </span>
                <a href="#" className="text-sm">
                  Mother & Baby
                </a>
              </li>
              <li className="flex">
                <span className="bg-[#f5f5f5] w-6 h-6 rounded-full flex justify-center items-center mr-1">
                  <img src={electronic} alt="" className="w-4" />
                </span>
                <a href="#" className="text-sm">
                  Electronics Device
                </a>
              </li>
              <li className="flex">
                <span className="bg-[#f5f5f5] w-6 h-6 rounded-full flex justify-center items-center mr-1">
                  <img src={tv} alt="" className="w-4" />
                </span>
                <a href="#" className="text-sm">
                  TV & Home Appliences
                </a>
              </li>
              <li className="flex">
                <span className="bg-[#f5f5f5] w-6 h-6 rounded-full flex justify-center items-center mr-1">
                  <img src={plug} alt="" className="w-4" />
                </span>
                <a href="#" className="text-sm">
                  Electronic Accessories
                </a>
              </li>
              <li className="flex">
                <span className="bg-[#f5f5f5] w-6 h-6 rounded-full flex justify-center items-center mr-1">
                  <img src={groceries} alt="" className="w-4" />
                </span>
                <a href="#" className="text-sm">
                  Groceries
                </a>
              </li>
              <li className="flex">
                <span className="bg-[#f5f5f5] w-6 h-6 rounded-full flex justify-center items-center mr-1">
                  <img src={sofa} alt="" className="w-4" />
                </span>
                <a href="#" className="text-sm">
                  Home & Lifestyle
                </a>
              </li>
              <li className="flex">
                <span className="bg-[#f5f5f5] w-6 h-6 rounded-full flex justify-center items-center mr-1">
                  <img src={sports} alt="" className="w-4" />
                </span>
                <a href="#" className="text-sm">
                  Sports & Outdoors
                </a>
              </li>
              <li className="flex">
                <span className="bg-[#f5f5f5] w-6 h-6 rounded-full flex justify-center items-center mr-1">
                  <img src={automotive} alt="" className="w-4" />
                </span>
                <a href="#" className="text-sm">
                  Automotive & Motorbike
                </a>
              </li>
            </ul>
          </div>
          <div className="col-span-4">
            <Carousel></Carousel>
          </div>
        </div>
        <div className="flex justify-center py-4">
          <img src={ad} alt="" className="w-2/4" />
        </div>
        <div className="grid grid-cols-10 gap-8 bg-white p-4 rounded-xl text-sm text-center">
          <div>
            <img src={mart} alt="" className="w-24"/>
            <p>Mart</p>
          </div>
          <div>
            <img src={low} alt="" className="w-24"/>
            <p>Everyday Low Price</p>
          </div>
          <div>
            <img src={free} alt="" className="w-24"/>
            <p>Free Delivery</p>
          </div>
          <div>
            <img src={deals} alt="" className="w-24"/>
            <p>Hot Deals</p>
          </div>
          <div>
            <img src={glamour} alt="" className="w-24"/>
            <p>Beauty & Glamour</p>
          </div>
          <div>
            <img src={lifestyle} alt="" className="w-24"/>
            <p>Lifestyle in Budget</p>
          </div>
          <div>
            <img src={electronics} alt="" className="w-24"/>
            <p>Electronics Accesseries</p>
          </div>
          <div>
            <img src={budget} alt="" className="w-24"/>
            <p>Budget Deals</p>
          </div>
          <div>
            <img src={best} alt="" className="w-24"/>
            <p>Best Peice</p>
          </div>
          <div>
            <img src={mens} alt="" className="w-24"/>
            <p>Men's Fashion</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
