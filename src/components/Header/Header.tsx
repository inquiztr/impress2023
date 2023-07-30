import * as React from 'react'
import Link from 'next/link'
import styles from './header.module.scss'
import logo from '/public/impress-logo.png'
import ExportedImage from 'next-image-export-optimizer'

export default function Header() {
    return (
        <>
            <div className={styles.header}>
                <div className={styles.logo}>
                    <Link href="/">
                        <ExportedImage
                            src={logo}
                            alt="Impressionable Gifts1"
                            width="200"
                            height="53"
                            priority
                            className={styles.logoImage}
                        />
                    </Link>
                </div>
                <div className={styles.nav} style={{ display: 'none' }}>
                    <ul id="nav" className={styles.navMobile}>
                        <li>
                            <Link href="/">Home.</Link>
                        </li>
                        <li>
                            <Link href="/news">News</Link>
                        </li>
                        <li>
                            <Link href="/#features">Features</Link>
                        </li>
                        <li>
                            <Link href="/#gallery">Gallery</Link>
                        </li>
                        <li>
                            <Link href="/#gallery">Testimonials</Link>
                        </li>
                    </ul>
                </div>
                <button
                    type="button"
                    className={styles.buttonToggleMenu}
                    style={{ display: 'none' }}
                >
                    Menu
                </button>
            </div>
        </>
    )
}
