import React from "react";
import { Link } from 'react-router-dom';
import styles from './LandingPage.module.css';


export default function LandingPage(){
    return (
        <div className={styles.cntLanding}>
        <div className={styles.containerLanding}> 
        <div>
            <h1>Pokemon Api</h1>
            </div>
            <Link to='/home'>
                <div>
                <button className={styles.buttonLogin}>LOGIN</button>
                </div>
            </Link>
        </div>
        </div>
    )
}