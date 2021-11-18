import React from 'react'
import Image from 'next/image'
import styles from './styles.module.css'
import Link from 'next/link'
import food from '../../public/assets/blogs/food.png'
function PageBlog(props) {
    var flex_direction = "row";
    if(props.inverse){
        flex_direction = "row-reverse";
    }

    return (
        <div className={styles.container} style={{flexDirection:flex_direction}}>
            <div className={styles.imgContainer} style={{width:"50%"}}>
                <Image src={food} alt="image"/>
            </div>
            <div className={styles.textContainer} style={{padding:30,width:"50%"}}>
                <p style={{fontSize:"20px",color:"#F2C94C"}}>Loreum Ipsum</p>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                </p>
                <br/>
                <div className={styles.buttonYellow} style={{marginLeft:"0",marginTop:20}}>
                <Link href="/menu" passHref><p style={{textAlign: "center", color:"#F2C94C"}}>Read More</p></Link>
            </div>
            </div>
        </div>
    )
}

export default PageBlog
