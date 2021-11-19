import React from 'react'
import MenuCard from '../MenuCard.js'
import styles from './styles.module.css'
import pizza from '../../public/assets/menu/pizza.jpeg'
import PropTypes from "prop-types";


function MenuComponent(props) {

    return (
        <div className={styles.wrapper}>
            {/* <h1>MENU</h1>
            <hr style={{width: '50%',display: 'block', marginRight:"auto",backgroundColor:"#F2C94C",borderColor:"#F2C94C"}} /> */}
            <div className={styles.menuFlex}>

                {props.data.map(item => {
                    return (
                            // eslint-disable-next-line react/jsx-key
                            <div >
                                <MenuCard src={item.image} title={item.name} ingredients={item.ingredients} info={item.description} />
                            </div>
                        );
                    })
                }
                           
            </div>
        </div>
    )
}

MenuComponent.propTypes = {
    data: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default MenuComponent
