
import { useDispatch } from 'react-redux'
import { removeFromCart } from '../store/slice/cart-slice'


    const CartTile = ({productItem}) => {
        const dispatch = useDispatch()
    function handleRemoveFromCart(){
        dispatch(removeFromCart(productItem.id))

    }
  return (
    <>
    <div className='bg-slate-500 flex p-5 mb-2 rounded-lg mt-2 justify-between'>
        <div className='p-3 flex'>
            <img  className='h-28 rounded-lg' alt={productItem?.title} src={productItem?.image}/>
            <div className='ml-10 self-start space-y-5'>
                <h1 className='text-white font-bold text-xl'>
                    {productItem?.title}
                </h1>
                <p className='text-white font-extrabold '>{productItem?.price}</p>
            </div>
        </div>
      <div>
      <button onClick={handleRemoveFromCart} className="bg-red-950 text-white border-2 rounded-lg font-bold p-4">
            Remove from cart
            </button>
      </div>
    </div>
    </>
  )
}

export default CartTile
