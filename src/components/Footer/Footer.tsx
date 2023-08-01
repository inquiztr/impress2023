/* eslint-disable no-console */
import ExportedImage from 'next-image-export-optimizer'
import styles from './footer.module.scss'
import logo from '/public/impress-logo2.png'
function Footer() {
    return (
        <>
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
                            Since 1998, Impressionable Gifts has offered a
                            wonderful selection of gift and home decor. Visit us
                            in picturesque Port Credit Village,
                            Mississauga&apos;s Village on the lake, by land or
                            by lake.
                        </p>
                    </div>
                    <div className={styles.footerRight}>
                        <section className={styles.col1}>
                            <h2>Come Visit</h2>
                            <address>
                                74 Lakeshore Road E<br />
                                Mississauga, Ontario <br />
                                L5G 1E1
                            </address>
                            <ul>
                                <li>
                                    <span className={styles.day}>Mon:</span>
                                    <span className={styles.time}>Closed</span>
                                </li>
                                <li>
                                    <span className={styles.day}>
                                        Tues & Wed:
                                    </span>
                                    <span className={styles.time}>
                                        11AM - 6PM
                                    </span>
                                </li>
                                <li>
                                    <span className={styles.day}>
                                        Thurs & Fri:
                                    </span>
                                    <span className={styles.time}>
                                        11AM - 7PM
                                    </span>
                                </li>
                                <li>
                                    <span className={styles.day}>Sat:</span>
                                    <span className={styles.time}>
                                        11AM - 6PM
                                    </span>
                                </li>
                                <li>
                                    <span className={styles.day}>Sun:</span>
                                    <span className={styles.time}>
                                        12PM - 5PM*
                                    </span>
                                </li>
                                <li>
                                    *January and August <br /> closed Sundays
                                </li>
                            </ul>
                        </section>
                        <section className={styles.col2}>
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
                            <h2>Contact Us</h2>
                            <a href="tel:905-271-8999">905.271.8999</a>
                            <a href="mailto:mailto:impressgifts@on.aibn.com">
                                impressgifts@on.aibn.com
                            </a>
                        </section>
                    </div>
                </div>
                <div className={styles.copyright}>
                    © 2023 Impressionable Gifts | Design by{' '}
                    <a href="https://www.sanborg.com/">Sanborg</a>
                </div>
                <div className={styles.goTop} id="goTop">
                    <a
                        className="smoothscroll"
                        title="Back to Top"
                        href="#hero"
                    >
                        <i className="icon-up-open"></i>
                    </a>
                </div>
            </footer>
        </>
    )
}

export default Footer
