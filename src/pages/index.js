import { React } from "react";
import '../new-styles.css'

const Home = () => {
    return (
        <main>
            <div className="row">
                <div className="col-lg mx-3">
                    <h1>Welcome to META!</h1>
                    <p>
                        META is the chapter hall shared between the Computer Science and Media Technology chapters at KTH.
                        This website is run by the International Committee, which is also a collaboration between the two
                        chapters.
                    </p>
                    <p>
                        This website is extremely WIP at the moment.
                        Don't hesitate to reach out to us at isc@datasektionen.se
                        if you have any questions (or have a passion for web design...).
                    </p>
                </div>
                <div className="col-8-lg mx-auto">
                    <img src="/meta-ext.png" alt="META exterior" className="mw-100 mb-1" />
                    <p>
                        The outside of META, our chapter hall.
                    </p>
                </div>
            </div>
        </main>
    );
};

export default Home;
