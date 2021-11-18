import React from 'react'
import styles from './styles.module.css'
import MenuComponent from '../MenuComponent'
import {MenuContent} from '../../data';



function Menu() {
    return (
        <div className={styles.wrapper}>
            <h1 style={{textAlign: 'center'}}>{MenuContent.heading}</h1>
            <hr style={{width: '55%',display: 'block', marginRight:"auto",backgroundColor:"#F24C4C",borderColor:"#F24C4C"}} />
            <p>{MenuContent.description}</p>
            <br />
            <MenuComponent data={MenuContent.SpecialMenu}/>
        </div>
    )
}




export default Menu
