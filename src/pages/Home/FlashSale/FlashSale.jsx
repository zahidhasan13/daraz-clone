import { useEffect, useState } from "react";

const FlashSale = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  }, []);

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

  const hours = Math.floor(
    (timeRemaining % (100000 * 60 * 60 * 24)) / (10000 * 60 * 60)
  );
  const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000); // Update every 1 second

  return (
    <div className="my-20">
      <h3 className="text-3xl text-gray-500">Flash Sale</h3>
      <div className="bg-white">
        <div className="flex justify-between items-center px-4 py-4">
          <div className="flex space-x-5">
            <p className="text-[#F85606]">on Sale Now</p>
            <div className="flex space-x-2">
              <p>
                Ending in</p>
                <span>
                  {timeRemaining <= 0 ? (
                    <p>Countdown expired!</p>
                  ) : (
                    <p className="space-x-2">
                      <span className="bg-[#F85606] p-2 text-white font-medium">0{hours}</span>
                      <span className="bg-[#F85606] p-2 text-white font-medium">{minutes}</span>
                      <span className="bg-[#F85606] p-2 text-white font-medium">{seconds}</span>
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
        <div className="pt-4 flex justify-between gap-4">
          {products.slice(0, 6).map((product) => (
            <div key={product.id}>
              <img src={product.thumbnail} alt="" className="h-32" />
              <h3 className="text-xl px-2">{product.title}</h3>
              <div className="px-2">
                <p className="text-xl text-[#F85606]">${product.price}</p>
                <p>
                  <s>${product.price + product.discountPercentage}</s>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FlashSale;
