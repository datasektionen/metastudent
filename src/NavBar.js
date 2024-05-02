import logo from './in-newlogo2.png';
function NavBar() {
    return (
        <div class="navbar"> {
            //style="height: 64px;"
        }
            <img src={logo}/>
            <ul>
                <li class="nav-item"><a href="./index.html">Home</a></li>
                <li class="nav-item"><a href="./student-life.html">Student Life</a></li>
                <li class="nav-item"><a href="./incoming-students.html">Incoming Students</a></li>
                <li class="nav-item"><a href="./opportunities-abroad.html">Going Abroad</a></li>
                <li class="nav-item"><a href="./contact-faq.html">Contact & FAQ</a></li>
            </ul>
        </div>
    );
}

export default NavBar;