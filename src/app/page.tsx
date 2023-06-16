import styles from './page.module.css'
import Hero from '@/components/Hero/Hero'
import Features from '@/components/Features/Features'
import NewsHeadline from '@/components/NewsHeadline/NewsHeadline'

export default function Home() {
    return (
        <main className={styles.main}>
            <div className={styles.description}>
                <Hero />
                <Features />
                <NewsHeadline />
            </div>
        </main>
    )
}
