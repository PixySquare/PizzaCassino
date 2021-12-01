import React from 'react';
import styles from './styles.module.css';
import Image from '../../common/Image';
import PropTypes from 'prop-types';

function MenuCard({src, title, info, price}) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.imageDiv} style={{width: '80%'}}>
        <Image className={styles.image} src={src} alt={title} />
      </div>
      <div className={styles.info} style={{width: '100%'}}>
        <div style={{display: 'flex',
          justifyContent: 'center', color: '#F2C94C', width: '100%'}}>
          <h2 className={styles.name}>{title}</h2>
        </div>
        <div className={styles.text}>
          {info}
        </div>
      </div>
    </div>
  );
}

MenuCard.propTypes = {
  src: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  info: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
};

export default MenuCard;
