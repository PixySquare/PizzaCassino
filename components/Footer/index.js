import React, {useEffect, useState} from 'react';
import styles from './styles.module.css';
import PhoneIcon from '@mui/icons-material/Phone';
import MailIcon from '@mui/icons-material/Mail';
// import ShareIcon from '@mui/icons-material/Share';
import Icon from '../../public/assets/Header_Icon.png';
import Image from 'next/image';
function Footer() {
  const [text, setText] =
  useState('PizzaCassino © 2021 || Designed and Developed by PixySquare');
  const [text2, setText2] = useState('');
  useEffect(()=> {
    if (process.browser) {
      if (window.innerWidth < 800) {
        setText('PizzaCassino © 2021 || ');
        setText2('Designed and Developed by PixySquare');
      }
    }
  }, [text]);
  return (
    <div className={styles.footer}>
      <div className={styles.upperFooter}>
        <div className={styles.logoDiv}>
          <Image src={Icon} height="100" width="100" alt={'Image'}/>
          <h1 className={styles.logoHeading} style={{marginLeft: 30}}>Pizza Cassino</h1>
        </div>
        <div className={styles.info} style={{display: 'flex',
          flexDirection: 'column', alignItems: 'center', padding: 20,
          marginLeft: 'auto', textAlign: 'left'}}>
          <div className={styles.phoneInfo} style={{display: 'flex',
            alignItems: 'center', justifyContent: 'center',
            fontSize: '120%', marginRight: 'auto'}}>
            <PhoneIcon fontSize="large"/>
            <div style={{padding: 20}}>
                            +91 123-345-678
              <br/>
                            +91 987-345-678
            </div>
          </div>
          <div style={{display: 'flex', alignItems: 'center',
            justifyContent: 'center', fontSize: '120%'}}>
            <MailIcon fontSize="large"/>
            <div style={{padding: 20}}>
                            mail@gmail.com
            </div>
          </div>
        </div>
      </div>
      <div className={styles.bottom} >
        {text}
        {text2}
      </div>
    </div>
  );
}

export default Footer;
