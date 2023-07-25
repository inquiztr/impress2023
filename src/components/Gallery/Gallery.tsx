import styles from './gallery.module.scss'
import { fontMontserrat, fontOpen } from '../utils/fonts'
import Image from 'next/image'
import grey from '../../../public/grey.png'
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
    return (
        <>
            <section id="gallery" className={styles.galleryHeadline}>
                <div className={styles.galleryWrap}>
                    <div className={styles.col1}>
                        <h4 className={fontMontserrat.className}>Gallery</h4>
                    </div>
                    {/* <ExportedImage
                        alt="background"
                        src={grey}
                        placeholder="blur"
                        fill
                        sizes="100vw"
                        style={{
                            objectFit: 'cover',
                        }}
                    /> */}

                    <div className={styles.grid}>
                        <div className={styles.image}>
                            <ExportedImage
                                alt="store products"
                                src={aa}
                                placeholder="blur"
                                width="250"
                                height="250"
                                style={{
                                    objectFit: 'cover',
                                }}
                            />
                            <div className={styles.overlay}></div>
                        </div>
                        <div className={styles.image}>
                            <ExportedImage
                                alt="store products"
                                src={bb}
                                placeholder="blur"
                                width="250"
                                height="250"
                                style={{
                                    objectFit: 'cover',
                                }}
                            />
                            <div className={styles.overlay}></div>
                        </div>
                        <div className={styles.image}>
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
                        </div>
                        <div className={styles.image}>
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
                        </div>
                        <div className={styles.image}>
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
                        </div>
                        <div className={styles.image}>
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
                        </div>
                        <div className={styles.image}>
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
                        </div>
                        <div className={styles.image}>
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
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Gallery
