import React from 'react'
import styles from './styles.module.css';
import PhoneIcon from '@mui/icons-material/Phone';
import MailIcon from '@mui/icons-material/Mail';
import ShareIcon from '@mui/icons-material/Share';
import Icon from "../../public/assets/Header_Icon.png";
import Image from 'next/image'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faInstagram,
    faTwitter,
    faWhatsapp,
  } from '@fortawesome/free-brands-svg-icons';

function Footer() {
    return (
        <div className={styles.footer}>
            <div class={styles.logoDiv}>
            <Image src={Icon} height="100" width="100"/>
            <h1 style={{marginLeft:30}}>Pizza Cassino</h1>
            </div>
            <div className={styles.info} style={{display: 'flex',flexDirection: 'column',alignItems: 'center',padding:20,marginLeft:"auto",textAlign: 'left'}}>
                <div className={styles.phoneInfo} style={{display:"flex",alignItems:"center",justifyContent: 'center',fontSize:"120%",marginRight:"auto"}}>
                    <PhoneIcon fontSize="large"/>
                    <div style={{padding:20}}>
                        +91 123-345-678
                        <br/>
                        +91 987-345-678
                    </div>
                </div>

                <div style={{display:"flex",alignItems:"center",justifyContent: 'center',fontSize:"120%"}}>
                    <MailIcon fontSize="large"/>
                    <div style={{padding:20}}>
                        mail@pizzacassino.com
                    </div>
                </div>
            </div>
            <div className={styles.bottom} style={{position: 'fixed',bottom:0,width:"100vw",backgroundColor:"#000",display:"flex",justifyContent:"center",alignItems:"center",height:40,padding:10}}>
                Designed and Developed by PixySquare   ||   Made with love for PizzaCassino
            </div>
        </div>
    )
}

export default Footer