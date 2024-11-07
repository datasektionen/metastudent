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
                    <li><span className="name">Håvard Alstadheim</span> <span className="role">- International Student Coordinator (ICS) for CS</span></li>
                    <li><span className="name">Erik Sevelin and Elena Pan</span> <span className="role">- International Student Coordinator (ICS) for Media</span></li>
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
                    {expanded === 0 && <p className="FAQ-answer">A chapter is a student union associated with a program at KTH, and for example the Computer Science (CS) Chapter is then of course associated with the CS program. This website is run by the International Committee, shared between the two chapters for CS and Media (Media Technology). The main goal of the International Committee is to welcome international students into chapter life in general. Feel very free to contact us for more information. THS MAIN (Master's and International Group) is an association that organizes events and more, similarly to chapters, but only for international and master’s students from all programs together. Read more about THS MAIN here <a href="https://ths-main.mailchimpsites.com/" target="_blank" rel="noopener noreferrer">THS MAIN</a>.

.</p>}
                </div>

                <div 
                    className={`FAQ-content ${expanded === 1 ? 'expanded' : ''}`} 
                    onClick={() => toggleFAQ(1)}
                    aria-expanded={expanded === 1}
                >
                    <h3>How can I become active in the chapter and which committees would you recommend?</h3>
                    {expanded === 1 && <p className="FAQ-answer">Two good ways to start is to either go to an event or to join a committee (nämnd). The usual weekly chapter events don't require any signups, so just show up to one that seems interesting and start talking to someone there. Joining a group is usually done by contacting the committee representative. Committees that are mainly held in English is for example: The International Committee, Qulturnämnden, DESC, The Sports Committee and IOR. But in generall do all students speek very good English so don't hesitate to join other committees. You can find more info about the committees here <a href="https://datasektionen.se/namnder" target="_blank" rel="noopener noreferrer">Data Section Committees page</a>. </p>}
                </div>
            </section>
        </main>
    );
};

export default Contact;
