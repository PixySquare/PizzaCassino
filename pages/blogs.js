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
        <h1 className={styles.h1} style={{textAlign: 'center'}}>Blogs</h1>
        <hr style={{width: '30%', display: 'block', marginRight: 'auto',
          marginLeft: 'auto', marginBottom: '20px', backgroundColor: '#F24C4C',
          borderColor: '#F24C4C'}}/>
        <div style={{marginTop: 50}}>
          <PageBlog inverse={false} heading={Blogs[0].heading}
            text={Blogs[0].text} image={Blogs[0].image}/>

          <PageBlog inverse={true} heading={Blogs[1].heading}
            text={Blogs[1].text} image={Blogs[1].image}/>

          <PageBlog inverse={false} heading={Blogs[2].heading}
            text={Blogs[2].text} image={Blogs[2].image}/>

          <PageBlog inverse={true} heading={Blogs[3].heading}
            text={Blogs[3].text} image={Blogs[3].image}/>

          <PageBlog inverse={false} heading={Blogs[4].heading}
            text={Blogs[4].text} image={Blogs[4].image}/>

          <PageBlog inverse={true} heading={Blogs[5].heading}
            text={Blogs[5].text} image={Blogs[5].image}/>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default BlogsPage;
