import {React} from 'react';
import "../styles.css";

import Committees from './Committees';


const StudentLife = () => {
    return (
        <main className='text-container text-container-mw'>
            <div className='StudentLife'>
                <h1>Committees</h1>
                <Committees />
            </div>
        </main>
        
    );
};

export default StudentLife;
