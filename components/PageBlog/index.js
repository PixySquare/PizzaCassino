import React from 'react';
import Image from '../../common/Image';
import styles from './styles.module.css';
import PropTypes from 'prop-types';

function PageBlog(heading, text, image) {
  const flexDirection = 'row';
  if (props.inverse) {
    flexDirection = 'row-reverse';
  }
  return (
    <div className={styles.container} style={{flexDirection: flexDirection}}>
      <div className={styles.imgContainer}
        style={{width: '20%', height: '40%'}}>
        <Image src={image} alt="image"/>
      </div>
      <div className={styles.textContainer} style={{padding: 30, width: '40%'}}>
        <p style={{fontSize: '20px', color: '#F2C94C'}}>{heading}</p>
        <p>
          {text}
        </p>
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

export default PageBlog;
