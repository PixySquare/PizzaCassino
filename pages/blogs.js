import React from 'react';
import styles from '../styles/blogs.module.css';
import Header from '../components/Header';
import PageBlog from '../components/PageBlog';
import Footer from '../components/Footer';
import ZomatoComponent from '../components/ZomatoComponent';
import {Blogs} from '../data';

function BlogsPage() {
  return (
    <div className="woodBackground">
      <Header/>

      <div className={styles.container}>
        <ZomatoComponent/>
      </div>
      <div className={styles.mainContent}>
        <h1 style={{textAlign: 'center'}}>Blogs</h1>
        <hr style={{width: '10%', display: 'block', marginRight: 'auto',
          marginLeft: 'auto', backgroundColor: '#F24C4C',
          borderColor: '#F24C4C'}}/>

        <PageBlog inverse={false} data={Blogs[0]}/>
        <PageBlog inverse={true} data={Blogs[1]}/>
        <PageBlog inverse={false} data={Blogs[2]}/>
      </div>
      <Footer/>
    </div>
  );
}

export default BlogsPage;
