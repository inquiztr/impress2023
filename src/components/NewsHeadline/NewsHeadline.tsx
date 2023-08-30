'use client'
import React, { useEffect } from 'react'
import styles from './newsheadline.module.scss'
import headlineImage from './savethedate2.jpg'
import ExportedImage from 'next-image-export-optimizer'
import PhotoSwipeLightbox from 'photoswipe/lightbox'
import 'photoswipe/style.css'
import communitywinner from './2023communitywinner.jpg'

function NewsHeadline() {
    useEffect(() => {
        const lightbox = new PhotoSwipeLightbox({
            gallery: '#' + 'newsgallery',
            children: 'a',
            pswpModule: () => import('photoswipe'),
            padding: { top: 30, bottom: 30, left: 10, right: 10 },
        })
        lightbox.init()

        return () => {
            lightbox.destroy()
            //lightbox = null
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
                            className={styles.star}
                        >
                            <path d="m354-247 126-76 126 77-33-144 111-96-146-13-58-136-58 135-146 13 111 97-33 143ZM233-80l65-281L80-550l288-25 112-265 112 265 288 25-218 189 65 281-247-149L233-80Zm247-350Z" />
                        </svg>
                        {/* <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="96"
                            viewBox="0 -960 960 960"
                            width="96"
                        >
                            <path d="m480-121-41-37q-106-97-175-167.5t-110-126Q113-507 96.5-552T80-643q0-90 60.5-150.5T290-854q57 0 105.5 27t84.5 78q42-54 89-79.5T670-854q89 0 149.5 60.5T880-643q0 46-16.5 91T806-451.5q-41 55.5-110 126T521-158l-41 37Z" />
                        </svg> */}
                    </div>
                    <div className={styles.col2}>
                        <h5 className="fontMont">
                            Winner, Entrepreneur of the Year
                        </h5>
                        <p>Ward 1 Excellence Award, Mississauga 2023</p>
                    </div>
                    <div className={styles.col3} id="newsgallery">
                        <a
                            href={communitywinner.src}
                            data-pswp-width={communitywinner.width}
                            data-pswp-height={communitywinner.height}
                            key={'news1'}
                            className={styles.image}
                            target="_blank"
                            rel="noreferrer"
                        >
                            <ExportedImage
                                src={communitywinner}
                                alt="25th Anniversary Celebration"
                                width="100"
                            />
                        </a>
                    </div>
                </div>
            </section>
        </>
    )
}

export default NewsHeadline
