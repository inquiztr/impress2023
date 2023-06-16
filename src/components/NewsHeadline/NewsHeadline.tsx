import styles from './newsheadline.module.scss'
import Image from 'next/image'
import { Open_Sans } from 'next/font/google'
const font = Open_Sans({
    subsets: ['latin'],
    weight: '400',
    display: 'swap',
})
function NewsHeadline() {
    return (
        <>
            <section id="hero" className={styles.hero}>
                <div className={styles.heroWrap}>
                    <h1 className={styles.heroImage}>
                        <span className="visually-hidden">
                            Impressionable Gifts
                        </span>
                        <Image
                            src="/impress-logo2.png"
                            alt="Impressionable Gifts"
                            width="420"
                            height="123"
                            //className={styles.heroImage}
                            priority
                        />
                    </h1>
                    <div className={styles.heroText}>
                        <h2>
                            Wall Décor - Ladies Clothing - Jewellery - Accent
                            Furniture - Accessories
                        </h2>
                        <p className={font.className}>
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

export default NewsHeadline
