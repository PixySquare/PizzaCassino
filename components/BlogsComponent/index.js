import Link from "next/link";
import React from 'react'
import FeaturedBlog from '../FeaturedBlog'
import styles from './styles.module.css'


function BlogsComponent() {
    return (
        <div className={styles.wrapper}>
            <h1 style={{textAlign: 'center'}}>BLOGS</h1>
            <hr style={{width: '25%',display: 'block', marginRight:"auto",backgroundColor:"#F24C4C",borderColor:"#F24C4C"}} />
           <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
           <div className={styles.featured}>
                <FeaturedBlog/>
                <FeaturedBlog/>
                <FeaturedBlog/>
            </div>
            <div className="buttonYellow" >
                <Link href="/blogs" passHref><p style={{textAlign: "center", color:"#F2C94C"}}>Read More</p></Link>
            </div>
        </div>
    )
}

export default BlogsComponent
