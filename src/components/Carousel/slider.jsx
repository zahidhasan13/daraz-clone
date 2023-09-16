import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import slider1 from '../../assets/1.jpg'
import slider2 from '../../assets/2.jpg'
import slider3 from '../../assets/3.jpg'
import slider4 from '../../assets/4.jpg'
import slider5 from '../../assets/5.jpg'
import slider6 from '../../assets/6.jpg'
import slider8 from '../../assets/8.jpg'
import slider9 from '../../assets/9.jpg'
import './slider.css'
const Carousel = () => {
    const settings = {
        dots: true,
        arrows: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autopdlay: true,
        speed: 1000,
        autoplaySpeed: 2000,
      };
    return (
            <Slider {...settings}>
          <div>
            <img src={slider1} alt="" />
          </div>
          <div>
          <img src={slider2} alt="" />
          </div>
          <div>
          <img src={slider3} alt="" />
          </div>
          <div>
          <img src={slider4} alt="" />
          </div>
          <div>
          <img src={slider5} alt="" />
          </div>
          <div>
          <img src={slider6} alt="" />
          </div>
          <div>
          <img src={slider8} alt="" />
          </div>
          <div>
          <img src={slider9} alt="" />
          </div>
        </Slider>
    );
};

export default Carousel;