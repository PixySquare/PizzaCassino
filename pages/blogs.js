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

        <PageBlog inverse={false} heading={Blogs[0].heading}
          text={Blogs[0].text} image={Blogs[0].image}/>
        <PageBlog inverse={true} heading={Blogs[1].heading}
          text={Blogs[1].text} image={Blogs[1].image}/>
        <PageBlog inverse={false} heading={Blogs[2].heading}
          text={Blogs[2].text} image={Blogs[2].image}/>
      </div>
      <Footer/>
    </div>
  );
}

export default BlogsPage;
