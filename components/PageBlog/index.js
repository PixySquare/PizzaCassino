import React from 'react';
import Image from '../../common/Image';
import styles from './styles.module.css';
import PropTypes from 'prop-types';

export default function PageBlog(props) {
  const flexDirection = ( props.inverse ? 'row' : 'row-reverse');
  return (
    <div className={styles.container} style={{flexDirection: flexDirection}}>
      <div className={styles.imgContainer}
        style={{width: '40%', height: '40%'}}>
        <Image src={props.image} alt="image"/>
      </div>
      <div className={styles.textContainer} style={{padding: 30, width: '80%'}}>
        <p style={{color: '#F2C94C'}}>
          {props.heading}</p>
        <br/>
        <div className={styles.buttonYellow}
          style={{marginLeft: '0', marginTop: 20}}>
        </div>
      </div>
    </div>
  );
}

PageBlog.propTypes = {
  image: PropTypes.string.isRequired,
  inverse: PropTypes.bool.isRequired,
  heading: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

