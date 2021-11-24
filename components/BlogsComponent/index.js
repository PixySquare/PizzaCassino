import React from 'react';
import FeaturedBlog from '../FeaturedBlog';
import styles from './styles.module.css';
import {BlogContent} from '../../data';


function BlogsComponent() {
  return (
    <div className={styles.wrapper} id="blogs" style={{scrollMarginTop: 80}}>

      <div>
        <h1 style={{textAlign: 'center'}}>{BlogContent.heading}</h1>
        <hr style={{width: '45%', display: 'block', marginRight: 'auto',
          backgroundColor: '#F24C4C', borderColor: '#F24C4C'}} />
        <p style={{width: '80%', textAlign: 'center', marginLeft: 'auto',
          marginRight: 'auto'}}>{BlogContent.description}</p>
        <br />
        <div className={styles.featured}>
          {BlogContent.Blogs.map((item) => {
            return (
            // eslint-disable-next-line react/jsx-key
              <FeaturedBlog data={item} />
            );
          })
          }
        </div>
        <div className="buttonYellow" >
          <p style={{textAlign: 'center'}}>Read More</p>
        </div>
        <br />
      </div>
    </div>
  );
}

export default BlogsComponent;
