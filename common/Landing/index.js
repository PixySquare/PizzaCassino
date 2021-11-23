import React from 'react';
import Image from "../Image";
import dough from "./animation";

// eslint-disable-next-line react/prop-types
export function SvgIcon({ src, width, height }) {
  return (
        <Image
            alt={src}
            height={height}
            src={}
            width={width}
        />
    )
}

export default SvgIcon
