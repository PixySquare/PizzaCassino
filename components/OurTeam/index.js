import styles from './styles.module.css'
import img from '../../public/assets/teampic.png'
import TeamComponent from '../TeamComponent'
import TeamMembers from '../TeamMembers'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import  { TeamList } from "../../data";

const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  



function OurTeam() {
    return (
        <div className={styles.wrapper} style={{scrollMarginTop: 80}} id="team">
            <h1>OUR TEAM</h1>
            <hr style={{width: '30%',display: 'block', marginRight:"auto",marginLeft:"auto",backgroundColor:"#F24C4C",borderColor:"#F24C4C"}}/>
            
            <div className={styles.teamFlex} >
            <TeamComponent img={img} title="MyName" position="CEO,CFO" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac placerat dui."/>
            <TeamComponent img={img} title="MyName2" position="CEO2,CFO2" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac placerat dui."/>
            </div>
            {/* <div className={styles.teamMembers} > */}

            <Carousel   responsive={responsive}
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
                        removeArrowOnDeviceType={["tablet", "mobile"]}
                        // deviceType={this.props.deviceType}
                        dotListClass="custom-dot-list-style"
                        itemClass="carousel-item-padding-40-px"
            >
                    {TeamList.map(item => {
                        return (
                            // eslint-disable-next-line react/jsx-key
                            <TeamMembers/>
                            );
                        })
                    }
                </Carousel>

            {/* </div> */}
        </div>
    )
}

export default OurTeam
