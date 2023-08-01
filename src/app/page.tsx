import styles from './page.module.css'
import Hero from '@/components/Hero/Hero'
import Features from '@/components/Features/Features'
import NewsHeadline from '@/components/NewsHeadline/NewsHeadline'
import Gallery from '@/components/Gallery/Gallery'
import Testimonial from '@/components/Testimonial/Testimonial'
import Mailinglist from '@/components/mailinglist/Mailinglist'
import Footer from '@/components/Footer/Footer'

export default function Home() {
    return (
        <main className={styles.main}>
            <div className={styles.description}>
                <Hero />
                <Features />
                <NewsHeadline />
                <Gallery />
                <Testimonial />
                <Mailinglist />
                <Footer />
            </div>
        </main>
    )
}
