import bangladesh from '../../assets/ban.png';
import pakistan from '../../assets/pak.png';
import srilanka from '../../assets/sl.png';
import mayanmar from '../../assets/mnmr.png';
import nepal from '../../assets/nep.png';
import cash from '../../assets/cash.png'

const Footer = () => {
  return (
    <div>
      <div>
        <div>
          <h3>Customer Care</h3>
          <ul>
            <li>Help Center</li>
            <li>How to Buy</li>
            <li>Returns & Refunds</li>
            <li>Contact Us</li>
            <li>Terms & Condition</li>
            <li>CCMS - Central Complain Management System</li>
          </ul>
        </div>
        <div>
          <h3>Earn with Daraz</h3>
          <ul>
            <li>Daraz University</li>
            <li>Sell on Daraz</li>
            <li>Code of Conduct</li>
            <li>Join the Daraz Affiliate Program</li>
          </ul>
        </div>
      </div>
      <div>
        <h3>Daraz</h3>
        <ul>
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
            <h3>Daraz International</h3>
            <div>
                <div>
                    <img src={bangladesh} alt="" />
                    <span>Bangladesh</span>
                </div>
                <div>
                    <img src={pakistan} alt="" />
                    <span>Bangladesh</span>
                </div>
                <div>
                    <img src={srilanka} alt="" />
                    <span>Bangladesh</span>
                </div>
                <div>
                    <img src={mayanmar} alt="" />
                    <span>Bangladesh</span>
                </div>
                <div>
                    <img src={nepal} alt="" />
                    <span>Bangladesh</span>
                </div>
            </div>
        </div>
        <div>
            <h3>Payment Methods</h3>
            <img src={cash} alt="" />
        </div>
        <div></div>
      </div>
      <div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Footer;
