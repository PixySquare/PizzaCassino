import React from 'react'
import styles from './styles.module.css'
import pizzaBlog from '../../public/assets/pizzaBlog.png'
import Image from 'next/image'
import PropTypes from "prop-types";

function FeaturedBlog(props) {
    return (
        <div className={styles.wrapper}>
            <Image src={pizzaBlog} alt="image" />
            <p style={{fontSize:25,color:"#F2C94C"}}>Loreum Ipsum</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac placerat dui.</p>
        </div>
    )
}


FeaturedBlog.propTypes = {
    data: PropTypes.arrayOf(PropTypes.object).isRequired,
}
export default FeaturedBlog
