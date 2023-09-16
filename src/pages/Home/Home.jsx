import { Link } from "react-router-dom";
import Carousel from "../../components/Carousel/slider";

const Home = () => {
  return (
    <div className="max-w-screen-xl mx-auto">
      <div className="grid grid-cols-5">
        <div>
          <ul>
            <li>
              <Link>Women's & Girl's Fashions</Link>
            </li>
            <li>
              <Link></Link>
            </li>
            <li>
              <Link></Link>
            </li>
            <li>
              <Link></Link>
            </li>
            <li>
              <Link></Link>
            </li>
            <li>
              <Link></Link>
            </li>
            <li>
              <Link></Link>
            </li>
            <li>
              <Link></Link>
            </li>
            <li>
              <Link></Link>
            </li>
            <li>
              <Link></Link>
            </li>
          </ul>
        </div>
        <div className="col-span-4">
          <Carousel></Carousel>
        </div>
      </div>
    </div>
  );
};

export default Home;
