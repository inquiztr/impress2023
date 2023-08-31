import styles from './hero.module.scss'
import impressLogo from './impress-logo2.png'
import ExportedImage from 'next-image-export-optimizer'
function Hero() {
    return (
        <>
            <section id="hero" className={styles.hero}>
                <div className={styles.heroWrap}>
                    <h1 className={styles.heroImage}>
                        <span className="visually-hidden">
                            Impressionable Gifts
                        </span>
                        <ExportedImage
                            src={impressLogo}
                            alt="Impressionable Gifts"
                            placeholder="empty"
                            className={styles.heroImage}
                            priority
                        />
                    </h1>
                    <div className={styles.heroText}>
                        <h2 className="fontMont">
                            Wall Décor - Ladies Clothing - Jewellery - Accent
                            Furniture - Accessories
                        </h2>
                        <p>
                            At Impressionable Gifts, you will find exactly the
                            right gift for everyone on your gift giving list no
                            matter what the occasion. Or, perhaps you may want
                            to add something new to your décor.
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Hero
