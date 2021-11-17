import styles from './styles.module.css'
function ZomatoComponent() {
    return (
        <div className={styles.wrapper}>
            <p style={{textAlign: 'left',width: '100%',marginRight:20}}>We Are Available At</p>
            <div style={{display: 'flex', flexDirection: 'row'}}>
                <div className={styles.zomatoButton}>
                    ZOMATO
                </div>
                <div className={styles.swiggyButton}>
                    SWIGGY
                </div>
            </div>
        </div>
    )
}

export default ZomatoComponent
