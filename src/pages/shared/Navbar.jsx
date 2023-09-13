import s_logo from '../../assets/s-logo.png';
import logo from '../../assets/logo.png';
import search from '../../assets/serach.png';
import { Link } from 'react-router-dom';
import lng from '../../assets/lng.png';
import { FaShoppingCart, FaUser } from 'react-icons/fa'

const Navbar = () => {
  return (
    <div className='bg-[#F85606] pb-4'>
      <div className='max-w-screen-xl mx-auto space-y-4'>
      <div className='flex justify-between items-center'>
        <div className='text-white space-x-8'>
          <a href="#">Become a Seller</a>
          <a href="#">Daraz Donates</a>
          <a href="#">Help & Support</a>
        </div>
        <div className='flex bg-[rgba(0,0,0,0.3)] p-1 rounded-b'>
            <img src={s_logo} alt="" className='w-6'/>
            <span className='text-white ml-2 font-semibold'>Save More on App</span>
        </div>
      </div>
      <div className='flex justify-between items-center'>
        <div>
            <img src={logo} alt="" className='w-36'/>
        </div>
        <div className='grow bg-white flex p-1 rounded-xl mx-10'>
            <input type="text" placeholder='Search in Daraz' className='w-full focus:outline-none pl-2'/>
            <span className='bg-orange-200 px-4 py-1 rounded'><img src={search} alt="" className='w-6'/></span>
        </div>
        <div className='flex items-center space-x-4 text-white'>
            <div className='flex items-center space-x-2'>
                <FaUser></FaUser>
                <Link to="/login" className='font-semibold'>Login</Link>
            </div>
            <span>|</span>
            <Link to="/signUp" className='font-semibold'>Sign Up</Link>
            <div className='flex items-center space-x-2'>
                <img src={lng} alt="" className='w-8'/>
                <span className='font-semibold'>EN</span>
            </div>
            <div className='text-3xl'>
                <Link to='/'><FaShoppingCart></FaShoppingCart></Link>
            </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Navbar;
