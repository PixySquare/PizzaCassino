import React from 'react';
import styles from './styles.module.css';
import Image from '../../common/Image';
import Link from 'next/link';

import PropTypes from 'prop-types';


function FeaturedBlog(props) {
  return (
    <Link href="/blogs" passHref >
      <div className={styles.wrapper} style={{scrollMarginTop: 100}}>
        <Image src={props.data.image} alt="image" />
        <p className={styles.text}
          style={{fontSize: 25, color: '#F2C94C'}}>{props.data.name}</p>
        <p >{props.data.description}</p>
      </div>
    </Link>
  );
}

FeaturedBlog.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default FeaturedBlog;
