import React from 'react'
import styles from './styles.module.css';
import dough from '../../public/assets/dough.png'
import Image from 'next/image'

function AboutUs() {
    return (
        <div className={styles.wrapper} id="aboutus">
            <div className={styles.leftContainer}>
                <hr style={{width: '70%',display: 'block', marginRight:"auto",backgroundColor:"#F24C4C",borderColor:"#F24C4C"}}/>
                <p style={{width:"80%",marginLeft:"auto"}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                <hr style={{width: '70%',display: 'block', marginRight:"auto",backgroundColor:"#F24C4C",borderColor:"#F24C4C"}}/>
            </div>
            <div className={styles.rightContainer}>
                <Image src={dough} style={{width: '20%'}} alt={dough}/>
            </div>
        </div>
    )
}

export default AboutUs
