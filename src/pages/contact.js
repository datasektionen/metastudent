import React, { useState } from "react";
import '../contact.css';

const Contact = () => {
    const [expanded, setExpanded] = useState(null);

    const toggleFAQ = (index) => {
        setExpanded(expanded === index ? null : index);
    };

    return (
        <main className="contact-page body">
            <section className="chapter-contacts col-2">
                <div className="contact-info">
                    <h1>CS (Data) Chapter</h1>
                    <p>isc@datasektionen.se</p>
                </div>
                <div className="contact-info">
                    <h1>Media Chapter</h1>
                    <p>international@medieteknik.com</p>
                </div>
            </section>

            <section className="in-tem">
                <h2>International Committee Members</h2>
                <ul>
                    <li><span className="name">Håvard Alstadheim</span> <span className="role">- President</span></li>
                    <li><span className="name">Dmitry Chirin, Håvard Alstadheim</span> <span className="role">- Head of events</span></li>
                    <li><span className="name">Rafael Oliveira, Elena Pan</span> <span className="role">- Head of communication</span></li>
                    <li><span className="name">Linn Benali</span> <span className="role">- Secretary</span></li>
                    <li><span className="name">Hugo Tricot</span> <span className="role">- Head of Teambuilding</span></li>
                    <li><span className="name">Erik Sevelin, Linus Bälter</span> <span className="role">- Head of Website</span></li>
                    <li><span className="name">Håvard Alstadheim, Rafael Oliveira, Dmitry Chirin</span> <span className="role">- Head of Reception</span></li>
                </ul>
            </section>


            <section className="FAQ">
                <h2>Frequently Asked Questions (FAQ)</h2>

                <div 
                    className={`FAQ-content ${expanded === 0 ? 'expanded' : ''}`} 
                    onClick={() => toggleFAQ(0)}
                    aria-expanded={expanded === 0}
                >
                    <h3>Who are you? Who is MAIN? What is a chapter?
                    </h3>
                    {expanded === 0 && <p className="FAQ-answer">A chapter is a student union associated with a program at KTH, and for example the CS Chapter is then of course associated with the CS program. This website is run by the International Committee, shared between the two chapters for CS and Media. The main goal of the International Committee is to welcome international students into chapter life in general. Feel very free to contact us for more information. THS MAIN is an association that organizes events and more, similarly to chapters, but only for international and master’s students from all programs together.

.</p>}
                </div>

                <div 
                    className={`FAQ-content ${expanded === 1 ? 'expanded' : ''}`} 
                    onClick={() => toggleFAQ(1)}
                    aria-expanded={expanded === 1}
                >
                    <h3>How can I become active in the chapter and which clubs would you recommend?</h3>
                    {expanded === 1 && <p className="FAQ-answer">Two good ways to start is to either go to an event or to join a club/committee (nämnd). The usual weekly chapter events don't require any signups, so just show up to one that seems interesting and start talking to someone there. Joining a group is usually done by contacting the club representative. We would recommend the clubs that are more “English friendly”, for example: The International Committee, Qulturnämnden, DESC, The Sports Committee and IOR..</p>}
                </div>
            </section>
        </main>
    );
};

export default Contact;
