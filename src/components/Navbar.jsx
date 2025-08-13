import '../css/Navbar.css'
import { IoIosSettings } from "react-icons/io";
function Navbar (){
 return <div className="nav">
            <div className="nav-left">
                <ul>
                    <li>Home</li>
                    <li>Topology</li>
                    <li>Alerts</li>
                    <li>Learn</li>
                </ul>
            </div>
            <div className="nav-right">
                <ul>
                    <li>login</li>
                    <li><IoIosSettings /></li>
                </ul>
            </div>
        </div>
}
export default Navbar;