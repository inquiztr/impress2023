'use client'
import React, { useEffect } from 'react'
import styles from './page.module.scss'
import ExportedImage from 'next-image-export-optimizer'
import pic01 from './pic01.jpg'
import pic02 from './pic02.jpg'
import pic03 from './pic03.jpg'
import pic04 from './pic04.jpg'
import pic05 from './pic05.jpg'
import pic06 from './pic06.jpg'
import pic07 from './pic07.jpg'
import pic08 from './pic08.jpg'
import pic09 from './pic09.jpg'
import pic10 from './pic10.png'
import pic11 from './2023communitywinner.jpg'
import pic12 from './2024readerschoice.jpg'
import savethedate from './savethedate2.jpg'

import PhotoSwipeLightbox from 'photoswipe/lightbox'
import 'photoswipe/style.css'

declare global {
    interface Window {
        FB: {
            XFBML: any
        }
    }
}

export default function Home() {
    useEffect(() => {
        const lightbox = new PhotoSwipeLightbox({
            gallery: '#' + 'gallery',
            children: 'a',
            pswpModule: () => import('photoswipe'),
            padding: { top: 30, bottom: 30, left: 10, right: 10 },
        })
        lightbox.init()

        // window.FB.XFBML.parse()

        return () => {
            lightbox.destroy()
            //lightbox = null
        }
    }, [])
    return (
        <main className={styles.newsMain}>
            <section id="news" className={styles.columnWrap}>
                <h1 className="fontMont">News</h1>

                <div className={styles.newsList} id="gallery">
                    <div className={styles.newsItem}>
                        <div className={styles.left}>
                            <h2 className="fontMont">
                                The Readers Choice 2024 Diamond & Platinum
                                Winner
                            </h2>
                            <p>
                                Thank you for your votes and support!
                                <br />
                                Winner in four categories 2024
                            </p>
                        </div>
                        <div className={styles.right}>
                            <a
                                href={pic12.src}
                                data-pswp-width={pic12.width}
                                data-pswp-height={pic12.height}
                                key={'news01'}
                                className={styles.image}
                                target="_blank"
                                rel="noreferrer"
                            >
                                <ExportedImage
                                    src={pic12}
                                    alt="The Mississauga News Readers Choice 2024 Winner"
                                    width="100"
                                />
                            </a>
                        </div>
                    </div>

                    <div className={styles.newsItem}>
                        <div className={styles.left}>
                            <h2 className="fontMont">
                                Community Votes Mississauga 2023 Winner
                            </h2>
                            <p>
                                4th Annual Ward 1 Community Excellence Awards
                                <br />
                                October 2023
                            </p>
                        </div>
                        <div className={styles.right}>
                            <a
                                href={pic11.src}
                                data-pswp-width={pic11.width}
                                data-pswp-height={pic11.height}
                                key={'news01'}
                                className={styles.image}
                                target="_blank"
                                rel="noreferrer"
                            >
                                <ExportedImage
                                    src={pic11}
                                    alt="Mississauga 2023 Winner - Excellence Award"
                                    width="100"
                                />
                            </a>
                        </div>
                    </div>

                    <div className={styles.newsItem}>
                        <div className={styles.left}>
                            <h2 className="fontMont">
                                25th Anniversary Celebration
                            </h2>
                            <p>
                                Thurs, June 15th,
                                <br />
                                6pm - 10pm
                            </p>
                        </div>
                        <div className={styles.right}>
                            <a
                                href={savethedate.src}
                                data-pswp-width={savethedate.width}
                                data-pswp-height={savethedate.height}
                                key={'news01'}
                                className={styles.image}
                                target="_blank"
                                rel="noreferrer"
                            >
                                <ExportedImage
                                    src={savethedate}
                                    alt="25th Anniversary Celebration"
                                    width="100"
                                />
                            </a>
                        </div>
                    </div>

                    <div className={styles.newsItem}>
                        <div className={styles.left}>
                            <h2 className="fontMont">
                                The News Readers Choice 2022 Diamond Winner
                            </h2>
                            <p>
                                Thank you everyone voting Impressionable Gifts &
                                Decor <br />
                                #1 in Mississauga in five categories 2022
                            </p>
                        </div>
                        <div className={styles.right}>
                            <a
                                href={pic01.src}
                                data-pswp-width={pic01.width}
                                data-pswp-height={pic01.height}
                                key={'news01'}
                                className={styles.image}
                                target="_blank"
                                rel="noreferrer"
                            >
                                <ExportedImage
                                    src={pic01}
                                    alt="News Readers Choice 2022 Diamond Winner"
                                    width="100"
                                />
                            </a>
                        </div>
                    </div>

                    <div className={styles.newsItem}>
                        <div className={styles.left}>
                            <h2 className="fontMont">
                                12th Annual Diaper Drive
                            </h2>
                            <p>
                                Help Cover the Needs of Our Community&apos;s
                                Littlest Ones.
                                <br />
                                October 1-15, 2022
                            </p>
                        </div>
                        <div className={styles.right}>
                            <a
                                href={pic02.src}
                                data-pswp-width={pic02.width}
                                data-pswp-height={pic02.height}
                                key={'news02'}
                                className={styles.image}
                                target="_blank"
                                rel="noreferrer"
                            >
                                <ExportedImage
                                    src={pic02}
                                    alt="12th Annual Diaper Drive"
                                    width="100"
                                />
                            </a>
                        </div>
                    </div>

                    <div className={styles.newsItem}>
                        <div className={styles.left}>
                            <h2 className="fontMont">
                                Incredibly grateful and humbled to win the 2021
                                Entrepreneur of the Year Ward 1 Excellence Award
                            </h2>
                            <p>October 28, 2021</p>
                        </div>
                        <div className={styles.right}>
                            <a
                                href={pic03.src}
                                data-pswp-width={pic03.width}
                                data-pswp-height={pic03.height}
                                key={'news03'}
                                className={styles.image}
                                target="_blank"
                                rel="noreferrer"
                            >
                                <ExportedImage
                                    src={pic03}
                                    alt="2021 Entrepreneur of the Year"
                                    width="100"
                                />
                            </a>
                        </div>
                    </div>
                    {/* --- */}
                    <div className={styles.newsItem}>
                        <div className={styles.left}>
                            <h2 className="fontMont">
                                Celebrating our 23rd Anniversary!
                            </h2>
                            <div className={styles.aspect}>
                                <iframe
                                    src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2FImpressionableGiftsAndDecor%2Fvideos%2F918190712089734%2F&show_text=false&width=auto&t=0"
                                    width="560"
                                    height="315"
                                    style={{
                                        border: 'none',
                                        overflow: 'hidden',
                                        width: '100%',
                                        height: '100%',
                                    }}
                                    scrolling="no"
                                    frameBorder="0"
                                    allowFullScreen={true}
                                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                                ></iframe>
                            </div>
                        </div>
                    </div>
                    {/* --- */}

                    <div className={styles.newsItem}>
                        <div className={styles.left}>
                            <h2 className="fontMont">
                                We are celebrating our 21st year!
                            </h2>
                            <p>
                                Please join us on Thursday, June 6th, 2019
                                <br />
                                from 6pm-9pm for an evening of gratitude.
                            </p>
                        </div>
                        <div className={styles.right}>
                            <a
                                href={pic04.src}
                                data-pswp-width={pic04.width}
                                data-pswp-height={pic04.height}
                                key={'news04'}
                                className={styles.image}
                                target="_blank"
                                rel="noreferrer"
                            >
                                <ExportedImage
                                    src={pic04}
                                    alt="Celebrating our 21st year"
                                    width="100"
                                />
                            </a>
                        </div>
                    </div>

                    <div className={styles.newsItem}>
                        <div className={styles.left}>
                            <h2 className="fontMont">
                                8th Annual Diaper Drive
                            </h2>
                            <p>
                                Help Cover the Needs of Our Community&apos;s
                                Littlest Ones.
                                <br />
                                October 2-16, 2016
                            </p>
                        </div>
                        <div className={styles.right}>
                            <a
                                href={pic05.src}
                                data-pswp-width={pic05.width}
                                data-pswp-height={pic05.height}
                                key={'news05'}
                                className={styles.image}
                                target="_blank"
                                rel="noreferrer"
                            >
                                <ExportedImage
                                    src={pic05}
                                    alt="8th Annual Diaper Drive"
                                    width="100"
                                />
                            </a>
                        </div>
                    </div>

                    <div className={styles.newsItem}>
                        <div className={styles.left}>
                            <h2 className="fontMont">
                                Annual Christmas Open House!
                            </h2>
                            <p>
                                Please join us on Thursday, June 8th, 2017
                                <br />
                                Thursday, November 16, 2017
                                <br />
                                6pm- 9pm
                            </p>
                        </div>
                        <div className={styles.right}>
                            <a
                                href={pic06.src}
                                data-pswp-width={pic06.width}
                                data-pswp-height={pic06.height}
                                key={'news06'}
                                className={styles.image}
                                target="_blank"
                                rel="noreferrer"
                            >
                                <ExportedImage
                                    src={pic06}
                                    alt="Annual Christmas Open House!"
                                    width="100"
                                />
                            </a>
                        </div>
                    </div>

                    <div className={styles.newsItem}>
                        <div className={styles.left}>
                            <h2 className="fontMont">
                                We are celebrating our 19th year!
                            </h2>
                            <p>
                                Please join us on Thursday, June 8th, 2017
                                <br />
                                6pm- 9pm for an evening of celebration
                            </p>
                        </div>
                        <div className={styles.right}>
                            <a
                                href={pic07.src}
                                data-pswp-width={pic07.width}
                                data-pswp-height={pic07.height}
                                key={'news07'}
                                className={styles.image}
                                target="_blank"
                                rel="noreferrer"
                            >
                                <ExportedImage
                                    src={pic07}
                                    alt="Celebrating our 19th year"
                                    width="100"
                                />
                            </a>
                        </div>
                    </div>

                    <div className={styles.newsItem}>
                        <div className={styles.left}>
                            <h2 className="fontMont">
                                Annual Christmas Open House
                            </h2>
                            <p>
                                Join us for our Annual Christmas Open House
                                <br />
                                Thursday, November 17, 2016
                                <br />
                                6pm- 9pm
                            </p>
                        </div>
                        <div className={styles.right}>
                            <a
                                href={pic08.src}
                                data-pswp-width={pic08.width}
                                data-pswp-height={pic08.height}
                                key={'news08'}
                                className={styles.image}
                                target="_blank"
                                rel="noreferrer"
                            >
                                <ExportedImage
                                    src={pic08}
                                    alt="Celebrating our 19th year"
                                    width="100"
                                />
                            </a>
                        </div>
                    </div>

                    <div className={styles.newsItem}>
                        <div className={styles.left}>
                            <h2 className="fontMont">
                                Introducing - For TEA&apos;S Sake
                            </h2>
                            <p>
                                Join us for an evening of Tea Sampling at
                                <br />
                                Impressionable Gifts & Decor
                                <br />
                                Thursday, September 29th, 2016
                                <br />
                                6pm- 8pm
                            </p>
                        </div>
                        <div className={styles.right}>
                            <a
                                href={pic09.src}
                                data-pswp-width={pic09.width}
                                data-pswp-height={pic09.height}
                                key={'news09'}
                                className={styles.image}
                                target="_blank"
                                rel="noreferrer"
                            >
                                <ExportedImage
                                    src={pic09}
                                    alt="For TEA'S Sake"
                                    width="100"
                                />
                            </a>
                        </div>
                    </div>

                    <div className={styles.newsItem}>
                        <div className={styles.left}>
                            <h2 className="fontMont">
                                6th Annual Diaper Drive
                            </h2>
                            <p>
                                Help Cover the Needs of Our Community&apos;s
                                Littlest Ones.
                                <br />
                                October 1-15, 2016
                            </p>
                        </div>
                        <div className={styles.right}>
                            <a
                                href={pic10.src}
                                data-pswp-width={pic10.width}
                                data-pswp-height={pic10.height}
                                key={'news10'}
                                className={styles.image}
                                target="_blank"
                                rel="noreferrer"
                            >
                                <ExportedImage
                                    src={pic10}
                                    alt="6th Annual Diaper Drive"
                                    width="100"
                                />
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
