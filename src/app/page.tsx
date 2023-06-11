import styles from './page.module.css'
import Hero from './Hero/Hero'

export default function Home() {
    return (
        <main className={styles.main}>
            <div className={styles.description}>
                <Hero />
                <figure>logo</figure>
                <h1>Impressionable Gifts Hello, World!</h1>
            </div>
        </main>
    )
}
