import styles from './styles.module.css';
import Link from 'next/link'
import { useState } from 'react';
import Image from '../../common/Image';
import Icon from "../../public/assets/Header_Icon.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faInstagram,
    faFacebook,
    faWhatsapp
  } from '@fortawesome/free-brands-svg-icons';



function Header() {
    const [open, setOpen] = useState(true);

    return (
        <div className={styles.header} >
                <Image className={styles.image} src={Icon} alt={"title"} width={40} height={40}/>
                <Link href='/' passHref>
                    <div className={styles.brand}>
                        PizzaCassino
                    </div>
                </Link>

            <div 
                className={styles.menu}
                onClick={() => setOpen(!open)}
            >
                {open ? 
                    <>
                        <div className={styles.change1}></div>
                        <div className={styles.change2}></div>
                        <div className={styles.change3}></div>
                    </> 
                :
                    <>
                        <div className={styles.bar1}></div>
                        <div className={styles.bar2}></div>
                        <div className={styles.bar3}></div>
                    </>
                }
            </div>

            {open && (
                <div className={styles.collapse}>
                    <Link href='#aboutus' passHref>
                        <div className={styles.nav_item}>
                            ABOUT US
                        </div>
                    </Link>
                    <Link href='#menu' passHref>
                        <div className={styles.nav_item}>
                            MENU
                        </div>
                    </Link>
                    <Link href='#blogs' passHref>
                        <div className={styles.nav_item}>
                            BLOGS
                        </div>
                    </Link>
                    <Link href='#testimony' passHref>
                        <div className={styles.nav_item}>
                            TESTIMONY
                        </div>
                    </Link>
                    <Link href='#findus' passHref>
                        <div className={styles.nav_item}>
                            FIND US
                        </div>
                    </Link>
                    <Link href='#team' passHref>
                        <div className={styles.nav_item}>
                            OUR TEAM
                        </div>
                    </Link>

                    <div style={{display: 'flex',justifyContent: 'center',width: '120px',alignItems:"center",marginLeft:'auto',marginRight:"auto"}}>
                        <Link href='www.instagram.com' passHref>
                            <div className={styles.nav_item}>
                                <FontAwesomeIcon icon={faInstagram} size="lg"/>
                            </div>
                        </Link>

                        <Link href='www.facebook.com' passHref>
                            <div className={styles.nav_item}>
                                <FontAwesomeIcon icon={faFacebook} size="lg"/>
                            </div>
                        </Link>

                        <Link href='www.whatsapp.com' passHref>
                            <div className={styles.nav_item}>
                                <FontAwesomeIcon icon={faWhatsapp} size="lg"/> 
                            </div>
                        </Link>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Header
