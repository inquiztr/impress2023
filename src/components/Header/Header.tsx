import * as React from 'react'
import Link from 'next/link'
import styles from './header.module.scss'
import logo from '/public/impress-logo.png'
import ExportedImage from 'next-image-export-optimizer'
import menuicon from '/public/menuicon.svg'

export default function Header() {
    return (
        <>
            <div className={styles.header}>
                <div className={styles.logo}>
                    <Link href="/">
                        <ExportedImage
                            src={logo}
                            alt="Impressionable Gifts"
                            width="200"
                            height="53"
                            priority
                            placeholder="empty"
                            className={styles.logoImage}
                        />
                    </Link>
                </div>

                <div className={styles.nav}>
                    <ul id="nav" className={styles.navMobile}>
                        <li>
                            <Link href="/">Home</Link>
                        </li>
                        <li>
                            <Link href="/news">News</Link>
                        </li>
                        <li>
                            <Link href="/#gallery">Gallery</Link>
                        </li>
                        <li>
                            <Link href="/#gallery">Contact Us</Link>
                        </li>
                    </ul>
                </div>
                <button type="button" className={styles.buttonToggleMenu}>
                    <ExportedImage
                        src={menuicon}
                        width={33}
                        alt="menu"
                        placeholder="empty"
                    />
                </button>
            </div>
        </>
    )
}
