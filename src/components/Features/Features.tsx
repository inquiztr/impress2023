import styles from './features.module.scss'
import ExportedImage from 'next-image-export-optimizer'
import { fontMontserrat } from '../utils/fonts'
import store1 from './store01.jpg'
import store2 from './store02.jpg'
import store3 from './store03.jpg'

function Hero() {
    return (
        <>
            <section
                id="feature"
                className={`${styles.feature} ${fontMontserrat.className}`}
            >
                <div className={styles.featureRow}>
                    <div className={styles.featureRowLeft}>
                        <h3 className={styles.feature1}>
                            Every Customer is Special.
                        </h3>
                        <p className={styles.featureText}>
                            From a passion that started at a very young age,
                            Lydia&apos;s goal was to open an affordable gift and
                            home decor store while treating each and every
                            customer special. With the guidance and Lydia&apos;s
                            dream became a reality in 1998. Impressionable Gifts
                            & Decor was conceived. She is very passionate and
                            determined to search for quality, extraordinary and
                            affordable merchandise - this her customers can
                            count on. In the past few years, ladies clothing has
                            also been added to the mix, which her customers are
                            loving. She also is thrilled when Impressionable
                            Gifts & Décor becomes on many occasions, the first
                            retail store in Canada or Mississauga to carry a new
                            item. Impressionable Gifts & Décor&apos;s commitment
                            is to add new and exciting weekly products so every
                            visit is a treat.
                        </p>
                    </div>
                    <div className={styles.featureRowRight}>
                        <ExportedImage
                            src={store1}
                            className={`${styles.heroImage} ${styles.featureImages}`}
                            alt="Photo of store shelving full of new weekly products"
                            width={418}
                            height={314}
                            style={{
                                width: '100%',
                                height: 'auto',
                            }}
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                    </div>
                </div>
                <div className={styles.featureRow}>
                    <div className={styles.featureRowLeft} style={{ order: 1 }}>
                        <h3 className={styles.feature1}>Welcoming.</h3>
                        <p className={styles.featureText}>
                            At Impressionable Gifts & Decor, you will receive
                            the utmost in customer service, quality, and price.
                            Lydia always enjoys a challenge when it comes to
                            finding just that right item as a gift, for
                            yourself, for corporate, weddings, showers, etc.
                            Come to see and feel the difference, where you are
                            always greeted with a genuine smile.
                        </p>
                    </div>
                    <div
                        className={styles.featureRowRight}
                        style={{ order: 2 }}
                    >
                        <ExportedImage
                            src={store2}
                            alt="Photo of other store shelving full of new weekly products"
                            className={`${styles.heroImage} ${styles.featureImages}`}
                            width={1280}
                            height={960}
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            style={{
                                width: '100%',
                                height: 'auto',
                            }}
                        />
                    </div>
                </div>
                <div className={styles.featureRow}>
                    <div className={styles.featureRowLeft}>
                        <h3 className={styles.feature1}>Giving Back.</h3>
                        <p className={styles.featureText}>
                            Impressionable Gifts & Décor is proud to be a part
                            of the community of Port Credit. Lydia loves to give
                            back to the neigbourhood where she grew up and still
                            lives. In 2011, as an example of such, Lydia
                            organized a <b>Diaper Drive</b> from{' '}
                            <b>October 1st - 15th</b> and every year, the
                            community comes together to help the littlest ones
                            in need. Over the years she has volunteered her time
                            on several committees.
                        </p>
                    </div>
                    <div className={styles.featureRowRight}>
                        <ExportedImage
                            src={store3}
                            alt="Photo of new weekly products"
                            className={`${styles.heroImage} ${styles.featureImages}`}
                            width={1280}
                            height={960}
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            style={{
                                width: '100%',
                                height: 'auto',
                            }}
                        />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Hero
