import React, {Component} from 'react';
// import styles from './styles.module.css'
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import {Carousel} from 'react-responsive-carousel';
import Image from '../../common/Image';
import {B1, B2, B3} from '../../data';

export default class DemoCarousel extends Component {
  render() {
    const height = 500;
    return (
      <div className="carousel-wrapper" style={{marginTop: 80}}>
        <Carousel infiniteLoop={true} interval={3000} useKeyboardArrows autoPlay
          showThumbs={false} stopOnHover={true} centerMode={true}
          showArrows={true} emulateTouch={true} swipable={true} >
          <div>
            <Image src={B1} style={{width: '20%'}} height={height}
              alt="legend 1"/>
          </div>
          <div>
            <Image src={B2} style={{width: '20%'}} height={height}
              alt="legend 2"/>
          </div>
          <div>
            <Image src={B3} style={{width: '20%'}} height={height}
              alt="legend 2"/>
          </div>
        </Carousel>
      </div>
    );
  }
}
