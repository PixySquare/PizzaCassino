import React from 'react'
import styles from './styles.module.css';
import PhoneIcon from '@mui/icons-material/Phone';
import RoomIcon from '@mui/icons-material/Room';
import  { FindUsContent } from "../../data";

function FindUs() {
    return (
            <div className={styles.mainwrapper} style={{scrollMarginTop: 80}} id="findus">
                <h1 style={{textAlign: 'center'}}>{FindUsContent.heading}</h1>
                <hr style={{width: '35%',display: 'block', marginRight:"auto",marginLeft:"auto",backgroundColor:"#F24C4C",borderColor:"#F24C4C"}} />
                <div className={styles.wrapper}>
                    <div className={styles.rightContainer}>
                        <p>{FindUsContent.location1.description}</p>
                        <span style={{display:"flex",alignItems: 'center',justifyContent: 'center'}}><RoomIcon fontSize="large" style={{marginRight:10}}/><h4>{FindUsContent.location1.locationtext}</h4></span>
                        <span style={{display:"flex",alignItems: 'center',justifyContent: 'center'}}><PhoneIcon fontSize="large" style={{marginRight:10}}/><h4>{FindUsContent.location1.contact}</h4></span>

                    </div>

                    <div className={styles.leftContainer}>
                        <iframe src={FindUsContent.location1.location} width="100%" height="450" style={{border:0}} allowFullScreen="" loading="lazy"></iframe>
                    </div>
                </div>

                <div className={styles.wrapper} id="contact">
                    <div className={styles.leftContainer}>
                        <iframe src={FindUsContent.location1.location} width="100%" height="450" style={{border:0}} allowFullScreen="" loading="lazy"></iframe>
                    </div>

                    <div className={styles.rightContainer}>
                        <p>{FindUsContent.location2.description}</p>
                        <span style={{display:"flex",alignItems: 'center',justifyContent: 'center'}}><RoomIcon fontSize="large" style={{marginRight:10}}/><h4>{FindUsContent.location2.locationtext}</h4></span>
                        <span style={{display:"flex",alignItems: 'center',justifyContent: 'center'}}><PhoneIcon fontSize="large" style={{marginRight:10}}/><h4>{FindUsContent.location2.contact}</h4></span>
                    </div>
                </div>
        </div>
    )
}

export default FindUs
