import React from 'react';
import styles from './styles.module.css';
import TeamComponent from '../TeamComponent';
import TeamMembers from '../TeamMembers';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import {TeamHead, TeamList} from '../../data';


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

function OurTeam() {
  return (
    <div className={styles.wrapper} style={{scrollMarginTop: 80}} id="team">
      <h1>OUR TEAM</h1>
      <hr style={{width: '30%', display: 'block', marginRight: 'auto',
        marginLeft: 'auto', backgroundColor: '#F24C4C',
        borderColor: '#F24C4C'}}/>

      <div className={styles.teamFlex} >
        <TeamComponent img={TeamHead[0].image} title={TeamHead[0].name}
          position={TeamHead[0].post} description={TeamHead[0].text}/>
        <TeamComponent img={TeamHead[1].image} title={TeamHead[1].name}
          position={TeamHead[1].post} description={TeamHead[1].text}/>
      </div>

      {/* <div className={styles.teamMembers} > */}

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
        containerClass="carousel-container"
        removeArrowOnDeviceType={['tablet', 'mobile']}
        // deviceType={this.props.deviceType}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        {TeamList.map((item) => {
          return (
          // eslint-disable-next-line react/jsx-key
            <TeamMembers data={item}/>
          );
        })
        }
      </Carousel>

      {/* </div> */}
    </div>
  );
}

export default OurTeam;
