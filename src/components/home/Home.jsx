import React from 'react'
import './home.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, A11y } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { BsArrowRight } from 'react-icons/bs'
import IMG from '../../assets/nagyban.jpg'

export default function Home() {

    return (
        <Swiper
            modules={[Navigation, Pagination, A11y]}
            spaceBetween={10}
            slidesPerView={1}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            pagination={{ clickable: true }}
            navigation={{ clickable: true }}
            loop={true}
            className="home__swiper">
            <SwiperSlide>
                <div className="home__item">
                    <img className='home__img' src={IMG} alt="" />
                    <div className="home__item--body">
                        <h2>Lorem</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                        <button className="btn btn__primary">
                            Megnézem
                            <BsArrowRight className='btn__icon' />
                        </button>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="home__item">
                    <img className='home__img' src={IMG} alt="" />
                    <div className="home__item--body">
                        <h2>Lorem</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                        <button className="btn btn__primary">
                            Megnézem
                            <BsArrowRight className='btn__icon' />
                        </button>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="home__item">
                    <img className='home__img' src={IMG} alt="" />
                    <div className="home__item--body">
                        <h2>Lorem</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                        <button className="btn btn__primary">
                            Megnézem
                            <BsArrowRight className='btn__icon' />
                        </button>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="home__item">
                    <img className='home__img' src={IMG} alt="" />
                    <div className="home__item--body">
                        <h2>Lorem</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                        <button className="btn btn__primary">
                            Megnézem
                            <BsArrowRight className='btn__icon' />
                        </button>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="home__item">
                    <img className='home__img' src={IMG} alt="" />
                    <div className="home__item--body">
                        <h2>Lorem</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                        <button className="btn btn__primary">
                            Megnézem
                            <BsArrowRight className='btn__icon' />
                        </button>
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>
    )
}