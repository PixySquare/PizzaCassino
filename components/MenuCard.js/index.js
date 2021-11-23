import React from 'react'
import styles from './styles.module.css';
import Image from '../../common/Image';

function MenuCard({src,title,info,price}) {
    return (
        <div className={styles.wrapper}>
            <div className={styles.imageDiv} style={{width:"80%"}}>
            <Image className={styles.image} src={src} alt={title} />
            </div>
            <div className={styles.info} style={{width:"100%"}}>
                <div style={{display: 'flex',justifyContent: 'space-between',color:"#F2C94C",width:"100%"}}>
                    <h2>{title}</h2>
                    {price === undefined || price === null ? null : (<h2>{"$" + price}</h2>) }
                </div>
                
                {/* TODO: #2 Text side dec and img size inc */}
                <div>
                    {info}
                </div>

            </div>
            
        </div>
    )
}

export default MenuCard
