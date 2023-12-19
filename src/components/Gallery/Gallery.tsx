'use client'
import React, { useEffect } from 'react'
import styles from './gallery.module.scss'
import PhotoSwipeLightbox from 'photoswipe/lightbox'
import 'photoswipe/style.css'

import aaa from './dec01.jpg'
import bbb from './dec02.jpg'
import ccc from './dec03.jpg'
import ddd from './dec04.jpg'
import eee from './dec05.jpg'
import fff from './dec06.jpg'
import ggg from './dec07.jpg'
import hhh from './dec08.jpg'
import ExportedImage from 'next-image-export-optimizer'

function Gallery() {
    useEffect(() => {
        const lightbox = new PhotoSwipeLightbox({
            gallery: '#' + 'aaa',
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
            <section id="gallery" className={styles.galleryHeadline}>
                <div className={styles.galleryWrap}>
                    <div className={styles.col1}>
                        <h4 className="fontMont"> Gallery</h4>
                    </div>

                    <div className={styles.grid} id="aaa">
                        <a
                            href={aaa.src}
                            data-pswp-width={aaa.width}
                            data-pswp-height={aaa.height}
                            key={'g1'}
                            className={styles.image}
                            target="_blank"
                            rel="noreferrer"
                        >
                            <ExportedImage
                                alt="store products 1"
                                src={aaa}
                                placeholder="blur"
                                width="250"
                                height="250"
                                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                                style={{
                                    objectFit: 'cover',
                                }}
                            />
                            <div className={styles.overlay}></div>
                        </a>
                        <a
                            href={bbb.src}
                            data-pswp-width={bbb.width}
                            data-pswp-height={bbb.height}
                            key={'g2'}
                            target="_blank"
                            rel="noreferrer"
                            className={styles.image}
                        >
                            <ExportedImage
                                alt="store products 2"
                                src={bbb}
                                placeholder="blur"
                                width="250"
                                height="250"
                                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                                style={{
                                    objectFit: 'cover',
                                }}
                            />
                            <div className={styles.overlay}></div>
                        </a>
                        <a
                            className={styles.image}
                            href={ccc.src}
                            data-pswp-width={ccc.width}
                            data-pswp-height={ccc.height}
                            key={'g3'}
                            target="_blank"
                            rel="noreferrer"
                        >
                            <ExportedImage
                                alt="store products"
                                src={ccc}
                                placeholder="blur"
                                width="250"
                                height="250"
                                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                                style={{
                                    objectFit: 'cover',
                                }}
                            />
                            <div className={styles.overlay}></div>
                        </a>
                        <a
                            href={ddd.src}
                            data-pswp-width={ddd.width}
                            data-pswp-height={ddd.height}
                            key={'g4'}
                            target="_blank"
                            rel="noreferrer"
                            className={styles.image}
                        >
                            <ExportedImage
                                alt="store products"
                                src={ddd}
                                placeholder="blur"
                                width="250"
                                height="250"
                                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                                style={{
                                    objectFit: 'cover',
                                }}
                            />
                            <div className={styles.overlay}></div>
                        </a>
                        <a
                            href={eee.src}
                            data-pswp-width={eee.width}
                            data-pswp-height={eee.height}
                            key={'g5'}
                            target="_blank"
                            rel="noreferrer"
                            className={styles.image}
                        >
                            <ExportedImage
                                alt="store products"
                                src={eee}
                                placeholder="blur"
                                width="250"
                                height="250"
                                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                                style={{
                                    objectFit: 'cover',
                                }}
                            />
                            <div className={styles.overlay}></div>
                        </a>
                        <a
                            href={fff.src}
                            data-pswp-width={fff.width}
                            data-pswp-height={fff.height}
                            key={'g6'}
                            target="_blank"
                            rel="noreferrer"
                            className={styles.image}
                        >
                            <ExportedImage
                                alt="store products"
                                src={fff}
                                placeholder="blur"
                                width="250"
                                height="250"
                                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                                style={{
                                    objectFit: 'cover',
                                }}
                            />
                            <div className={styles.overlay}></div>
                        </a>
                        <a
                            href={ggg.src}
                            data-pswp-width={ggg.width}
                            data-pswp-height={ggg.height}
                            key={'g7'}
                            target="_blank"
                            rel="noreferrer"
                            className={styles.image}
                        >
                            <ExportedImage
                                alt="store products"
                                src={ggg}
                                placeholder="blur"
                                width="250"
                                height="250"
                                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                                style={{
                                    objectFit: 'cover',
                                }}
                            />
                            <div className={styles.overlay}></div>
                        </a>
                        <a
                            href={hhh.src}
                            data-pswp-width={hhh.width}
                            data-pswp-height={hhh.height}
                            key={'g8'}
                            target="_blank"
                            rel="noreferrer"
                            className={styles.image}
                        >
                            <ExportedImage
                                alt="store products"
                                src={hhh}
                                placeholder="blur"
                                width="250"
                                height="250"
                                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
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
