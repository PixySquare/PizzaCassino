import Link from "next/link";
import React from 'react'
import FeaturedBlog from '../FeaturedBlog'
import styles from './styles.module.css'
import  { BlogContent } from "../../data";


function BlogsComponent() {
    return (
        <div className={styles.wrapper}>
            <h1 style={{textAlign: 'center'}}>{BlogContent.heading}</h1>
            <hr style={{width: '25%',display: 'block', marginRight:"auto",backgroundColor:"#F24C4C",borderColor:"#F24C4C"}} />
           <p>{BlogContent.description}</p>
           <div className={styles.featured}>
                {BlogContent.Blogs.map(item => {
                    return (
                            // eslint-disable-next-line react/jsx-key
                            <FeaturedBlog data={item} />
                        );
                    })
                }
            </div>
            <div className="buttonYellow" >
                <Link href="/blogs" passHref><p style={{textAlign: "center", color:"#F2C94C"}}>Read More</p></Link>
            </div>
        </div>
    )
}

export default BlogsComponent
