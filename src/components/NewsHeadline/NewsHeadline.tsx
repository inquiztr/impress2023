import styles from './newsheadline.module.scss'
import Image from 'next/image'
import { fontMontserrat, fontOpen } from '../utils/fonts'
// const font = fontMontserrat({
//     subsets: ['latin'],
//     weight: '400',
//     display: 'swap',
// })
function NewsHeadline() {
    return (
        <>
            <section id="newsHeadline" className={styles.newsHeadline}>
                <div className={styles.newsHeadlineWrap}>
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
                            <Image src="" alt="" />
                        </a>{' '}
                    </div>
                </div>
            </section>
        </>
    )
}

export default NewsHeadline
