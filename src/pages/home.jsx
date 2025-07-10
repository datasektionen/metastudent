import styles from "./home.module.css";
import "../new-styles.css";
import logo from "../assets/in-logo.png";
import borggarden720 from "../assets/borggarden-720.jpg";
import borggarden1080 from "../assets/borggarden-1080.jpg";
import { FaChevronDown } from "react-icons/fa6";
import { SiGooglemaps } from "react-icons/si";
import { Link } from "react-router";

const Home = () => {
    function chevronClicked() {
        window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
    }
    return (
        <div className={styles.home}>
            <main className={styles.frontpage}>
                <div className={styles.background}>
                    <picture>
                        <source
                            media="(max-width: 720px)"
                            srcSet={borggarden720}
                            type="image/jpeg"
                        />
                        <img src={borggarden1080} alt="Borggården KTH" />
                    </picture>
                </div>
                <section className={styles.content}>
                    <div className="row">
                        <div className="col">
                            <h1 className={[styles.title, styles.shadow].join(' ')}>
                                International Students
                                <br />
                                of CS and Media
                            </h1>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-8-lg mx-auto">
                            <img
                                src={logo}
                                alt="IN logo"
                                className={styles.logo}
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg mx-3">
                            <p className={[styles.text, styles.shadow].join(' ')}>
                                This website is run by the International Committee, which is
                                a collaboration between the <strong className={styles.nowrap}>Computer Science</strong> and <strong className={styles.nowrap}>Media Technology</strong> chapters at KTH.
                            </p>
                        </div>
                    </div>
                    <div className="row justify-content-center my-4 mt-auto">
                        <div className="col-auto">
                            <span className={styles.chevron} onClick={chevronClicked}>
                                <FaChevronDown />
                            </span>
                        </div>
                    </div>
                </section>
            </main>
            <div className={[styles.backgroundCredits, "my-2"].join(' ')}>Photo: Jann Lipka</div>

            <section className={styles.contentSection}>
                <div className="container text-container text-container-lg">
                    <div className="row">
                        <div className="col-lg-10 mx-auto">
                            <h2 className={styles.sectionTitle}>Introduction and META</h2>
                            <p className={styles.bodyText}>
                                If you are studying Computer Science or Media Technology at KTH then you are probably a member of either
                                the Computer Science or Media Technology Chapter, respectively. The Chapter is the main organisation for
                                social life and activities for students grouped by program of study.
                            </p>
                            <p className={styles.bodyText}>
                                The heart of our Chapters is our Chapter Hall called <strong>META</strong>, which is shared between the larger
                                Computer Science (CS) Chapter and the smaller Media Chapter. META is open all the time, though you might need your KTH keycard
                                to get in. During the day, students often sit there to study, eat lunch, or just hang out. Weekday afternoons
                                at META are filled with informal events, while the weekend might have parties or other things.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className={styles.contentSection}>
                <div className="container text-container text-container-lg">
                    <div className="row">
                        <div className="col-lg-8 mx-auto">
                            <h2 className={styles.sectionTitle}>Where can I find META?</h2>
                            <p className={styles.bodyText}>
                                It is located next to the library at <strong>Osquars Backe 21</strong>.
                            </p>
                            <div className={styles.mapContainer}>
                                <a href="https://dsekt.se/meta" target="_blank" rel="noopener noreferrer" className={styles.linkButton}>
                                    <SiGooglemaps /> View on Google Maps
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className={styles.contentSection}>
                <div className="container text-container text-container-lg">
                    <div className="row">
                        <div className="col-lg-10 mx-auto">
                            <h2 className={styles.sectionTitle}>Where to start?</h2>
                            <p className={styles.bodyText}>
                                Two good ways to start is to either go to an event or to join a club/committee (nämnd). The usual weekly
                                chapter events don&apos;t require any signups, so just show up to one that seems interesting and start talking
                                to someone there. Joining a group is usually done by contacting the club representative.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className={styles.contentSection}>
                <div className="container text-container text-container-lg">
                    <div className="row">
                        <div className="col-lg-10 mx-auto">
                            <h2 className={styles.sectionTitle}>How to find events and clubs</h2>
                            <div className={styles.eventsGrid}>
                                <div className={styles.eventsColumn}>
                                    <h3 className={styles.subTitle}>Weekly Events in META</h3>
                                    <div className={styles.eventsList}>
                                        <div className={styles.eventsListItem}>
                                            <strong>Tuesday</strong>
                                            <span>Board game nights with Qultrnämnden & DESC</span>
                                        </div>
                                        <div className={styles.eventsListItem}>
                                            <strong>Wednesday</strong>
                                            <span>Pub with the Computer Science Chapter</span>
                                        </div>
                                        <div className={styles.eventsListItem}>
                                            <strong>Thursday</strong>
                                            <span>Pub with the Media Chapter</span>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.eventsColumn}>
                                    <h3 className={styles.subTitle}>Chapter Resources</h3>
                                    <p className={styles.bodyText}>Some events and clubs might differ between the CS and Media chapters:</p>
                                    <p className={styles.bodyText}>
                                        All of the CS chapter&apos;s news and events can be found on <a href="https://datasektionen.se/en/news" target="_blank" rel="noopener noreferrer">datasektionen.se/en/news</a> or the CS chapter Discord server and all the clubs are listed on <a href="https://datasektionen.se/en/clubs" target="_blank" rel="noopener noreferrer">datasektionen.se/en/clubs</a>.
                                    </p>
                                    <p className={styles.bodyText}>
                                        For the media chapter, check their website at <a href="https://medieteknik.com" target="_blank" rel="noopener noreferrer">medieteknik.com</a>.
                                    </p>
                                </div>
                            </div>
                            <Link to="/student-life" className={[styles.linkButton, "mt-4"].join(' ')}>
                                Read more about committees here!
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <section className={styles.contentSection}>
                <div className="container text-container text-container-lg">
                    <div className="row">
                        <div className="col-lg-8 mx-auto">
                            <h2 className={styles.sectionTitle}>Join the Community</h2>
                            <div className={styles.socialLinks}>
                                <div className={styles.socialCard}>
                                    <h3 className={styles.subTitle}>Join our WhatsApp Group!</h3>
                                    <p className={styles.bodyText}>WhatsApp group, by internationals for internationals. Open for everybody!</p>
                                    <a href="https://chat.whatsapp.com/ImgYXrbHlyKAs3XzsPLBFT" className={styles.joinButton}>Join here</a>
                                </div>
                                <div className={styles.socialCard}>
                                    <h3 className={styles.subTitle}>CS-Chapter&apos;s Discord</h3>
                                    <p className={styles.bodyText}>Lots of space to chat, including course channels and announcements to the chapter / chapter-events.</p>
                                    <a href="https://dsekt.se/discord" target="_blank" rel="noopener noreferrer" className={styles.joinButton}>Join here</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
