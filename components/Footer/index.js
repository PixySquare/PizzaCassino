import React from 'react'
import styles from './styles.module.css';
import Image from 'next/Image';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faInstagram,
    faTwitter,
    faWhatsapp
  } from '@fortawesome/free-brands-svg-icons';

function Footer() {
    return (
        <div className={styles.footer}>
            <h1>LA CARAVANA</h1>
            <p style={{width:"50%",textAlign:"center",display:"block",marginLeft:"auto",marginRight:"auto"}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac placerat dui. Vestibulum ut felis et lorem porta congue vitae nec turpis. Aliquam quis leo at nunc tempor faucibus et ac massa.
            </p>
            <hr style={{width: '50%',display: 'block', marginRight:"auto",backgroundColor:"#F2C94C",borderColor:"#F2C94C"}} />
            <div style={{display: 'flex',justifyContent: 'center',alignItems: 'center',padding:20}}>
            <a href="#" style={{marginRight:20}}><FontAwesomeIcon icon={faInstagram} size="lg"/></a>
            <a href="#" style={{marginRight:20}}><FontAwesomeIcon icon={faTwitter} size="lg"/></a>
            <a href="#" style={{marginRight:20}}><FontAwesomeIcon icon={faWhatsapp} size="lg" /></a>
            </div>
            <div style={{position: 'fixed',bottom:0,width:"100vw",backgroundColor:"#000",display:"flex",justifyContent:"center",alignItems:"center",height:40,padding:10}}>
            TODOS LOS DERECHOS RESERVADOS © LA CARAVANA 2021 | DESIGN: MEZORA
            </div>
        </div>
    )
}

export default Footer
