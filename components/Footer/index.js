import React from 'react'
import styles from './styles.module.css';
import Image from 'next/image';
import wood from '../../public/assets/teampic.png'


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faInstagram,
    faTwitter,
    faWhatsapp
  } from '@fortawesome/free-brands-svg-icons';

function Footer() {
    return (
            <div className={styles.wrapper} id="footer">

                <div className={styles.leftContainer}>
                    {/* <Image src={wood} style={{width: '20%'}} alt="legend 1"/> */}
                    Pizza Cassino
                </div>

                <div className={styles.rightContainer}>
                    <span>Lorem Ipsum</span>
                    <span>Lorem Ipsum</span>
                    <span>Lorem Ipsum</span>

                </div>
            </div>
    )
}

export default Footer
