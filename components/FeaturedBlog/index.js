import React from 'react';
import styles from './styles.module.css';
import pizzaBlog from '../../public/assets/pizzaBlog.png';
import Image from 'next/image';
import PropTypes from "prop-types";


function FeaturedBlog(props) {
    return (
        <div className={styles.wrapper}>
            <Image src={props.data.image} alt="image" />
            <p style={{fontSize:25,color:"#F2C94C"}}>{props.data.name}</p>
            <p>{props.data.description}</p>
        </div>
    )
}

FeaturedBlog.propTypes = {
    data: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default FeaturedBlog;
