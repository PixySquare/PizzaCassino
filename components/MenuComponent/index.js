import React from 'react'
import MenuCard from '../MenuCard.js'
import styles from './styles.module.css'
import pizza from '../../public/assets/menu/pizza.jpeg'
function MenuComponent() {

    const specialMenu = 
    [
        [{pizza} ,"Pizza" ,"25","Loreum Ipsum text"],
        [{pizza} ,"Pizza1" ,"35","Loreum Ipsum text2"],
        [{pizza} ,"Pizza2" ,"45","Loreum Ipsum text3"],
        [{pizza} ,"Pizza3" ,"55","Loreum Ipsum text4"],
    ]

    const menuItems = specialMenu.map((item)=>{
        // console.log("item[0]");
        <div>
            <MenuCard src={item[0]} title={item[1]} price={item[2]} info={item[3]}/>
        </div>
    })
    return (
        <div className={styles.wrapper}>
            <h1>MENU</h1>
            <hr style={{width: '50%',display: 'block', marginRight:"auto",backgroundColor:"#F2C94C",borderColor:"#F2C94C"}} />
            <div className={styles.menuFlex}>
               
        
                <div>
                    <MenuCard src={pizza} title={"Pizza"} price={"25"} info={"Loreum Ipsum text"}/>
                </div>
                <div>
                    <MenuCard src={pizza} title={"Pizza"} price={"25"} info={"Loreum Ipsum text"}/>
                </div>
                <div>
                    <MenuCard src={pizza} title={"Pizza"} price={"25"} info={"Loreum Ipsum text"}/>
                </div>
                <div>
                    <MenuCard src={pizza} title={"Pizza"} price={"25"} info={"Loreum Ipsum text"}/>
                </div>
            </div>
        </div>
    )
}

export default MenuComponent
