import React, {useEffect, useState} from 'react';
import styles from './styles.module.css';

function ZomatoComponent() {
  const [text, setText] =
  useState('We Are Available At');
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
