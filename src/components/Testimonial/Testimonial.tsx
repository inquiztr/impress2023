/* eslint-disable no-console */
'use client'
import styles from './testimonial.module.scss'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation, A11y } from 'swiper/modules'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'

function Testimonial() {
    return (
        <>
            <section id="testmonial" className={styles.testimonial}>
                <h3>What people are saying</h3>
                <div className={styles.sliderWrap}>
                    <div className={styles.sliderLeft}></div>
                    <div className={styles.sliderCenter}>
                        <Swiper
                            spaceBetween={0}
                            slidesPerView={1}
                            loop={true}
                            modules={[Navigation, Pagination, A11y]}
                            onSlideChange={() => console.log('slide change')}
                            onSwiper={(swiper) => console.log(swiper)}
                        >
                            <SwiperSlide>
                                <blockquote>
                                    <p>
                                        I wander into this store last week and
                                        had the most amazing experience. I loved
                                        the items sold and the energy in the
                                        store was magical. Lydia, offered a few
                                        ideas that resonated with me and I left
                                        feeling happy with what I bought. Funny
                                        thing is I wasn&apos;t looking for any
                                        particular gifts. I would highly
                                        recommend visiting the store, you
                                        won&apos;t be disappointed.
                                    </p>
                                    <cite>
                                        Jacqueline G - 5 star Facebook review.
                                    </cite>
                                </blockquote>
                            </SwiperSlide>
                            <SwiperSlide>
                                <blockquote>
                                    <p>
                                        I almost don&apos;t want to post this
                                        because the prices are SO great!! Also
                                        lots of local products...honestly no
                                        better place to find gifts, jewelry,
                                        clothes and decor items. The owner is
                                        awesome too! 👌 One of the sweetest and
                                        honest.
                                    </p>
                                    <cite>Cathi K - 5 star Google review.</cite>
                                </blockquote>
                            </SwiperSlide>
                            <SwiperSlide>
                                <blockquote>
                                    <p>
                                        Lydia goes above and beyond to help you
                                        make the right selection(s). She&apos;s
                                        never pushy but is creative in her
                                        suggestions. She truly wants to help you
                                        get the perfect gift. And she often has
                                        new and unusual treasures!
                                    </p>
                                    <cite>
                                        John M. - 5 star Facebook review.
                                    </cite>
                                </blockquote>
                            </SwiperSlide>
                            <SwiperSlide>
                                <blockquote>
                                    <p>
                                        I'm in love with this little shop!
                                        It&apos;s a great place to find anything
                                        and everything. The owner is friendly
                                        and very sociable and I love the
                                        atmosphere. Each time I go there&apos;s
                                        always something different. The layout
                                        of the shop is cute and comfortable too.
                                        Impressionable Gifts is the place to go
                                        if you&apos;re looking for something
                                        unique and special.
                                    </p>
                                    <cite>Brooke. - 5 star Google review.</cite>
                                </blockquote>
                            </SwiperSlide>
                            <SwiperSlide>
                                <blockquote>
                                    <p>
                                        I wander into this store last week and
                                        had the most amazing experience. I loved
                                        the items sold and the energy in the
                                        store was magical. Lydia, offered a few
                                        ideas that resonated with me and I left
                                        feeling happy with what I bought. Funny
                                        thing is I wasn&apos;t looking for any
                                        particular gifts. I would highly
                                        recommend visiting the store, you
                                        won&apos;t be disappointed.
                                    </p>
                                    <cite>
                                        Jacqueline G - 5 star Facebook review.
                                    </cite>
                                </blockquote>
                            </SwiperSlide>
                            <SwiperSlide>
                                <blockquote>
                                    <p>
                                        I almost don&apos;t want to post this
                                        because the prices are SO great!! Also
                                        lots of local products...honestly no
                                        better place to find gifts, jewelry,
                                        clothes and decor items. The owner is
                                        awesome too! 👌 One of the sweetest and
                                        honest.
                                    </p>
                                    <cite>Cathi K - 5 star Google review.</cite>
                                </blockquote>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                    <div className={styles.sliderRight}></div>
                </div>
            </section>
        </>
    )
}

export default Testimonial
