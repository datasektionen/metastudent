import { React } from "react";
import '../new-styles.css'
import meta from "../assets/meta-ext.png";

const Home = () => {
    return (
        <main>
            <div className="row">
                <div className="col-lg mx-3">
                    <h1>Welcome to META!</h1>
                    <p className="text-container">
                        META is the chapter hall shared between the Computer Science and Media Technology chapters at KTH.
                        This website is run by the International Committee, which is also a collaboration between the two
                        chapters.
                    </p>
                </div>
                <div className="col-8-lg mx-auto">
                    <img src={meta} alt="META exterior" className="mw-100 mb-1" />
                    <p>
                        The outside of META, our chapter hall.
                    </p>
                </div>
            </div>
        </main>
    );
};

export default Home;
