import '../css/Navbar.css'
import { IoIosSettings } from "react-icons/io";
function Navbar (){
 return <div className="nav">
            <div className="nav-left">
                <ul>
                    <li><a href='/'>Home</a></li>
                    <li><a href='/topology'>Topology</a></li>
                    <li>Alerts</li>
                    <li>Learn</li>
                </ul>
            </div>
            <div className="nav-right">
                <ul>
                    <li><a href='/login'>login</a></li>
                    <li><IoIosSettings /></li>
                </ul>
            </div>
        </div>
}
export default Navbar;