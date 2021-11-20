import React from 'react'
import styles from './styles.module.css'
import Image from 'next/image'
import src from '../../public/assets/teampic.png'
function TeamMembers() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.image}>
                <Image src={src}/>
            </div>
            <div className={styles.text}>
                <p style={{color:"#F2C94C",fontSize:"150%"}}>Loreum Ipsum</p>
                <p>More Loreum Ipsum</p>
            </div>
        </div>
    )
}

export default TeamMembers
