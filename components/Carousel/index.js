import React, { Component } from 'react'
import styles from './styles.module.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image'

export default class DemoCarousel extends Component {
    render() {
        return (
            <div>
                <Carousel >
                    <div>
                        <Image src="assets/wood.png" style={{width: '20%'}} alt={dough}/>
                        <p className="legend">Legend 1</p>
                    </div>
                    <div>
                        <Image src="assets/wood.png"style={{width: '20%'}} alt={dough}/>
                        <p className="legend">Legend 2</p>
                    </div>
                    <div>
                        <Image src="assets/wood.png"style={{width: '20%'}} alt={dough}/>
                        <p className="legend">Legend 3</p>
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
