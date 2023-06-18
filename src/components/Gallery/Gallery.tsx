import styles from './gallery.module.scss'
import Image from 'next/image'
// import headlineImage from './savethedate2.jpg'
import { fontMontserrat, fontOpen } from '../utils/fonts'
// const font = fontMontserrat({
//     subsets: ['latin'],
//     weight: '400',
//     display: 'swap',
// })
function Gallery() {
    return (
        <>
            <section id="newsHeadline" className={styles.newsHeadline}>
                <div className={styles.newsHeadlineWrap}>
                    <div className={styles.col1}>
                        <h4 className={fontMontserrat.className}>News</h4>
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
                        <h5>25th Anniversary Celebration</h5>
                        <p className={fontOpen.className}>
                            Thurs, June 15th,
                            <br />
                            6pm - 10pm
                        </p>
                    </div>
                    <div className={styles.col3}>
                        <a href="">
                            {/* <Image
                                src={headlineImage}
                                alt=""
                                width="150"
                                height="140"
                            /> */}
                        </a>{' '}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Gallery
