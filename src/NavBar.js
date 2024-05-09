import logo from './in-newlogo2.png';
import { Link } from "react-router-dom";

function NavBar() {
    return (
        <div class="navbar"> {
            //style="height: 64px;"
        }
            <img src={logo} alt="logo"/>
            <ul>
                <li class="nav-item"><Link to="/">Home</Link></li>
                <li class="nav-item"><a href="/student-life.html">Student Life</a></li>
                <li class="nav-item"><a href="/incoming-students.html">Incoming Students</a></li>
                <li class="nav-item"><Link to="/abroad">Going Abroada</Link></li>
                <li class="nav-item"><a href="/contact-faq.html">Contact & FAQ</a></li>
            </ul>
        </div>
    );
}

export default NavBar;