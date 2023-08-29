import * as React from 'react'
import Link from 'next/link'
import styles from './header.module.scss'
import logo from '/public/impress-logo.png'
import ExportedImage from 'next-image-export-optimizer'
import menuicon from '/public/menuicon.svg'
import twitter from '/public/twitter.svg'
import facebook from '/public/facebook.svg'
import instagram from '/public/instagram.svg'

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
                    <ul id="nav" className={styles.navDesktop}>
                        <li className="fontMont">
                            <Link href="/">Home</Link>
                        </li>
                        <li className="fontMont">
                            <Link href="/news">News</Link>
                        </li>
                        <li className="fontMont">
                            <Link href="/#gallery">Gallery</Link>
                        </li>
                        <li className="fontMont">
                            <Link href="/#gallery">Contact Us</Link>
                        </li>
                        <li className={styles.spacer}></li>
                        <li className={styles.logos}>
                            <Link href="https://www.facebook.com/Impressionable-Gifts-Mississauga-131075450296876/">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 1024 1024"
                                    className={styles.sociallogos}
                                    width="20"
                                    height="20"
                                    style={{ marginBottom: '3px' }}
                                >
                                    <path
                                        d="M711.3 660 734 512H592v-96c0-40.5 19.8-80 83.4-80H740V210s-58.6-10-114.6-10C508.5 200 432 270.8 432 399.2V512H302v148h130v357.8c26.1 4.1 52.8 6.2 80 6.2s53.9-2.2 80-6.2V660h119.3z"
                                        fill="currentColor"
                                    />
                                </svg>
                            </Link>
                        </li>
                        <li className={styles.logos}>
                            <Link href="https://twitter.com/Impress_Gifts">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    className={styles.sociallogos}
                                    width="20"
                                    height="20"
                                >
                                    <path
                                        fill="#fff"
                                        d="M21.634 4.031c-.815.385-2.202 1.107-2.899 1.245-.027.007-.049.016-.075.023A4.5 4.5 0 0 0 11 8.5c0 .131-.011.372 0 .5-3.218 0-5.568-1.679-7.327-3.837-.235-.29-.485-.139-.537.067-.117.466-.157 1.245-.157 1.801 0 1.401 1.095 2.777 2.8 3.63-.314.081-.66.139-1.02.139a2.97 2.97 0 0 1-1.339-.335c-.158-.083-.499-.06-.398.344.405 1.619 2.253 2.756 3.904 3.087-.375.221-1.175.176-1.543.176-.136 0-.609-.032-.915-.07-.279-.034-.708.038-.349.582.771 1.167 2.515 1.9 4.016 1.928-1.382 1.084-3.642 1.48-5.807 1.48-.438-.01-.416.489-.063.674C3.862 19.504 6.478 20 8.347 20 15.777 20 20 14.337 20 8.999l-.005-.447c0-.018.005-.035.005-.053 0-.027-.008-.053-.008-.08a18.384 18.384 0 0 0-.009-.329c.589-.425 1.491-1.163 1.947-1.728.155-.192.03-.425-.181-.352-.543.189-1.482.555-2.07.625 1.177-.779 1.759-1.457 2.259-2.21.171-.257-.043-.518-.304-.394z"
                                    />
                                </svg>
                            </Link>
                        </li>
                        <li className={styles.logos}>
                            <Link href="https://www.instagram.com/impressionablegiftsanddecor">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 256 256"
                                    className={styles.sociallogos}
                                    width="20"
                                    height="20"
                                >
                                    <path
                                        fill="#fff"
                                        d="M128 23.064c34.177 0 38.225.13 51.722.745 12.48.57 19.258 2.655 23.769 4.408 5.974 2.322 10.238 5.096 14.717 9.575 4.48 4.479 7.253 8.743 9.575 14.717 1.753 4.511 3.838 11.289 4.408 23.768.615 13.498.745 17.546.745 51.723 0 34.178-.13 38.226-.745 51.723-.57 12.48-2.655 19.257-4.408 23.768-2.322 5.974-5.096 10.239-9.575 14.718-4.479 4.479-8.743 7.253-14.717 9.574-4.511 1.753-11.289 3.839-23.769 4.408-13.495.616-17.543.746-51.722.746-34.18 0-38.228-.13-51.723-.746-12.48-.57-19.257-2.655-23.768-4.408-5.974-2.321-10.239-5.095-14.718-9.574-4.479-4.48-7.253-8.744-9.574-14.718-1.753-4.51-3.839-11.288-4.408-23.768-.616-13.497-.746-17.545-.746-51.723 0-34.177.13-38.225.746-51.722.57-12.48 2.655-19.258 4.408-23.769 2.321-5.974 5.095-10.238 9.574-14.717 4.48-4.48 8.744-7.253 14.718-9.575 4.51-1.753 11.288-3.838 23.768-4.408 13.497-.615 17.545-.745 51.723-.745M128 0C93.237 0 88.878.147 75.226.77c-13.625.622-22.93 2.786-31.071 5.95-8.418 3.271-15.556 7.648-22.672 14.764C14.367 28.6 9.991 35.738 6.72 44.155 3.555 52.297 1.392 61.602.77 75.226.147 88.878 0 93.237 0 128c0 34.763.147 39.122.77 52.774.622 13.625 2.785 22.93 5.95 31.071 3.27 8.417 7.647 15.556 14.763 22.672 7.116 7.116 14.254 11.492 22.672 14.763 8.142 3.165 17.446 5.328 31.07 5.95 13.653.623 18.012.77 52.775.77s39.122-.147 52.774-.77c13.624-.622 22.929-2.785 31.07-5.95 8.418-3.27 15.556-7.647 22.672-14.763 7.116-7.116 11.493-14.254 14.764-22.672 3.164-8.142 5.328-17.446 5.95-31.07.623-13.653.77-18.012.77-52.775s-.147-39.122-.77-52.774c-.622-13.624-2.786-22.929-5.95-31.07-3.271-8.418-7.648-15.556-14.764-22.672C227.4 14.368 220.262 9.99 211.845 6.72c-8.142-3.164-17.447-5.328-31.071-5.95C167.122.147 162.763 0 128 0Zm0 62.27C91.698 62.27 62.27 91.7 62.27 128c0 36.302 29.428 65.73 65.73 65.73 36.301 0 65.73-29.428 65.73-65.73 0-36.301-29.429-65.73-65.73-65.73Zm0 108.397c-23.564 0-42.667-19.103-42.667-42.667S104.436 85.333 128 85.333s42.667 19.103 42.667 42.667-19.103 42.667-42.667 42.667Zm83.686-110.994c0 8.484-6.876 15.36-15.36 15.36-8.483 0-15.36-6.876-15.36-15.36 0-8.483 6.877-15.36 15.36-15.36 8.484 0 15.36 6.877 15.36 15.36Z"
                                    />
                                </svg>
                            </Link>
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
                <div className={styles.navMobile}>
                    <ul id="nav" className={styles.navDesktop}>
                        <li className="fontMont">
                            <Link href="/">Home</Link>
                        </li>
                        <li className="fontMont">
                            <Link href="/news">News</Link>
                        </li>
                        <li className="fontMont">
                            <Link href="/#gallery">Gallery</Link>
                        </li>
                        <li className="fontMont">
                            <Link href="/#gallery">Contact Us</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}
