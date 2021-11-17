import styles from './styles.module.css'
import img from '../../public/assets/teampic.png'
import TeamComponent from '../TeamComponent'
function OurTeam() {
    return (
        <div className={styles.wrapper}>
            <h1>OUR TEAM</h1>
            <hr style={{width: '10%',display: 'block', marginRight:"auto",marginLeft:"auto",backgroundColor:"#F24C4C",borderColor:"#F24C4C"}}/>
            
            <div style={{display: 'flex',justifyContent: 'center',padding:20,marginTop:"30px"}}>
            <TeamComponent img={img} title="MyName" position="CEO,CFO" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac placerat dui."/>
            <TeamComponent img={img} title="MyName2" position="CEO2,CFO2" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac placerat dui."/>
            </div>
        </div>
    )
}

export default OurTeam
