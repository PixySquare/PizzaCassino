import React from 'react'
import styles from './styles.module.css';

function Testimony() {
    return (
        <div className={styles.testimony} id="testimony">
            <h1>TESTIMONYIALS</h1>
            <hr style={{width: '30%',display: 'block', marginRight:"auto",marginLeft:"auto",backgroundColor:"#B62828",borderColor:"#B62828"}}/>
            <p style={{width:"70%",textAlign:"center",display:"block",marginLeft:"auto",marginRight:"auto"}}>
            CARD SYSTEM
            </p>
            <div style={{display: 'flex',justifyContent: 'center',alignItems: 'center',padding:20}}>
            </div>
        </div>
    )
}

export default Testimony
