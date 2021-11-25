
import React, {Component} from 'react';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import styles from './styles.module.css';
import {Testimonials} from '../../data';

const responsive = {
  superLargeDesktop: {
    breakpoint: {max: 4000, min: 3000},
    items: 5,
  },
  desktop: {
    breakpoint: {max: 3000, min: 1024},
    items: 3,
  },
  tablet: {
    breakpoint: {max: 1024, min: 464},
    items: 2,
  },
  mobile: {
    breakpoint: {max: 464, min: 0},
    items: 1,
  },
};

export default class index extends Component {
  render() {
    return (
      <div style={{marginBottom: '30', scrollMarginTop: 100}} id="testimony">
        <h1 style={{textAlign: 'center'}}>TESTIMONIALS</h1>
        <hr style={{width: '35%', display: 'block', marginRight: 'auto',
          backgroundColor: '#F24C4C', borderColor: '#F24C4C'}} />
        <Carousel responsive={responsive}
          swipeable={false}
          draggable={false}
          showDots={true}
          ssr={true} // means to render carousel on server-side.
          infinite={true}
          // autoPlay={this.props.deviceType !== "mobile" ? true : false}
          autoPlaySpeed={1000}
          keyBoardControl={true}
          customTransition="all .5"
          transitionDuration={500}
          // containerClass="carousel-container"
          removeArrowOnDeviceType={['tablet', 'mobile']}
          // deviceType={this.props.deviceType}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
        >
          {Testimonials.map((item) => {
            return (
            // eslint-disable-next-line react/jsx-key
              <div className={styles.testimonialWrapper}>
                {/* <span>{item.Rating}</span>
                                <br /> */}
                <span style={{fontSize: '135%', opacity: 1.0,
                  textAlign: 'center', width: '100%'}}>{item.Comment}</span>
                <br />
                <br/>
                <span style={{fontSize: '100%', opacity: 0.8, float: 'left',
                  textAlign: 'right', width: '90%'}}> ~ {item.Writer}</span>
              </div>
            );
          })
          }
        </Carousel>
        <br />
        <br />

      </div>
    );
  }
}


