import React from 'react';
import styles from './styles.module.css';
import Image from 'next/image';
import PropTypes from 'prop-types';


function TeamMembers(props) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.image}>
        <Image src={props.data.image} alt={'team'} height={170} width={170}/>
      </div>
      <div className={styles.text}>
        <p style={{color: '#F2C94C', fontSize: '150%'}}>{props.data.name}</p>
      </div>
    </div>
  );
}

TeamMembers.propTypes = {
  data: PropTypes.element.isRequired,
};

export default TeamMembers;
