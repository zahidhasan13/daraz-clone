import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const FlashSale = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  function addLeadingZero(number) {
    return number < 10 ? `0${number}` : number.toString();
  }

  const targetDate = new Date("December 31, 2023 23:59:59").getTime();

  const [timeRemaining, setTimeRemaining] = useState(
    targetDate - new Date().getTime()
  );

  useEffect(() => {
    const countdownInterval = setInterval(() => {
      const currentTime = new Date().getTime();
      const timeDiff = targetDate - currentTime;

      if (timeDiff <= 0) {
        clearInterval(countdownInterval);
      } else {
        setTimeRemaining(timeDiff);
      }
    }, 1000);

    return () => {
      clearInterval(countdownInterval);
    };
  }, [targetDate]);

  const hours = addLeadingZero(
    Math.floor((timeRemaining % (100000 * 60 * 60 * 24)) / (10000 * 60 * 60))
  );
  const minutes = addLeadingZero(
    Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60))
  );
  const seconds = addLeadingZero(
    Math.floor((timeRemaining % (1000 * 60)) / 1000)
  ); // Update every 1 second

  return (
    <div className="my-20">
      <h3 className="text-3xl text-gray-500">Flash Sale</h3>
      <div className="bg-white">
        <div className="flex justify-between items-center px-4 py-4">
          <div className="flex space-x-5">
            <p className="text-[#F85606]">on Sale Now</p>
            <div className="flex space-x-2">
              <p>Ending in</p>
              <span>
                {timeRemaining <= 0 ? (
                  <p>Countdown expired!</p>
                ) : (
                  <p className="space-x-2">
                    <span className="bg-[#F85606] p-3 text-white font-medium rounded">
                      {hours}
                    </span>
                    <span className="bg-[#F85606] p-3 text-white font-medium rounded">
                      {minutes}
                    </span>
                    <span className="bg-[#F85606] p-3 text-white font-medium rounded">
                      {seconds}
                    </span>
                  </p>
                )}
              </span>
            </div>
          </div>
          <button className="text-[#F85606] border-2 border-[#F85606] py-2.5 px-4 uppercase">
            shop more
          </button>
        </div>
        <hr />
        <div className="pt-4 grid grid-cols-6 gap-4">
          {products.slice(14, 20).map((product) => (
            <Link to={`/productDetails/${product.id}`} key={product.id} className="hover:shadow-md">
              <img src={product.image} alt="" className="h-32 mx-auto" />
              <h3 className="text-xl px-2">{product.title}</h3>
              <div className="px-2">
                <p className="text-xl text-[#F85606]">${product.price}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FlashSale;
