import React from 'react'
import styles from './styles.module.css';

function FindUs() {
    return (
        <div className={styles.wrapper} id="contact">
            <div className={styles.leftContainer}>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.354723953281!2d77.02671531548701!3d28.619128891437434!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d05344857ab01%3A0xa2e7b93ec4f6f07a!2sPizza%20Cassino!5e0!3m2!1sen!2sin!4v1636439274578!5m2!1sen!2sin" width="600" height="450" style={{border:0}} allowFullScreen="" loading="lazy"></iframe>
            </div>
            <div className={styles.rightContainer}>
                <h1>Find Us</h1>
                <hr style={{width: '60%',display: 'block', marginRight:"auto",marginLeft:"auto",backgroundColor:"#F2C94C",borderColor:"#F2C94C"}}/>
                <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s.
                  </p>
                
            </div>
        </div>
    )
}

export default FindUs
