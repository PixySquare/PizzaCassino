import React , {useState } from 'react'
import TabContext from '@mui/lab/TabContext';
import Tab from '@mui/material/Tab';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Box from '@mui/material/Box';
import styles from '../styles/menu.module.css'
import Header from '../components/Header';
import { AllMenu, StartersMenu, MainMenu, DrinksMenu, PromotionsMenu } from '../data';
import MenuComponent from '../components/MenuComponent'
import Footer from '../components/Footer';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import ZomatoComponent from '../components/ZomatoComponent';
const theme = createTheme({
  palette: {
    primary: {
      main: "#F2C94C",
    },
    secondary: {
      main: "#fff"
    }
  }
});

function MenuPage() {
    const handleChange = (event, newValue) => {
        setValue(newValue);
      };
    const [value, setValue] = useState('1');

    return (
        <div>
            <Header/>
            <div className={styles.container}>
            </div>
            <ZomatoComponent/>
            <h1 style={{textAlign: 'center'}}>Menu</h1>
            <hr style={{width: '10%',display: 'block', marginRight:"auto",marginLeft:"auto",backgroundColor:"#F24C4C",borderColor:"#F24C4C"}}/>
            <br/>
            <br/>
            <ThemeProvider theme={theme}>
                <TabContext value={value}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider',width:"100%",color:"#fff" }}>
                        <TabList textColor="inherit" indicatorColor="primary" variant="fullWidth" onChange={handleChange} aria-label="lab API tabs example">
                        <Tab   label="All" value="1" />
                        <Tab  style={{color:"#fff"}} label="Starters" value="2" />
                        <Tab  style={{color:"#fff"}} label="Main" value="3" />
                        <Tab  style={{color:"#fff"}} label="Drinks" value="4" />
                        <Tab  style={{color:"#fff"}} label="Promotion" value="5" />
                        </TabList>
                    </Box>
                    <TabPanel value="1">
                        <h1 style={{textAlign: 'left',marginLeft:"8%"}}>All</h1>
                        <hr style={{width: '10%',display: 'block', marginRight:"auto",marginLeft:"8%",backgroundColor:"#F24C4C",borderColor:"#F24C4C"}}/>
                        <MenuComponent data={AllMenu} />
                    </TabPanel>
                    <TabPanel value="2">
                        <h1 style={{textAlign: 'left',marginLeft:"8%"}}>Starters</h1>
                        <hr style={{width: '10%',display: 'block', marginRight:"auto",marginLeft:"8%",backgroundColor:"#F24C4C",borderColor:"#F24C4C"}}/>
                        <MenuComponent data={StartersMenu} />

                    </TabPanel>
                    <TabPanel value="3">
                        <h1 style={{textAlign: 'left',marginLeft:"8%"}}>Main</h1>
                        <hr style={{width: '10%',display: 'block', marginRight:"auto",marginLeft:"8%",backgroundColor:"#F24C4C",borderColor:"#F24C4C"}}/>
                        <MenuComponent data={MainMenu} />

                    </TabPanel>
                    <TabPanel value="4">
                        <h1 style={{textAlign: 'left',marginLeft:"8%"}}>Drinks</h1>
                        <hr style={{width: '10%',display: 'block', marginRight:"auto",marginLeft:"8%",backgroundColor:"#F24C4C",borderColor:"#F24C4C"}}/>
                        <MenuComponent data={DrinksMenu} />
                    </TabPanel>
                    <TabPanel value="5">
                        <h1 style={{textAlign: 'left',marginLeft:"8%"}}>Promotion</h1>
                        <hr style={{width: '10%',display: 'block', marginRight:"auto",marginLeft:"8%",backgroundColor:"#F24C4C",borderColor:"#F24C4C"}}/>
                        <MenuComponent data={PromotionsMenu}  />   
                    </TabPanel>
                    </TabContext>
                </ThemeProvider>
                <Footer/>
        </div>
    )
}

export default MenuPage;
