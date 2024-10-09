import { RiDeleteBin6Line } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { toast } from "react-hot-toast";
import { remove } from "../redux/Slices/CartSlice";


const CartItem = ({item ,itemIndex}) => {
    const dispatch = useDispatch();

    const removeFromCart = () => {
        dispatch(remove(item.id));
        toast.success("Item Removed");
    }
    return (
        <div className="flex items-center shadow hover:shadow-lg
         gap-3 p-4 mt-10 ml-5 rounded-xl w-[550px] ">

            <div>

                <div className="h-[180px]">
                    <img  src={item.image}  className="h-full w-full " />
                 </div>
                 <div>
                    <h1 className="text-gray-700 font-semibold text-lg text-left truncate w-40 mt-1" >{item.title}</h1>
                    <h1 className ="w-40 text-gray-400 font-normal text-[10px] text-left">{item.description.split(" ").slice(0,10).join(" ") + "..."}</h1>
                    <div className="flex justify-between gap-12 items-center w-full mt-5">
                        <div>
                            <p className="text-green-600 font-semibold">${item.price}</p>
                        </div>
                        <div
                        className="text-red-700 border-2 border-red-500 rounded-full font-semibold
                        p-1 text-[12px] px-3 uppercase
                        hover:bg-red-500
                        hover:text-red transition duration-300 ease-in"
                        onClick={removeFromCart}>
                        <RiDeleteBin6Line/>

                        </div>

                    </div>
                   
                 </div>

            </div>

        </div>
    );
};

export default CartItem;