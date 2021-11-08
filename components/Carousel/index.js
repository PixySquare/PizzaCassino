import React from 'react'
import styles from './styles.module.css';

function Carousel() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.leftContainer}>
                <h1 style={{fontSize:"40px"}}>Craving for a cheesy pizza?</h1>
                <hr style={{width: '60%',display: 'block', marginRight:"auto",marginLeft:"auto",backgroundColor:"#F24C4C",borderColor:"#F24C4C"}}/>
                <p style={{width:"70%"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac placerat dui. Vestibulum ut felis et lorem porta congue vitae nec turpis. Aliquam quis leo at nunc tempor faucibus et ac massa.</p>
            </div>
            <div className={styles.rightContainer}>
            </div>
        </div>
    )
}

export default Carousel
