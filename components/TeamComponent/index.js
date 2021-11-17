import Image from 'next/image';

function TeamComponent({img,title,position,description}) {
    return (
        <div style={{display:'flex',width:"40%"}}>
            <div style={{width:'40%'}}>
                <Image src={img}/>
            </div>
            <div style={{display:'flex',width:"70%",flexDirection:'column',paddingLeft:15,textAlign:"left"}}>
            <p style={{color:"#F2C94C",fontSize:"24px",marginBottom:0}}>{title}</p>
            <p style={{color:"#fff",opacity:"0.8",fontSize:"18px"}}>{position}</p>
            <p>{description}</p>
            </div>
        </div>
    )
}

export default TeamComponent
