import React from 'react';
import styles from './styles.module.css';
import MenuComponent from '../MenuComponent';
import {MenuContent} from '../../data';
import Link from 'next/link';

function Menu() {
  return (
    <div className={styles.wrapper} id="menu" style={{scrollMarginTop: 100}}>
      <h1 className={styles.h1} style={{textAlign: 'center'}}>
        {MenuContent.heading}</h1>
      <hr style={{width: '85%', display: 'block', marginRight: 'auto',
        backgroundColor: '#F24C4C', borderColor: '#F24C4C'}} />
      <p className={styles.p}
        style={{width: '80%', textAlign: 'center', marginLeft: 'auto',
          marginRight: 'auto'}}>{MenuContent.description}</p>
      <br />
      <MenuComponent data={MenuContent.SpecialMenu}/>

      <div className="buttonYellow">
        <Link href="/menu" passHref><p style={{textAlign: 'center'}}>
            View More</p></Link>
      </div>
    </div>
  );
}

export default Menu;
