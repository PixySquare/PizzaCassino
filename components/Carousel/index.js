import React, { Component } from 'react'
// import styles from './styles.module.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Image from '../../common/Image';
import { B1, B2, B3 } from "../../data";

export default class DemoCarousel extends Component {
    render() {
        let height = 500;
        return (
            <div className="carousel-wrapper" style={{marginTop:50}}>
                <Carousel infiniteLoop={true} interval={3000}  useKeyboardArrows autoPlay showThumbs={false}  stopOnHover={true} centerMode={true} showArrows={true} emulateTouch={true} swipable={true} >
                    <div>
                        <Image src={B1} style={{width: '20%'}} height={height} alt="legend 1"/>
                    </div>
                    <div>
                        <Image src={B2} style={{width: '20%'}} height={height} alt="legend 2"/>
                    </div>
                    <div>
                        <Image src={B3} style={{width: '20%'}} height={height} alt="legend 2"/>
                    </div>
                </Carousel>
            </div>
        );
    }
}

// function Carousel() {
//     return (
//         <div className={styles.wrapper} id="home">
//             <div className={styles.leftContainer}>
//                 <h1 style={{fontSize:"40px"}}>Craving for a cheesy pizza?</h1>
//                 <hr style={{width: '60%',display: 'block', marginRight:"auto",marginLeft:"auto",backgroundColor:"#F24C4C",borderColor:"#F24C4C"}}/>
//                 <p style={{width:"70%"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac placerat dui. Vestibulum ut felis et lorem porta congue vitae nec turpis. Aliquam quis leo at nunc tempor faucibus et ac massa.</p>
//             </div>
//             <div className={styles.rightContainer}>
//             </div>
//         </div>
//     )
// }

// export default Carousel
