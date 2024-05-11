import styles from './page.module.css'
import Hero from '@/components/Hero/Hero'
import Features from '@/components/Features/Features'
import NewsHeadline from '@/components/NewsHeadline/NewsHeadline'
import Gallery from '@/components/Gallery/Gallery'
import Testimonial from '@/components/Testimonial/Testimonial'
import Mailinglist from '@/components/mailinglist/Mailinglist'
import Anniversary from '@/components/anniversary/Anniversary'
import TempHours from '@/components/TempHours/TempHours'

export default function Home() {
    return (
        <main className={styles.main}>
            <div className={styles.description}>
                <Anniversary />
                <Hero />
                <TempHours />
                <Features />
                <NewsHeadline />
                <Gallery />
                <Testimonial />
                <Mailinglist />
            </div>
        </main>
    )
}
