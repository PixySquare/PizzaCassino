import Image from 'next/image';
import styles from './styles.module.css'
function TeamComponent({img,title,position,description}) {
    return (
        <div className = {styles.wrapper} style={{display:'flex',width:"40%"}}>
            <div className = {styles.imgWrapper} style={{width:'40%'}}>
                <Image src={img}/>
            </div>
            <div className={styles.text} style={{display:'flex',width:"70%",flexDirection:'column',paddingLeft:15,textAlign:"left"}}>
            <p style={{color:"#F2C94C",fontSize:"24px",marginBottom:0}}>{title}</p>
            <p style={{color:"#fff",opacity:"0.8",fontSize:"18px"}}>{position}</p>
            <p>{description}</p>
            </div>
        </div>
    )
}

export default TeamComponent
