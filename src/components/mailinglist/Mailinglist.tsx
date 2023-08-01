import styles from './mailinglist.module.scss'

function Mailinglist() {
    return (
        <>
            <section id="mailingList" className={styles.newsHeadline}>
                <div className={styles.newsHeadlineWrap}>
                    <div className={styles.col1}>
                        <h4 className="fontMont">Join us</h4>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="96"
                            viewBox="0 -960 960 960"
                            width="96"
                            className={styles.heart}
                        >
                            <path d="m480-121-41-37q-106-97-175-167.5t-110-126Q113-507 96.5-552T80-643q0-90 60.5-150.5T290-854q57 0 105.5 27t84.5 78q42-54 89-79.5T670-854q89 0 149.5 60.5T880-643q0 46-16.5 91T806-451.5q-41 55.5-110 126T521-158l-41 37Z" />
                        </svg>
                    </div>
                    <div className={styles.col2}>
                        <h5 className="fontMont">Join our mailing list</h5>
                        <p>
                            Sign up to our email list and be the first to know
                            of our upcoming event, and promotions and exciting
                            news.
                            <br />
                            <span>
                                Your email will be kept confidential and you can
                                unsubscribe at any time.
                            </span>
                        </p>
                    </div>
                    <div>
                        <a
                            className={styles.button}
                            href="mailto:impressgifts@on.aibn.com?subject=Subscribe"
                        >
                            Join us
                        </a>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Mailinglist
