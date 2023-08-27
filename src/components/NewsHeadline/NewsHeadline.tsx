'use client'
import React, { useEffect } from 'react'
import styles from './newsheadline.module.scss'
import headlineImage from './savethedate2.jpg'
import ExportedImage from 'next-image-export-optimizer'
import PhotoSwipeLightbox from 'photoswipe/lightbox'
import 'photoswipe/style.css'

function NewsHeadline() {
    useEffect(() => {
        let lightbox = new PhotoSwipeLightbox({
            gallery: '#' + 'newsgallery',
            children: 'a',
            pswpModule: () => import('photoswipe'),
            padding: { top: 30, bottom: 30, left: 10, right: 10 },
        })
        lightbox.init()

        return () => {
            lightbox.destroy()
            lightbox = null
        }
    }, [])
    return (
        <>
            <section id="newsHeadline" className={styles.newsHeadline}>
                <div className={styles.newsHeadlineWrap}>
                    <div className={styles.col1}>
                        <h4 className="fontMont">News</h4>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="96"
                            viewBox="0 -960 960 960"
                            width="96"
                            className={styles.heart}
                        >
                            <path d="m480-121-41-37q-106-97-175-167.5t-110-126Q113-507 96.5-552T80-643q0-90 60.5-150.5T290-854q57 0 105.5 27t84.5 78q42-54 89-79.5T670-854q89 0 149.5 60.5T880-643q0 46-16.5 91T806-451.5q-41 55.5-110 126T521-158l-41 37Z" />
                        </svg>
                    </div>
                    <div className={styles.col2}>
                        <h5 className="fontMont">
                            25th Anniversary Celebration
                        </h5>
                        <p>
                            Thurs, June 15th,
                            <br />
                            6pm - 10pm
                        </p>
                    </div>
                    <div className={styles.col3} id="newsgallery">
                        <a
                            href={headlineImage.src}
                            data-pswp-width={headlineImage.width}
                            data-pswp-height={headlineImage.height}
                            key={'news1'}
                            className={styles.image}
                            target="_blank"
                            rel="noreferrer"
                        >
                            <ExportedImage
                                src={headlineImage}
                                alt="25th Anniversary Celebration"
                                width="150"
                                height="140"
                            />
                        </a>
                    </div>
                </div>
            </section>
        </>
    )
}

export default NewsHeadline
