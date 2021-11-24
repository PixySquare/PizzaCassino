import React from 'react';
import Image from '../../common/Image';
import styles from './styles.module.css';

function PageBlog(props) {
  const flexDirection = 'row';
  if (props.inverse) {
    flexDirection = 'row-reverse';
  }
  return (
    <div className={styles.container} style={{flexDirection: flexDirection}}>
      <div className={styles.imgContainer} style={{width: '20%', height: '40%'}}>
        <Image src={props.data.image} alt="image"/>
      </div>
      <div className={styles.textContainer} style={{padding: 30, width: '40%'}}>
        <p style={{fontSize: '20px', color: '#F2C94C'}}>{props.data.heading}</p>
        <p>
          {props.data.text}
        </p>
        <br/>
        <div className={styles.buttonYellow} style={{marginLeft: '0', marginTop: 20}}>
          {/* <Link href="/menu" passHref><p style={{textAlign: "center", color:"#F2C94C"}}>Read More</p></Link> */}
        </div>
      </div>
    </div>
  );
}

export default PageBlog;
