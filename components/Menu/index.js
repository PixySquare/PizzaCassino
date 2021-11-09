import React from 'react'
import styles from './styles.module.css';

function Menu() {
    return (
        <div className={styles.menu}>
            <h1>MENU</h1>
            <hr style={{width: '30%',display: 'block', marginRight:"auto",marginLeft:"auto",backgroundColor:"#F2C94C",borderColor:"#F2C94C"}}/>
            <p style={{width:"70%",textAlign:"center",display:"block",marginLeft:"auto",marginRight:"auto"}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac placerat dui. Vestibulum ut felis et lorem porta congue vitae nec turpis. Aliquam quis leo at nunc tempor faucibus et ac massa dolor sit amet, consectetur adipiscing elit. Phasellus ac placerat dui. Vestibulum ut felis et lorem porta congue vitae nec turpis. Aliquam quis leo at nunc tempor faucibus et ac massa.
            </p>
            <div style={{display: 'flex',justifyContent: 'center',alignItems: 'center',padding:20}}>
            </div>
        </div>
    )
}

export default Menu
