import { FaStar } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";

const ProductDetails = () => {
    const product = useLoaderData();
    console.log(product);
    return (
        <div className="bg-[#EFF0F5]">
            <div className="max-w-screen-xl mx-auto bg-white">
                <div className="flex p-8 space-x-6">
                    <div>
                        <img src={product.image} alt="" className="w-80"/>
                    </div>
                    <div className="space-y-8">
                        <h2 className="text-3xl">{product.title}</h2>
                        <p className="flex space-x-3 text-[#2ABBE8]">
                            <span className="flex items-center">{product.rating.rate}<FaStar className="text-yellow-600"></FaStar></span>
                            <span>{product.rating.count} ratings</span>
                            </p>
                            <p className="text-[#F85606] text-4xl">${product.price}</p>
                            <p>Quantity: 1</p>
                            <div className="space-x-4 text-white">
                                <button className="text-lg px-16 py-2.5 bg-[#2ABBE8]">Buy Now</button>
                                <button className="text-lg px-16 py-2.5 bg-[#F57224]">Add to Cart</button>
                            </div>
                    </div>
                </div>
                <div></div>
            </div>
        </div>
    );
};

export default ProductDetails;