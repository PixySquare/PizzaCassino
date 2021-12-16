import React, {useEffect, useState} from 'react';
import styles from './styles.module.css';
import PhoneIcon from '@mui/icons-material/Phone';
import MailIcon from '@mui/icons-material/Mail';
// import ShareIcon from '@mui/icons-material/Share';
import Icon from '../../public/assets/Header_Icon.png';
import Image from 'next/image';
function Footer() {
  const [text, setText] =
  useState('CassinoCafe © 2021 || Designed and Developed by PixySquare');
  const [text2, setText2] = useState('');
  useEffect(()=> {
    if (process.browser) {
      if (window.innerWidth < 800) {
        setText('CassinoCafe © 2021 || ');
        setText2('Designed and Developed by PixySquare');
      }
    }
  }, [text]);
  return (
    <div className={styles.footer}>
      <div className={styles.upperFooter}>
        <div className={styles.logoDiv} style={{minWidth: 70}}>
          <Image src={Icon} alt={'Image'}/>
          <h1 className={styles.logoHeading} style={{marginLeft: 30}}>
            Pizza Cassino</h1>
        </div>
        <div className={styles.info} style={{display: 'flex',
          flexDirection: 'column', alignItems: 'center', padding: 20,
          marginLeft: 'auto', textAlign: 'left'}}>
          <div className={styles.phoneInfo} style={{display: 'flex',
            alignItems: 'center', justifyContent: 'center',
            fontSize: '120%', marginRight: 'auto'}}>
            <PhoneIcon fontSize="large"/>
            <div style={{padding: 20}} className={styles.contact}>
                            8587809303
              <br/>
                            8059075105
            </div>
          </div>
          <div style={{display: 'flex', alignItems: 'center',
            justifyContent: 'center', fontSize: '120%'}}>
            <MailIcon fontSize="large"/>
            <div style={{padding: 20}} className={styles.contact}>
              <a href = "mailto: cassinocafe@gmail.com"
                rel="noreferrer">
              Cassinocafe@gmail.com</a>
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
