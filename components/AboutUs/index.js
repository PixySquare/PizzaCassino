import React from 'react';
import styles from './styles.module.css';
import dough from '../../public/assets/dough.png';
import Image from '../../common/Image';
import {aboutusContent} from '../../data';


function AboutUs() {
  return (
    <div className={styles.wrapper} id="aboutus">

      <div className={styles.leftContainer}>
        <hr style={{width: '80%', display: 'block', marginRight: 'auto',
          backgroundColor: '#F24C4C', borderColor: '#F24C4C'}}/>
        <br />
        <h1 className={styles.h1} style={{textAlign: 'center'}}>ABOUT US</h1>
        <p className={styles.text} style={{width: '60%', textAlign: 'center'}}>
          {aboutusContent}</p>
        <br />
        <hr className={styles.hr2}
          style={{width: '80%', display: 'block', marginRight: 'auto',
            backgroundColor: '#F24C4C', borderColor: '#F24C4C'}}/>
      </div>
      <div className={styles.rightContainer}>
        <Image src={dough} alt={dough} width={325} height={275}/>
      </div>
    </div>
  );
}

export default AboutUs;
