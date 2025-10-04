'use client'
import React, { useEffect } from 'react'
import styles from './newsheadline.module.scss'
import ExportedImage from 'next-image-export-optimizer'
import PhotoSwipeLightbox from 'photoswipe/lightbox'
import 'photoswipe/style.css'
import winner from './2025communitywinner.jpg'
import diaperdrive from './2025diaperdrive.jpg'

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
                        {/* <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="96"
                            viewBox="0 -960 960 960"
                            width="96"
                            className={styles.star}
                        >
                            <path d="m387-412 35-114-92-74h114l36-112 36 112h114l-93 74 35 114-92-71-93 71ZM240-40v-309q-38-42-59-96t-21-115q0-134 93-227t227-93q134 0 227 93t93 227q0 61-21 115t-59 96v309l-240-80-240 80Zm240-280q100 0 170-70t70-170q0-100-70-170t-170-70q-100 0-170 70t-70 170q0 100 70 170t170 70ZM320-159l160-41 160 41v-124q-35 20-75.5 31.5T480-240q-44 0-84.5-11.5T320-283v124Zm160-62Z" />
                        </svg> */}
                        {/* <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="96"
                            viewBox="0 -960 960 960"
                            width="96"
                            className={styles.star}
                        >
                            <path d="m354-247 126-76 126 77-33-144 111-96-146-13-58-136-58 135-146 13 111 97-33 143ZM233-80l65-281L80-550l288-25 112-265 112 265 288 25-218 189 65 281-247-149L233-80Zm247-350Z" />
                        </svg> */}
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
                            15<sup>th</sup> Annual Diaper Drive
                            <br /> October 1<sup>st</sup> - 15<sup>th</sup>,
                            2025
                        </h5>
                        <p>
                            Help Cover the Needs of Our Community&#39;s Littlest
                            Ones
                        </p>
                    </div>
                    <div className={styles.col3} id="newsgallery">
                        <a
                            href={diaperdrive.src}
                            data-pswp-width={diaperdrive.width}
                            data-pswp-height={diaperdrive.height}
                            key={'news1'}
                            className={styles.image}
                            target="_blank"
                            rel="noreferrer"
                        >
                            <ExportedImage
                                src={diaperdrive}
                                alt="15th Annual Diaper Drive"
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
