import React from 'react'
import './items.css'
import { BsSuitHeart, BsArrowRight, BsStarFill, BsStar } from 'react-icons/bs'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Scrollbar, FreeMode, A11y } from 'swiper'
import 'swiper/css'
import 'swiper/css/scrollbar'
import "swiper/css/free-mode";
import ITEM1 from '../../assets/image 21.png'
import ITEM2 from '../../assets/image 22.png'
import ITEM3 from '../../assets/image 23.png'
import ITEM4 from '../../assets/image 24.png'

export default function Items() {

    return (
        <section className="section">
            <div className="container items__container">
                <h2 className="section__title">Akciós termékek</h2>
                <Swiper
                    modules={[Scrollbar, FreeMode, A11y]}
                    spaceBetween={30}
                    slidesPerView={"auto"}
                    freemode={true}
                    scrollbar={{ hide: true }}
                    breakpoints={{
                        1840: {
                            spaceBetween: 60
                        }
                    }}
                    className="items__swiper">
                    <SwiperSlide>
                        <div className="item__box">
                            <div className="item__header">
                                <div className="wishlist__heart">
                                    <BsSuitHeart className='wishlist__icon' />
                                </div>
                                <img src={ITEM1} alt="Kép a termékről." className='item__img' />
                            </div>
                            <div className="item__body">
                                <a href="#" className="item__title"><h4>Lorem ipsum dolor sit amet, consectetur adipiscing</h4></a>
                                <p className='item__description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore dolore magna aliqua incididunt ut.</p>
                                <div className="item__rating">
                                    <BsStarFill className='item__star item__star--full' /><BsStarFill className='item__star item__star--full' /><BsStarFill className='item__star item__star--full' /><BsStarFill className='item__star item__star--full' /><BsStar className='item__star' />
                                    <span className="item__rating--number">(12)</span>
                                </div>
                                <div className="item__pricing">
                                    <del className="price__inactive">12 300</del>
                                    <ins className="price__active">10 900</ins>
                                </div>
                                <div className="item__shop">
                                    <button className="btn btn__primary btn__item">
                                        Kosárba
                                    </button>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="item__box">
                            <div className="item__header">
                                <div className="wishlist__heart">
                                    <BsSuitHeart className='wishlist__icon' />
                                </div>
                                <img src={ITEM2} alt="Kép a termékről." className='item__img' />
                            </div>
                            <div className="item__body">
                                <a href="#" className="item__title"><h4>Lorem ipsum dolor sit amet, consectetur adipiscing</h4></a>
                                <p className='item__description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore dolore magna aliqua incididunt ut.</p>
                                <div className="item__rating">
                                    <BsStarFill className='item__star item__star--full' /><BsStarFill className='item__star item__star--full' /><BsStarFill className='item__star item__star--full' /><BsStarFill className='item__star item__star--full' /><BsStar className='item__star' />
                                    <span className="item__rating--number">(12)</span>
                                </div>
                                <div className="item__pricing">
                                    <del className="price__inactive">12 300</del>
                                    <ins className="price__active">10 900</ins>
                                </div>
                                <div className="item__shop">
                                    <button className="btn btn__primary btn__item">
                                        Kosárba
                                    </button>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="item__box">
                            <div className="item__header">
                                <div className="wishlist__heart">
                                    <BsSuitHeart className='wishlist__icon' />
                                </div>
                                <img src={ITEM3} alt="Kép a termékről." className='item__img' />
                            </div>
                            <div className="item__body">
                                <a href="#" className="item__title"><h4>Lorem ipsum dolor sit amet, consectetur adipiscing</h4></a>
                                <p className='item__description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore dolore magna aliqua incididunt ut.</p>
                                <div className="item__rating">
                                    <BsStarFill className='item__star item__star--full' /><BsStarFill className='item__star item__star--full' /><BsStarFill className='item__star item__star--full' /><BsStarFill className='item__star item__star--full' /><BsStar className='item__star' />
                                    <span className="item__rating--number">(12)</span>
                                </div>
                                <div className="item__pricing">
                                    <del className="price__inactive">12 300</del>
                                    <ins className="price__active">10 900</ins>
                                </div>
                                <div className="item__shop">
                                    <button className="btn btn__primary btn__item">
                                        Kosárba
                                    </button>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="item__box">
                            <div className="item__header">
                                <div className="wishlist__heart">
                                    <BsSuitHeart className='wishlist__icon' />
                                </div>
                                <img src={ITEM4} alt="Kép a termékről." className='item__img' />
                            </div>
                            <div className="item__body">
                                <a href="#" className="item__title"><h4>Lorem ipsum dolor sit amet, consectetur adipiscing</h4></a>
                                <p className='item__description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore dolore magna aliqua incididunt ut.</p>
                                <div className="item__rating">
                                    <BsStarFill className='item__star item__star--full' /><BsStarFill className='item__star item__star--full' /><BsStarFill className='item__star item__star--full' /><BsStarFill className='item__star item__star--full' /><BsStar className='item__star' />
                                    <span className="item__rating--number">(12)</span>
                                </div>
                                <div className="item__pricing">
                                    <del className="price__inactive">12 300</del>
                                    <ins className="price__active">10 900</ins>
                                </div>
                                <div className="item__shop">
                                    <button className="btn btn__primary btn__item">
                                        Kosárba
                                    </button>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
                <button className="btn btn__secondary">
                    Összes akciós termék
                    <BsArrowRight className='btn__icon' />
                </button>
            </div>
        </section>
    )
}