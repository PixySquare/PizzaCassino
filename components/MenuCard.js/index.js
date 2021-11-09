import React from 'react'
import styles from './styles.module.css';
import Image from 'next/image';

function MenuCard({src,title,price,info}) {
    return (
        <div className={styles.wrapper}>
            <div style={{width:"80%"}}>
            <Image className={styles.image} src={src} alt={title}/>
            </div>
            <div className={styles.info} style={{width:"100%"}}>
                <div style={{display: 'flex',justifyContent: 'space-between',color:"#F2C94C",width:"100%"}}>
                    <h2>{title}</h2>
                    <h2>${price}</h2>
                </div>
                <div>
                {info}
                </div>

            </div>
            
        </div>
    )
}

export default MenuCard
