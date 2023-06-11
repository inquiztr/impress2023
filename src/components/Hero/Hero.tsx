import styles from './hero.module.scss'
import Image from 'next/image'

function Hero() {
    return (
        <>
            <div id="hero" className={styles.hero}>
                <div className={styles.heroImage}>
                    <Image
                        src="/impress-logo2.png"
                        alt="Impressionable Gifts"
                        width="100"
                        height="100"
                        priority
                    />
                </div>
                <h1>Hero1</h1>
            </div>
        </>
    )
}

export default Hero
