// src/components/Sidebar.js
import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Link, useLocation } from 'react-router';
import './Sidebar.css'; // Import the CSS file
import './new-styles.css'
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
import logo from './assets/in-logo.png';

function Sidebar() {
    const SHOW_SIDEBAR = 1400;
    const location = useLocation();
    const [sidebarOpen, setSidebarOpen] = useState(window.innerWidth >= SHOW_SIDEBAR);
    const [scrollOffset, setScrollOffset] = useState(0);
    const sidebarContentRef = useRef(null);
    const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
    const [arrowRotation, setArrowRotation] = useState(0); // Initial rotation angle
    const [isSubMenuReportsOpen, setIsSubMenuReportsOpen] = useState(false);
    const [arrowRotationReports, setArrowRotationReports] = useState(0);

    const [logoSrc, setLogoSrc] = useState('');


    useEffect(() => {
        function handleResize() {
            const windowWidth = window.innerWidth;
            setSidebarOpen(windowWidth >= SHOW_SIDEBAR);
        }

        window.addEventListener('resize', handleResize);

        function handleScroll() {
            if (sidebarContentRef.current) {
                const { scrollTop } = sidebarContentRef.current;
                setScrollOffset(scrollTop);
            }
        }

        if (sidebarContentRef.current) {
            sidebarContentRef.current.addEventListener('scroll', handleScroll);
        }

        return () => {
            if (sidebarContentRef.current) {
                sidebarContentRef.current.removeEventListener('scroll', handleScroll);
            }
        };

        // return () => {
        //   window.removeEventListener('resize', handleResize);
        // };
    }, []);

    const toggleSidebar = (e) => {

        setSidebarOpen((prevState) => !prevState);
        // Logic to open/close the sidebar here
    };


    const links = [
        // { label: 'Blizzworx Machines', path: '/blizzworx_machines' },
        { label: 'Home', path: '/' },
        { label: 'Student Life', path: '/student-life' },
        { label: 'Incoming Students', path: '/incoming-students' },
        { label: 'Going Abroad', path: '/abroad' },
        { label: 'Contact & FAQ', path: '/contact' },
    ];

    const expandableLinks = [
    ];

    const toggleSubMenu = useCallback((e) => {
        e.preventDefault(); // Prevent the default behavior of the event
        e.stopPropagation();
        setIsSubMenuOpen(prevState => !prevState);
        setArrowRotation(prevRotation => (prevRotation === 0 ? 90 : 0));
    }, []); // No dependencies as it's using internal state


    return (
        <div className='iq-sidebar sidebar-default' style={{ left: sidebarOpen ? '0' : '-300px', zIndex: '999' }} > {/* Apply the "sidebar" class */}
            {/* <Logo toggleSidebar={toggleSidebar} sideBarOpen={sidebarOpen} /> */}
            <div className='iq-sidebar-logo d-flex align-items-end justify-content-between' style={{ paddingTop: '10px' }}>
                <Link to="/" className="header-logo">
                    <img src={logo} alt="logo" style={{ width: "70px", height: "70px" }} />
                    {/* <IoMdClose size="30px" style={{ marginLeft: '120px', marginTop: '-30px', color: '#F4CE14' }} /> */}
                </Link>


                {/* If the sidebar is open, then show the 'X' button, otherwise show the three lines (burger) button */}
                {window.innerWidth < SHOW_SIDEBAR ? (sidebarOpen ? (
                    <div className="side-menu-bt-sidebar" onClick={toggleSidebar}>
                        <IoMdClose size="30px" style={{ marginLeft: '120px', marginTop: '-60px', color: '#F4CE14' }} />

                    </div>
                ) : <div className="side-menu-bt-sidebar" style={{ marginLeft: '230px' }} onClick={toggleSidebar}>
                    <RxHamburgerMenu size="30px" style={{ color: "#e83d84", marginTop: '-60px' }} />
                    {/* {console.log("AAA")} */}
                </div>) : null
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
        </div >


        // </div>
    );

}

export default React.memo(Sidebar);
