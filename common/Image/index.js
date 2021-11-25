import React from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';

export default function MenuCard({src, alt, width, style, height, className}) {
  return (

    <div onContextMenu={(e)=>{
      e.preventDefault();
    }}>
      <div style={{borderRadius: '5px', overflow: 'hidden'}}>
        <Image src={src} style={style}
          alt={alt} width={width}
          height={height} className={className} />
      </div>
    </div>
  );
}


MenuCard.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
  style: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
};
