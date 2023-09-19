import { useEffect, useState } from "react";

const FlashSale = () => {
    const [products, setProducts] = useState([]);


    useEffect(() => {
        fetch('https://dummyjson.com/products')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])
    return (
        <div>
            <h3>Flash Sale</h3>
            <div>
                <div>
                <p>on Sale Now</p>
                <p>Ending in</p>
                </div>
                <button>show more</button>
            </div>
            <hr />
        </div>
    );
};

export default FlashSale;