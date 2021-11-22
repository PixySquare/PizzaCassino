/* eslint-disable @next/next/no-html-link-for-pages */
import styles from './styles.module.css';
import Link from 'next/link'
import { useEffect, useState } from 'react';
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
    useEffect(()=> {
        if(process.browser) {
            if(window.innerWidth < 1055) {
                setOpen(false)
            }
        }
    }, [])

    useEffect(() => {
        let url = window.location.href.split("/");
        let target = url[url.length - 1].toLowerCase();
        let element = document.getElementById(target);
        element && element.scrollIntoView({ behavior: "smooth", block: "start" });
      }, []);

    if(process.browser) {
        window.addEventListener('resize', ()=> {
            if(window.innerWidth < 1055) {
                setOpen(false)
            } else {
                setOpen(true);
            }
        })
    }

    return (
        <div className={styles.header} >
            <div className={styles.logoDiv} style={{display: 'flex', flexDirection: 'row',alignItems: 'center',flex:0.3}}>
                <Image className={styles.image} src={Icon} alt={"title"} width={40} height={40}/>
                <Link href='/' passHref>
                    <div className={styles.brand} style={{marginLeft:10}}>
                        PizzaCassino 
                    </div>
                </Link>
            </div>

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
            <div style={{display: 'block',marginLeft:"auto"}}>
            {open && (
                <div className={styles.collapse}>
                    {/* #TODO: #4 fix padding issue while going to sections from links */}
                    <a href='/' 
                    onClick={e => {
                        let about = document.getElementById("aboutus");
                        e.preventDefault();
                        about && about.scrollIntoView({ behavior: "smooth", block: "start" });

                        if(window.location.href!="http://localhost:3000/"){
                        location.href = "/#aboutus";
                        }
                      }}
                    >
                        <div className={styles.nav_item}>
                            ABOUT US
                        </div>
                    </a>
                    <a href='/'
                    onClick={e => {
                        let menu = document.getElementById("menu");
                        e.preventDefault();
                        menu && menu.scrollIntoView({ behavior: "smooth", block: "start" });
                        if(window.location.href!="http://localhost:3000/"){
                        location.href = "/#menu";
                        }
                      }}
                      >
                        <div className={styles.nav_item}>
                            MENU
                        </div>
                    </a>
                    <a href='/'
                    onClick={e => {
                        let blogs = document.getElementById("blogs");
                        e.preventDefault();
                        blogs && blogs.scrollIntoView({ behavior: "smooth", block: "start" });
                        // window.history.pushState("blogs", "blogs", "/blogs");
                        if(window.location.href!="http://localhost:3000/"){
                        location.href = "/#blogs";
                        }
                      }}
                      >
                        <div className={styles.nav_item}>
                            BLOGS
                        </div>
                    </a>
                    <a href='/'
                    onClick={e => {
                        let testimony = document.getElementById("testimony");
                        e.preventDefault();
                        testimony && testimony.scrollIntoView({ behavior: "smooth", block: "start" });
                        // window.history.pushState("testimony", "testimony", "/testimony");
                        if(window.location.href!="http://localhost:3000/"){
                        location.href = "/#testimony";
                        }
                      }}
                      >
                        <div className={styles.nav_item}>
                            TESTIMONY
                        </div>
                    </a>
                    <a href='/'
                    onClick={e => {
                        let findus = document.getElementById("findus");
                        e.preventDefault();
                        findus && findus.scrollIntoView({ behavior: "smooth", block: "start" });
                        // window.history.pushState("findus", "findus", "/findus");
                        if(window.location.href!="http://localhost:3000/"){
                            location.href = "/#findus";
                            }
                      }}
                      >
                        <div className={styles.nav_item}>
                            FIND US
                        </div>
                    </a>
                    <a href='/'
                    onClick={e => {
                        let team = document.getElementById("team");
                        e.preventDefault();
                        team && team.scrollIntoView({ behavior: "smooth", block: "start" });
                        // window.history.pushState("team", "team", "/team");
                        if(window.location.href!="http://localhost:3000/"){
                            location.href = "/#team";
                            }
                      }}
                      >
                        <div className={styles.nav_item}>
                            OUR TEAM
                        </div>
                    </a>

                    <div className={styles.socials}>
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
        </div>
    )
}

export default Header
