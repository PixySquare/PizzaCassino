import Head from 'next/head'
import React, {Component} from 'react';

import styles from '../styles/Home.module.css'
import Header from '../components/Header'
import Carousel from '../components/Carousel'
// import Menu from '../components/Menu'
import AboutUs from '../components/AboutUs'
import Footer from '../components/Footer'
import FindUs from '../components/FindUs'
import BlogsComponent from '../components/BlogsComponent'
import OurTeam from '../components/OurTeam'
import Menu from '../components/Menu'

export default class Home extends Component {

  render(){
    return (
      <div>
        <Head>
          <title>PizzaCassino</title>
          <meta name="PizzaCassino" content="lorem" />
        </Head>
        <Header/>
        <Carousel/>
        <AboutUs/>
        <Menu/>
        <BlogsComponent/>
        <FindUs/>
        <OurTeam/>
        <Footer/>
      </div>
    )
  }
}
