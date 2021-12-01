import React, {useEffect, useState} from 'react';
import Carousel from '../Carousel';

function CarouselCover() {
  const [height, setHeight] = useState(500);
  useEffect(()=> {
    if (process.browser) {
      if (window.innerWidth < 800) {
        setHeight(1500);
      }
    }
  }, []);

  return (
    <Carousel height={height}/>
  );
}

export default CarouselCover;
