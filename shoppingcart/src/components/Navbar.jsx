import { FaShoppingCart } from "react-icons/fa";
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className="bg-blue-500">
          <div className="flex flex-row justify-between">
            <NavLink to="/">
                <div>
                <img src ="../logoshop.png"className="h-14"/>
                 </div>
            </NavLink>
              <div>
                <NavLink>
                 <p>Home</p>
                </NavLink>
                 <NavLink to="/cart">
                    <div>
                        <FaShoppingCart/>
                    </div>
                 </NavLink>
               
                
              </div>
          </div>

        </div>
    )
};

export default Navbar;