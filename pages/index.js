import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Header from '../components/Header'
import Carousel from '../components/Carousel'
<<<<<<< HEAD
// import Menu from '../components/Menu'
=======
>>>>>>> 5d4227f5d8ad0568321bad658acd17ce61dc19d9
import AboutUs from '../components/AboutUs'
import Footer from '../components/Footer'
import FindUs from '../components/FindUs'
import MenuComponent from '../components/MenuComponent'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Pizza Cassino</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <Header/>
      <Carousel/>
      <AboutUs/>
      <FindUs/>
      <MenuComponent/>
      <Footer/>
    </div>
  )
}
