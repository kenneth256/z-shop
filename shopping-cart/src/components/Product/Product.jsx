import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../store/slice/cart-slice";


export default function Product({ productItem }) {


    const dispatch = useDispatch();
    const {cart} = useSelector(state=>state)

    function handleAddToCart(){
        dispatch(addToCart(productItem))

    }
function handleRemoveFromCart(){
   dispatch(removeFromCart(productItem.id))
}

  return (
    <div>
      <div className="group flex flex-col items-center border-2 border-red-900 
      gap-3 p-4 h-[360px] mt-10 ml-5 rounded-xl ">
      <div className="h-[180px]">
        <img src={productItem.image} alt={productItem?.image} className="w-full h-full object-cover"/>

      </div>
      <div className="flex flex-col justify-center items-center">
        <h1 className="w-40 truncate mt-1 text-gray font-bold text-lg">{productItem?.title}</h1>
        <h1 className="w-40 truncate mt-1 text-gray font-bold text-lg">Price: {productItem?.price}</h1>
      </div>
      <div className="flex items-center justify-center w-full mt-5">
        <button onClick={cart.some(item=> item.id === productItem.id) ? handleRemoveFromCart : handleAddToCart} className="bg-red-950 text-white border-2 rounded-lg font-bold p-2">
            {
                cart.some(item=> item.id === productItem.id ) ? 'Remove from cart' :  'Add to cart'
            }
            </button>
      </div>
      </div>
    </div>
  );
}

