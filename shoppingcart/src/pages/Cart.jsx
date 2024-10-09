import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CartItem from "../components/CartItem";
import { Link } from 'react-router-dom';


const Cart = () => {

    const {cart} = useSelector((state) => state);
    const [totalAmount,setTotalAmount] = useState(0);

    useEffect( () => {
        setTotalAmount( cart.reduce( (acc, curr) => acc + curr.price,0) );
    }, [cart])
   
    return (
        <div>
     {
        cart.length > 0 ?
        (<div className="flex justify-around">
            <div>
                {
                    cart.map( (item,index) => {
                        return <CartItem key ={item.id} item={item} itemIndex={index} />
                    } )
                }
            </div>

            <div className="flex flex-col">

                <div className="flex flex-col items-center justify-between
                 gap-1 p-2 mt-10 ml-5 rounded-xl ">
                    <div className="text-green-700 font-semibold text-xl mt-5 uppercase">Your Cart</div>
                    <div className="text-green-700 font-semibold text-3xl uppercase">Summary</div>
                    <p>
                        <span>Total Item: {cart.length}</span>
                    </p>

                </div>

                <div>
                    <p>Total Amount: ${totalAmount}</p>
                    <button className="bg-green-800 text-white">
                        Checkout Now
                    </button>

                </div>

            </div>

        </div>) :
        (<div>
            <h1>Cart Empty</h1>
            <Link to={"/"}>
                <button>
                Shop Now
                </button>
            </Link>
                 </div>)
            }

        </div>
    );

};

export default Cart;
