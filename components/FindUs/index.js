import React from 'react'
import styles from './styles.module.css';
import  { FindUsContent } from "../../data";

function FindUs() {
    return (
            <div className={styles.mainwrapper} id="contact">
                <h1 style={{textAlign: 'center'}}>{FindUsContent.heading}</h1>
                <hr style={{width: '75%',display: 'block', marginRight:"auto",marginLeft:"auto",backgroundColor:"#F24C4C",borderColor:"#F24C4C"}} />
                <div className={styles.wrapper}>
                    <div className={styles.rightContainer}>
                        {/* <h1>Find Us</h1>
                        <hr style={{width: '60%',display: 'block', marginRight:"auto",marginLeft:"auto",backgroundColor:"#F2C94C",borderColor:"#F2C94C"}}/> */}
                        <p>
                            {FindUsContent.location1.description}
                        </p>
                        <h4>{FindUsContent.location1.locationtext}</h4>
                        <h4>{FindUsContent.location1.contact}</h4>

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
                        {/* <h1>Find Us</h1>
                        <hr style={{width: '60%',display: 'block', marginRight:"auto",marginLeft:"auto",backgroundColor:"#F2C94C",borderColor:"#F2C94C"}}/> */}
                        <p>
                            {FindUsContent.location1.description}
                        </p>
                        <h4>{FindUsContent.location1.locationtext}</h4>
                        <h4>{FindUsContent.location1.contact}</h4>
                    </div>
                </div>
        </div>
    )
}

export default FindUs
