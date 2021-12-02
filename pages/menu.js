import React from 'react';
// import TabContext from '@mui/lab/TabContext';
// import Tab from '@mui/material/Tab';
// import TabList from '@mui/lab/TabList';
// import TabPanel from '@mui/lab/TabPanel';
// import Box from '@mui/material/Box';
import styles from '../styles/menu.module.css';
import Header from '../components/Header';
import {AllMenu} from '../data';
import MenuComponent from '../components/MenuComponent';
import Footer from '../components/Footer';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import ZomatoComponent from '../components/ZomatoComponent';
const theme = createTheme({
  palette: {
    primary: {
      main: '#F2C94C',
    },
    secondary: {
      main: '#fff',
    },
  },
});

function MenuPage() {
  return (
    <div className="woodBackground">
      <Header/>
      <div className={styles.container}>
        <ZomatoComponent/>
      </div>
      <div className={styles.mainContent}>
        <h1 style={{textAlign: 'center', fontSize: '22px'}}>OUR MENU</h1>
        <hr style={{width: '40%', display: 'block',
          marginRight: 'auto', marginLeft: 'auto',
          backgroundColor: '#F24C4C', borderColor: '#F24C4C'}}/>
        <ThemeProvider theme={theme} >
          <MenuComponent data={AllMenu} className={styles.wrapper2} />
        </ThemeProvider>

      </div>
      <Footer/>
    </div>
  );
}

export default MenuPage;
