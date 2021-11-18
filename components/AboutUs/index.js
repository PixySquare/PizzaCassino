import React from 'react'
import styles from './styles.module.css';
import dough from '../../public/assets/dough.png'
import Image from 'next/image'
import {AboutUsContent} from '../../data';

function AboutUs() {
    return (
        <div className={styles.wrapper} id="aboutus">
            <div className={styles.leftContainer}>
                <hr style={{width: '70%',display: 'block', marginRight:"auto",backgroundColor:"#F24C4C",borderColor:"#F24C4C"}}/>
                <p style={{width:"80%",marginLeft:"auto"}}>{AboutUsContent}</p>
                <hr style={{width: '70%',display: 'block', marginRight:"auto",backgroundColor:"#F24C4C",borderColor:"#F24C4C"}}/>
            </div>
            <div className={styles.rightContainer}>
                <Image src={dough} style={{width: '20%'}} alt={dough}/>
            </div>
        </div>
    )
}

export default AboutUs


