import React, {useEffect, useState} from 'react';
import styles from './styles.module.css';

function ZomatoComponent() {
  const [text, setText] =
  useState('');
  useEffect(()=> {
    if (process.browser) {
      if (window.innerWidth < 800) {
        setText('Order Online At');
      }
    }
  }, [text]);
  return (
    <div className={styles.wrapper}>
      <p style={{whiteSpace: 'nowrap', textAlign: 'left',
        width: '100%', marginRight: 20}}>
        {text}</p>
      <div style={{display: 'flex', flexDirection: 'row'}}>
        <div className={styles.zomatoButton}>
          <a target="_blank" href={'https://www.zomato.com/ncr/pizza-cassino-sector-14-dwarka-new-delhi/order'} rel="noreferrer">ZOMATO</a>

        </div>
        {/* <div className={styles.swiggyButton}>
          <a target="_blank" href={'http://swiggy.com'} rel="noreferrer">SWIGGY</a>
        </div> */}
      </div>
    </div>
  );
}

export default ZomatoComponent;
