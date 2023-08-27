'use client'
import React, { useEffect } from 'react'
import styles from './gallery.module.scss'
import PhotoSwipeLightbox from 'photoswipe/lightbox'
import 'photoswipe/style.css'
//import grey from '../../../public/grey.png'
import aa from './june02.jpg'
import bb from './june03.jpg'
import cc from './june04.jpg'
import dd from './june05.jpg'
import ee from './june06.jpg'
import ff from './june07.jpg'
import gg from './june08.jpg'
import hh from './june09.jpg'
import ExportedImage from 'next-image-export-optimizer'

function Gallery() {
    useEffect(() => {
        let lightbox = new PhotoSwipeLightbox({
            gallery: '#' + 'aaa',
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
            <section id="gallery" className={styles.galleryHeadline}>
                <div className={styles.galleryWrap}>
                    <div className={styles.col1}>
                        <h4 className="fontMont"> Gallery</h4>
                    </div>

                    <div className={styles.grid} id="aaa">
                        <a
                            href={aa.src}
                            data-pswp-width={aa.width}
                            data-pswp-height={aa.height}
                            key={'g1'}
                            className={styles.image}
                            target="_blank"
                            rel="noreferrer"
                        >
                            <ExportedImage
                                alt="store products 1"
                                src={aa}
                                placeholder="blur"
                                width="250"
                                height="250"
                                style={{
                                    objectFit: 'cover',
                                }}
                            />
                            <div className={styles.overlay}></div>
                        </a>
                        <a
                            href={bb.src}
                            data-pswp-width={bb.width}
                            data-pswp-height={bb.height}
                            key={'g2'}
                            target="_blank"
                            rel="noreferrer"
                            className={styles.image}
                        >
                            <ExportedImage
                                alt="store products 2"
                                src={bb}
                                placeholder="blur"
                                width="250"
                                height="250"
                                style={{
                                    objectFit: 'cover',
                                }}
                            />
                            <div className={styles.overlay}></div>
                        </a>
                        <a
                            className={styles.image}
                            href={cc.src}
                            data-pswp-width={cc.width}
                            data-pswp-height={cc.height}
                            key={'g3'}
                            target="_blank"
                            rel="noreferrer"
                        >
                            <ExportedImage
                                alt="store products"
                                src={cc}
                                placeholder="blur"
                                width="250"
                                height="250"
                                style={{
                                    objectFit: 'cover',
                                }}
                            />
                            <div className={styles.overlay}></div>
                        </a>
                        <a
                            href={dd.src}
                            data-pswp-width={dd.width}
                            data-pswp-height={dd.height}
                            key={'g4'}
                            target="_blank"
                            rel="noreferrer"
                            className={styles.image}
                        >
                            <ExportedImage
                                alt="store products"
                                src={dd}
                                placeholder="blur"
                                width="250"
                                height="250"
                                style={{
                                    objectFit: 'cover',
                                }}
                            />
                            <div className={styles.overlay}></div>
                        </a>
                        <a
                            href={ee.src}
                            data-pswp-width={ee.width}
                            data-pswp-height={ee.height}
                            key={'g5'}
                            target="_blank"
                            rel="noreferrer"
                            className={styles.image}
                        >
                            <ExportedImage
                                alt="store products"
                                src={ee}
                                placeholder="blur"
                                width="250"
                                height="250"
                                style={{
                                    objectFit: 'cover',
                                }}
                            />
                            <div className={styles.overlay}></div>
                        </a>
                        <a
                            href={ff.src}
                            data-pswp-width={ff.width}
                            data-pswp-height={ff.height}
                            key={'g6'}
                            target="_blank"
                            rel="noreferrer"
                            className={styles.image}
                        >
                            <ExportedImage
                                alt="store products"
                                src={ff}
                                placeholder="blur"
                                width="250"
                                height="250"
                                style={{
                                    objectFit: 'cover',
                                }}
                            />
                            <div className={styles.overlay}></div>
                        </a>
                        <a
                            href={gg.src}
                            data-pswp-width={gg.width}
                            data-pswp-height={gg.height}
                            key={'g7'}
                            target="_blank"
                            rel="noreferrer"
                            className={styles.image}
                        >
                            <ExportedImage
                                alt="store products"
                                src={gg}
                                placeholder="blur"
                                width="250"
                                height="250"
                                style={{
                                    objectFit: 'cover',
                                }}
                            />
                            <div className={styles.overlay}></div>
                        </a>
                        <a
                            href={hh.src}
                            data-pswp-width={hh.width}
                            data-pswp-height={hh.height}
                            key={'g8'}
                            target="_blank"
                            rel="noreferrer"
                            className={styles.image}
                        >
                            <ExportedImage
                                alt="store products"
                                src={hh}
                                placeholder="blur"
                                width="250"
                                height="250"
                                style={{
                                    objectFit: 'cover',
                                }}
                            />
                            <div className={styles.overlay}></div>
                        </a>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Gallery
