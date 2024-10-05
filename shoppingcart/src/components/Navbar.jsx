import { FaShoppingCart } from "react-icons/fa";
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className="bg-blue-500">
          <div className="flex flex-row justify-between">
            <NavLink to="/">
                <div>
                <img src ="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.codehelp.in%2F&psig=AOvVaw3lX6I0XhSCIQ3URjj9z84P&ust=1728130586364000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCMiHlaTa9IgDFQAAAAAdAAAAABAE"/>
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