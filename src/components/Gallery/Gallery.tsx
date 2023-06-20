import styles from './gallery.module.scss'
import { fontMontserrat, fontOpen } from '../utils/fonts'
function Gallery() {
    return (
        <>
            <section id="gallery" className={styles.galleryHeadline}>
                <div className={styles.galleryWrap}>
                    <div className={styles.col1}>
                        <h4 className={fontMontserrat.className}>News</h4>
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
