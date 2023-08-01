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
                <h3 className="fontMont">What people are saying</h3>
                <div className={styles.sliderWrap}>
                    <div className={styles.sliderLeft}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 448 512"
                            width="33"
                            className={styles.quote}
                        >
                            <path d="M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64h-64c-35.3 0-64-28.7-64-64V216z" />
                        </svg>
                    </div>
                    <div className={styles.sliderCenter}>
                        <Swiper
                            spaceBetween={0}
                            slidesPerView={1}
                            loop={true}
                            autoHeight={true}
                            pagination={{
                                clickable: true,
                            }}
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
                        </Swiper>
                    </div>
                    <div className={styles.sliderRight}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 448 512"
                            width="33"
                            className={styles.quote}
                        >
                            <path d="M448 296c0 66.3-53.7 120-120 120h-8c-17.7 0-32-14.3-32-32s14.3-32 32-32h8c30.9 0 56-25.1 56-56v-8h-64c-35.3 0-64-28.7-64-64v-64c0-35.3 28.7-64 64-64h64c35.3 0 64 28.7 64 64v136zm-256 0c0 66.3-53.7 120-120 120h-8c-17.7 0-32-14.3-32-32s14.3-32 32-32h8c30.9 0 56-25.1 56-56v-8H64c-35.3 0-64-28.7-64-64v-64c0-35.3 28.7-64 64-64h64c35.3 0 64 28.7 64 64v136z" />
                        </svg>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Testimonial
