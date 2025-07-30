// src/components/Sidebar.js
import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router';
import './Sidebar.css'; // Import the CSS file
import './new-styles.css'
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
import logo from './assets/in-logo.png';

function Sidebar() {
    const SHOW_SIDEBAR = 1400;
    const location = useLocation();
    const [sidebarOpen, setSidebarOpen] = useState(shouldSidebarBeOpen());
    const [scrollOffset, setScrollOffset] = useState(0);
    const sidebarContentRef = useRef(null);
    const [userInteracted, setUserInteracted] = useState(false);

    function shouldSidebarBeOpen() {
        // Hide the sidebar when on the home page (front page) because we want the
        // background image to span the entire screen
        const isHomePage = location.pathname === '/';
        const shouldHideSidebarOnHome = isHomePage && window.scrollY < window.innerHeight * 0.8;
        const windowWidth = window.innerWidth;
        return windowWidth >= SHOW_SIDEBAR && !shouldHideSidebarOnHome
    }

    useEffect(() => {
        function checkShouldOpenSidebar() {
            if (userInteracted) {
                // If the user has interacted with the sidebar,
                // don't automatically open or close it.
                return;
            }
            setSidebarOpen(shouldSidebarBeOpen());
        }
        checkShouldOpenSidebar();

        function handleScroll() {
            if (sidebarContentRef.current) {
                const { scrollTop } = sidebarContentRef.current;
                setScrollOffset(scrollTop);
            }
        }

        window.addEventListener('resize', checkShouldOpenSidebar);
        window.addEventListener('scroll', checkShouldOpenSidebar);

        const currentSidebarRef = sidebarContentRef.current;
        if (currentSidebarRef) {
            currentSidebarRef.addEventListener('scroll', handleScroll);
        }

        return () => {
            window.removeEventListener('resize', checkShouldOpenSidebar);
            window.removeEventListener('scroll', checkShouldOpenSidebar);
            if (currentSidebarRef) {
                currentSidebarRef.removeEventListener('scroll', handleScroll);
            }
        };
    }, [location.pathname, userInteracted]);

    const toggleSidebar = () => {
        setSidebarOpen((prevState) => !prevState);
        setUserInteracted(true);
    };


    const links = [
        // { label: 'Blizzworx Machines', path: '/blizzworx_machines' },
        { label: 'Home', path: '/' },
        { label: 'Student Life', path: '/student-life' },
        // { label: 'Incoming Students', path: '/incoming-students' },
        // { label: 'Going Abroad', path: '/abroad' },
        { label: 'Contact & FAQ', path: '/contact' },
    ];

    return (
        <>           
            <div className='iq-sidebar sidebar-default' style={{ left: sidebarOpen ? '0' : '-300px', zIndex: '999' }} > {/* Apply the "sidebar" class */}
            {/* <Logo toggleSidebar={toggleSidebar} sideBarOpen={sidebarOpen} /> */}
            <div className='iq-sidebar-logo d-flex align-items-end justify-content-between' style={{ paddingTop: '10px' }}>
                <Link to="/" className="header-logo">
                    <img src={logo} alt="logo" style={{ width: "70px", height: "70px" }} />
                    {/* <IoMdClose size="30px" style={{ marginLeft: '120px', marginTop: '-30px', color: '#F4CE14' }} /> */}
                </Link>


                {/* Show hamburger menu for mobile or when sidebar should be hidden on home page */}
                {(sidebarOpen ? (
                    <div className="side-menu-bt-sidebar" onClick={toggleSidebar}>
                        <IoMdClose size="30px" style={{ marginLeft: '120px', marginTop: '-60px', color: '#F4CE14' }} />
                    </div>
                ) : <div className="sidebar-hamburger-menu" onClick={toggleSidebar}>
                    <RxHamburgerMenu size="30px" />
                </div>)
                }
            </div>

            <div
                ref={sidebarContentRef}
                className="data-scrollbar"
                data-scroll="1"
                data-scrollbar="true"
                tabIndex="-1"
                style={{
                    overflow: 'auto',
                    outline: 'none',
                    position: 'relative',
                    // height: 'calc(100vh - 120px)', // Adjust the height as needed
                    willChange: 'transform'
                }}
            >
                <div className="scroll-content"
                    style={{
                        transform: `translate3d(0px, -${scrollOffset}px, 0px)`,
                        willChange: 'transform'
                    }}>
                    {/* <button onClick={toggleSidebar}>Toggle Sidebar</button> */}
                    <nav className='iq-sidebar-menu'>

                        <ul id='iq-sidebar-toggle' className="side-menu">

                            {links.map((link) => {
                                return (
                                    <li className=' sidebar-layout' key={link.path} >
                                        {(link.path === location.pathname) ? <Link to={link.path} onClick={(e) => { e.stopPropagation(); }}>{link.label}</Link>
                                            : <Link to={link.path} onClick={window.innerWidth < SHOW_SIDEBAR ? toggleSidebar : null}>{link.label}</Link>}
                                    </li>
                                );
                            })}


                        </ul>

                    </nav>


                </div>

            </div>
        </div>
        </>
    );

}

export default React.memo(Sidebar);
