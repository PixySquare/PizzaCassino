import React from 'react'
import styles from '../styles/blogs.module.css'
import Header from '../components/Header';
import PageBlog from '../components/PageBlog';
import Footer from '../components/Footer';
import ZomatoComponent from '../components/ZomatoComponent';

function BlogsPage() {
    return (
        <div className="woodBackground">
            <Header/>
            <div className={styles.container}>
            </div>
            <ZomatoComponent/>
            <h1 style={{textAlign: 'center'}}>Blogs</h1>
            <hr style={{width: '10%',display: 'block', marginRight:"auto",marginLeft:"auto",backgroundColor:"#F24C4C",borderColor:"#F24C4C"}}/>
            <br/>
            <br/>
            <PageBlog inverse={false}/>
            <PageBlog inverse={true}/>
            <PageBlog inverse={false}/>
            <Footer/>
        </div>
    )
}

export default BlogsPage;
