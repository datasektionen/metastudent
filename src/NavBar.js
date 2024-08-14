import logo from './in-newlogo2.png';
import { Link } from "react-router-dom";

function NavBar() {
    return (
        <div className="navbar"> {
            //style="height: 64px;"
        }
            <img src={logo} alt="logo"/>
            <ul>
                <li className="nav-item"><Link to="/">Home</Link></li>
                <li className="nav-item"><Link to="/student-life">Student Life</Link></li>
                <li className="nav-item"><Link to="/incoming-students">Incoming Students</Link></li>
                <li className="nav-item"><Link to="/abroad">Going Abroad</Link></li>
                <li className="nav-item"><Link to="/contact">Contact & FAQ</Link></li>
            </ul>
        </div>
    );
}

export default NavBar;
