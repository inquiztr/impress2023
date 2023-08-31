/* eslint-disable no-console */
import ExportedImage from 'next-image-export-optimizer'
import styles from './footer.module.scss'
import logo from '/public/impress-logo2.png'
function Footer() {
    return (
        <footer id="footer" className={styles.footer}>
            <div className={styles.footerWrap}>
                <div className={styles.footerLeft}>
                    <a href="https://impressionablegifts.ca">
                        <ExportedImage
                            src={logo}
                            alt="Impressionable Gifts1"
                            width="200"
                            height="53"
                            className={styles.logoImage}
                        />
                    </a>
                    <p className={styles.footerAbout}>
                        Since 1998, Impressionable Gifts has offered a wonderful
                        selection of gift and home decor. Visit us in
                        picturesque Port Credit Village, Mississauga&apos;s
                        Village on the lake, by land or by lake.
                    </p>
                </div>
                <div className={styles.footerRight}>
                    <section className={styles.col1}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 384 512"
                            height="25"
                            style={{ fill: '#738291', marginBottom: '11px' }}
                        >
                            <path d="M215.7 499.2C267 435 384 279.4 384 192 384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2 12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
                        </svg>
                        <h2>Come Visit</h2>
                        <address>
                            74 Lakeshore Road E<br />
                            Mississauga, Ontario <br />
                            L5G 1E1
                        </address>
                        <ul style={{ marginBottom: '10px' }}>
                            <li>
                                <span className={styles.day}>Mon:</span>
                                <span className={styles.time}>Closed</span>
                            </li>
                            <li>
                                <span className={styles.day}>Tues & Wed:</span>
                                <span className={styles.time}>11AM - 6PM</span>
                            </li>
                            <li>
                                <span className={styles.day}>Thurs & Fri:</span>
                                <span className={styles.time}>11AM - 7PM</span>
                            </li>
                            <li>
                                <span className={styles.day}>Sat:</span>
                                <span className={styles.time}>11AM - 6PM</span>
                            </li>
                            <li>
                                <span className={styles.day}>Sun:</span>
                                <span className={styles.time}>12PM - 5PM*</span>
                            </li>
                            <li>
                                *January and August <br /> closed Sundays
                            </li>
                        </ul>
                    </section>
                    <section className={styles.col2}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 -256 1950 1950"
                            height="35"
                            style={{ fill: '#738291' }}
                        >
                            <path
                                d="M593 640q-162-5-265-128H194q-82 0-138 40.5T0 671q0 353 124 353 6 0 43.5-21t97.5-42.5Q325 939 384 939q67 0 133 23-5-37-5-66 0-139 81-256zM1664 3q0-120-73-189.5T1397-256H523q-121 0-194 69.5T256 3q0 53 3.5 103.5t14 109Q284 274 300 324t43 97.5q27 47.5 62 81t85.5 53.5Q541 576 602 576q10 0 43-21.5t73-48q40-26.5 107-48T960 437q68 0 135 21.5t107 48q40 26.5 73 48t43 21.5q61 0 111.5-20t85.5-53.5q35-33.5 62-81t43-97.5q16-50 26.5-108.5t14-109Q1664 56 1664 3zM640 1280q0-106-75-181t-181-75q-106 0-181 75t-75 181q0 106 75 181t181 75q106 0 181-75t75-181zm704-384q0-159-112.5-271.5T960 512q-159 0-271.5 112.5T576 896q0 159 112.5 271.5T960 1280q159 0 271.5-112.5T1344 896zm576-225q0-78-56-118.5T1726 512h-134q-103 123-265 128 81 117 81 256 0 29-5 66 66-23 133-23 59 0 119 21.5t97.5 42.5q37.5 21 43.5 21 124 0 124-353zm-128 609q0-106-75-181t-181-75q-106 0-181 75t-75 181q0 106 75 181t181 75q106 0 181-75t75-181z"
                                transform="matrix(1 0 0 -1 15.186 1359.898)"
                            />
                        </svg>
                        <h2>Socialize</h2>
                        <ul>
                            <li>
                                <a href="https://www.facebook.com/Impressionable-Gifts-Mississauga-131075450296876/">
                                    Facebook
                                </a>
                            </li>
                            <li>
                                <a href="https://twitter.com/Impress_Gifts">
                                    Twitter
                                </a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com/impressionablegiftsanddecor/">
                                    Instagram
                                </a>
                            </li>
                        </ul>
                    </section>
                    <section className={styles.col3}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                            height="35"
                            style={{ fill: '#738291' }}
                        >
                            <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4l217.6 163.2c11.4 8.5 27 8.5 38.4 0l217.6-163.2c12.1-9.1 19.2-23.3 19.2-38.4 0-26.5-21.5-48-48-48H48zM0 176v208c0 35.3 28.7 64 64 64h384c35.3 0 64-28.7 64-64V176L294.4 339.2a63.9 63.9 0 0 1-76.8 0L0 176z" />
                        </svg>
                        <h2>Contact Us</h2>
                        <a href="tel:905-271-8999">905.271.8999</a>
                        <a href="mailto:impressgifts@on.aibn.com">
                            impressgifts@on.aibn.com
                        </a>
                    </section>
                </div>
            </div>
            <div className={styles.copyright}>
                © 2023 Impressionable Gifts | Design by{' '}
                <a href="https://www.sanborg.com/" rel="nofollow">
                    Sanborg
                </a>
            </div>
            <div className={styles.goTop} id="goTop">
                <a className="smoothscroll" title="Back to Top" href="#top">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        style={{ fill: '#fff' }}
                    >
                        <path fill="none" d="M0 0h24v24H0z" />
                        <path d="m12 8-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z" />
                    </svg>
                </a>
            </div>
        </footer>
    )
}

export default Footer
