import React, { useEffect, useState } from "react";
import { CircleLoader } from "react-spinners";
import Product from "./Product/Product";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setLoading(false);
      setProducts(data);
    } catch (error) {
      setLoading(false);
      throw new Error(error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <div>
      {loading ? (
        <div className="min-h-screen flex justify-center items-center">
          <CircleLoader size={170} color="rgb(256, 29, 29)" />
        </div>
      ) : (
        <div className="min-h-80vh grid sm:grid-cols-2 md:grid-cols-3 space-x-5 lg:grid-cols-4 
        max-w-6xl mx-auto p-3">
          {products && products.length > 0
            ? products.map((product) => <Product productItem={product} key={product.id}/>
                )
            : "No products fetched"}
        </div>
      )}
    </div>
  );
};

export default Home;
