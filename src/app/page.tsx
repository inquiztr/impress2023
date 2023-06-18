import styles from './page.module.css'
import Hero from '@/components/Hero/Hero'
import Features from '@/components/Features/Features'
import NewsHeadline from '@/components/NewsHeadline/NewsHeadline'
import Gallery from '@/components/Gallery/Gallery'

export default function Home() {
    return (
        <main className={styles.main}>
            <div className={styles.description}>
                <Hero />
                <Features />
                <NewsHeadline />
                <Gallery />
            </div>
        </main>
    )
}
