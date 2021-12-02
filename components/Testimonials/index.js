
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
        <h1 className={styles.h1} style={{textAlign: 'center'}}>
          TESTIMONIALS</h1>
        <hr style={{width: '55%', display: 'block', marginRight: 'auto',
          backgroundColor: '#F24C4C', borderColor: '#F24C4C'}} />
        <br />
        <Carousel responsive={responsive}
          swipeable={true}
          draggable={true}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={3000}
          keyBoardControl={true}
        >
          {Testimonials.map((item) => {
            return (
            // eslint-disable-next-line react/jsx-key
              <div className={styles.testimonialWrapper}>
                {/* <span>{item.Rating}</span>
                                <br /> */}
                <span className={styles.text}
                  style={{opacity: 1.0,
                    textAlign: 'center', width: '100%'}}>{item.Comment}</span>
                <span className={styles.writer}
                  style={{opacity: 0.8, float: 'right',
                    textAlign: 'right', width: '90%'}}> ~ {item.Writer}</span>
              </div>
            );
          })
          }
        </Carousel>
      </div>
    );
  }
}


