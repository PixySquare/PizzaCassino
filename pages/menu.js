import React , {useState } from 'react'
import TabContext from '@mui/lab/TabContext';
import Tab from '@mui/material/Tab';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Box from '@mui/material/Box';
import styles from '../styles/menu.module.css'
import Header from '../components/Header';

function menuPage() {
    const handleChange = (event, newValue) => {
        setValue(newValue);
      };
    const [value, setValue] = React.useState('1');

    return (
        <div>
            <Header/>
            <div className={styles.container}>
            </div>
            <h1 style={{textAlign: 'center'}}>Menu</h1>
            <hr style={{width: '10%',display: 'block', marginRight:"auto",marginLeft:"auto",backgroundColor:"#F24C4C",borderColor:"#F24C4C"}}/>
            <br/>
            <br/>
            <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider',width:"100%",color:"#fff" }}>
                    <TabList variant="fullWidth" onChange={handleChange} aria-label="lab API tabs example">
                    <Tab sx={{
                        color: 'rgba(255, 255, 255, 0.7)',
                        '& .Mui-selected': {
                        color: '#fff',
                        },
                        '& .MuiTabs-indicator': {
                        backgroundColor: 'orange !important',
                        },
                        }} label="All" value="1" />
                    <Tab  style={{color:"#fff"}}label="Starters" value="2" />
                    <Tab  style={{color:"#fff"}}label="Main" value="3" />
                    <Tab  style={{color:"#fff"}}label="Drinks" value="4" />
                    <Tab  style={{color:"#fff"}}label="Promotion" value="5" />
                    </TabList>
                </Box>
                <TabPanel value="1">Item One</TabPanel>
                <TabPanel value="2">Item Two</TabPanel>
                <TabPanel value="3">Item Three</TabPanel>
                <TabPanel value="4">Item Four</TabPanel>
                <TabPanel value="5">Item Five</TabPanel>
                </TabContext>
        </div>
    )
}

export default menuPage
