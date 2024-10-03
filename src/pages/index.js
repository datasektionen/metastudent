import { React } from "react";
import '../new-styles.css'

const Home = () => {
    return (
        <main>
            <div className="col-2">
                <div>
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
                <div>
                    <img src="/meta-ext.png" alt="META exterior" />
                    <p>
                        The outside of META, our chapter hall.
                    </p>
                </div>
            </div>
        </main>
    );
};

export default Home;
