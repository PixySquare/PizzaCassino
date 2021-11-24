import React from 'react';
import MenuCard from '../MenuCard.js';
import styles from './styles.module.css';
import PropTypes from 'prop-types';


function MenuComponent(props) {
  return (
    <div className={styles.wrapper}>

      <div className={styles.menuFlex}>

        {props.data.map((item) => {
          return (
          // eslint-disable-next-line react/jsx-key
            <div >
              <MenuCard src={item.image} title={item.name}
                ingredients={item.ingredients} info={item.description} />
            </div>
          );
        })
        }

      </div>
    </div>
  );
}

MenuComponent.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MenuComponent;
