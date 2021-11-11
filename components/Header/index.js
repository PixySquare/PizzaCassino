import styles from './styles.module.css';
import Link from 'next/link'
import { useState } from 'react';

function Header() {
    const [open, setOpen] = useState(true);

    return (
        <div className={styles.header} >
            <Link href='/' passHref>
                <div className={styles.brand}>
                    Pizza Cassino
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
                    <Link href='#home' passHref>
                        <div className={styles.nav_item}>
                            HOME
                        </div>
                    </Link>
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
                    <Link href='#contact' passHref>
                        <div className={styles.nav_item}>
                            CONTACT
                        </div>
                    </Link>

                </div>
            )}
        </div>
    )
}

export default Header