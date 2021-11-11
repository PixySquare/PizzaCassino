import React from 'react'
import styles from './styles.module.css'
import pizzaBlog from '../../public/assets/pizzaBlog.png'
import Image from 'next/Image'

function FeaturedBlog() {
    return (
        <div className={styles.wrapper}>
            <Image src={pizzaBlog} />
            <p style={{fontSize:25,color:"#F2C94C"}}>Loreum Ipsum</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac placerat dui.</p>
        </div>
    )
}

export default FeaturedBlog
