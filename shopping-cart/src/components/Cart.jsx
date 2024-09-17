import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartTile from "./Cart-tile/CartTile";

function Cart() {
  const [totalcart, setTotalCart] = useState(0);
  const { cart } = useSelector((state) => state);

  useEffect(() => {
    setTotalCart(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);
  console.log(cart, totalcart);

  return (
    <>
      {cart && cart.length ? (
        <div className="min-h-[80vh] grid md:grid-cols-2 max-w-6xl mx-auto">
            <div className="flex flex-col justify-center items-center p-3">
                {
                    cart.map(item => {
                        console.log(item);
                    return <CartTile productItem={item}/>})
                }

            </div>
            <div>
                <div className="flex flex-col justify-center items-end p-5 space-y-5 mt-14">
                    <h1 className="font-bold text-gray-800 text-xl mb-2">Your Cart summary</h1>
                    <p>
                        <span className="text-gray-800 font-bold">
                            Total Items
                        </span>
                        <span>: {cart.length}</span>
                    </p>
                    <p>
                        <span className="text-gray-800 font-bold">
                            Total Amount
                        </span>
                        <span>: {totalcart}</span>
                    </p>


                </div>
            </div>
        </div>
      ) : (
        <div className="min-h-[80vh] flex flex-col items-center justify-center">
          <h1 className="text-gray-800 text-xl mb-2">Your Cart is Empty</h1>
          <Link to='/'>
            <button className="bg-red-950 text-white border-2 rounded-lg font-bold p-4">Shop Now</button>
          </Link>
        </div>
      )}
    </>
  );
}

export default Cart;
