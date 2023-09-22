import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const JustForYou = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
      fetch("https://fakestoreapi.com/products")
        .then((res) => res.json())
        .then((data) => setProducts(data));
    }, []);
    return (
        <div>
            <h3 className="text-3xl text-gray-500">Just For You</h3>
            <div className="pt-4 grid grid-cols-6 gap-4">
          {products.map((product) => (
            <Link to={`/productDetails/${product.id}`} key={product.id} className="hover:shadow-md">
            <img src={product.image} alt="" className="h-32 mx-auto" />
            <h3 className="text-xl px-2">{product.title}</h3>
            <div className="px-2">
              <p className="text-xl text-[#F85606]">${product.price}</p>
            </div>
          </Link>
          ))}
        </div>
        <div className="text-center">
        <button className="text-[#F85606] border-2 border-[#F85606] py-2.5 px-32 uppercase mb-4">
            load more
          </button>
        </div>
        <hr />
        </div>
    );
};

export default JustForYou;