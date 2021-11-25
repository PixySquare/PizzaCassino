import React from 'react';
import styles from './styles.module.css';

function ZomatoComponent() {
  return (
    <div className={styles.wrapper}>
      <p style={{textAlign: 'left', width: '60%', marginRight: 20}}>
          We Are Available At</p>
      <div style={{display: 'flex', flexDirection: 'row'}}>
        <div className={styles.zomatoButton}>
          <a href={'http://zomato.com'}>ZOMATO</a>

        </div>
        <div className={styles.swiggyButton}>
          <a href={'http://swiggy.com'}>SWIGGY</a>
        </div>
      </div>
    </div>
  );
}

export default ZomatoComponent;
