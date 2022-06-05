import React, { useState } from 'react'
import './header.css'
import { BsSearch, BsPerson, BsSuitHeart } from 'react-icons/bs'
import { AiOutlineShopping, AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import { IoIosArrowDown } from 'react-icons/io'
import { CSSTransition } from 'react-transition-group'

export default function Header() {

    const [state, setState] = useState(false)

    return (
        <header>
            <CSSTransition
                in={state === true}
                timeout={500}
                classNames="navigation__mobile"
                unmountOnExit
                onEnter={() => setState(true)}
                onExited={() => setState(false)}
            >
                <section className="navigation__mobile">
                    <AiOutlineClose className='nav__mobile--hamburger-icon' onClick={() => setState(false)} />
                    <nav className="nav__mobile">
                        <ul>
                            <li><a href="#" className='nav__item'>Arcápolás</a></li>
                            <li><a href="#" className='nav__item'>Testápolás</a></li>
                            <li><a href="#" className='nav__item'>Hajápolás</a></li>
                            <li><a href="#" className='nav__item'>Smink</a></li>
                            <li><a href="#" className='nav__item'>Bőrtípusok</a></li>
                            <li><a href="#" className='nav__item'>Újdonságok</a></li>
                            <li><a href="#" className='nav__item'>Férfiaknak</a></li>
                            <li><a href="#" className='nav__item'>Baba-mama</a></li>
                            <li><a href="#" className='nav__item'>Ajándék ötletek</a></li>
                            <li><a href="#" className='nav__item'>Márkák</a></li>
                            <li><a href="#" className='nav__item'>Akció</a></li>
                            <li><a href="#" className='nav__item'>Kapcsolat</a></li>
                            <li><a href="#" className='nav__item'>Rólunk</a></li>
                            <li><a href="#" className='nav__item'>Fizetés, szállítás</a></li>
                        </ul>
                    </nav>
                    <p className='nav__mobile--text'>4028 Debrecen, Kassai út 129</p>
                    <p className='nav__mobile--text'><a href='emailto:info@shoprenter.hu'>info@shoprenter.hu</a></p>
                    <p className='nav__mobile--text'><a href='tel:+36-1/234-5012'>+36-1/234-5012</a></p>
                    <p className='nav__mobile--text'>Nyitvatartás: h-p 9-17</p>
                </section>
            </CSSTransition>
            <section className="header__top">
                <div className="header__left-side">
                    <div>
                        <a href="tel:09876543210" className='nav__item'>09 87 654 3210</a>
                    </div>
                    <div>
                        <a href="#" className='nav__item'>Kapcsolat</a>
                        <a href="#" className='nav__item'>Rólunk</a>
                        <a href="#" className='nav__item'>
                            Fizetés, szállítás <IoIosArrowDown /></a>
                    </div>
                </div>
                <div className="header__center">
                    <AiOutlineMenu className='nav__mobile--hamburger-icon' onClick={() => setState(true)} />
                    <h1><span>Teszt</span>téma</h1>
                </div>
                <div className="header__right-side">
                    <div className="header__search">
                        <input type="search" placeholder='keresés...' className="input__search" />
                        <button className="btn btn__line"><BsSearch className='input__icon' /></button>
                    </div>
                    <div className="header__icons">
                        <BsPerson className='nav__item' />
                        <BsSuitHeart className='nav__item' />
                        <AiOutlineShopping className='nav__item' />
                    </div>
                </div>
            </section>
            <section className="navigation__desktop">
                <nav className="nav__desktop">
                    <ul>
                        <li><a href="#" className='nav__item'>Arcápolás</a></li>
                        <li><a href="#" className='nav__item'>Testápolás</a></li>
                        <li><a href="#" className='nav__item'>Hajápolás</a></li>
                        <li><a href="#" className='nav__item'>Smink</a></li>
                        <li><a href="#" className='nav__item'>Bőrtípusok</a></li>
                        <li><a href="#" className='nav__item'>Újdonságok</a></li>
                        <li><a href="#" className='nav__item'>Férfiaknak</a></li>
                        <li><a href="#" className='nav__item'>Baba-mama</a></li>
                        <li><a href="#" className='nav__item'>Ajándék ötletek</a></li>
                        <li><a href="#" className='nav__item'>Márkák</a></li>
                        <li><a href="#" className='nav__item'>Akció</a></li>
                    </ul>
                </nav>
            </section>
            <section className="header__advantage">
                <svg className='header__advantage--icon' width="23" height="26" viewBox="0 0 23 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.9876 9.05517C14.8441 8.82566 14.7688 8.56028 14.7688 8.28773V1.43448H15.1633C15.5578 1.43448 15.8805 1.11172 15.8805 0.717241C15.8805 0.322759 15.5578 0 15.1633 0H7.48165C7.08717 0 6.76441 0.322759 6.76441 0.717241C6.76441 1.11172 7.08717 1.43448 7.48165 1.43448H7.87613V8.28773C7.87613 8.56028 7.80082 8.82566 7.65737 9.05517L0.535167 20.592C-0.149799 21.7001 -0.178488 23.045 0.456271 24.1818C1.09103 25.3186 2.24937 26 3.55117 26H19.0866C20.392 26 21.5468 25.3186 22.1815 24.1818C22.8163 23.0414 22.7876 21.7001 22.1026 20.592L14.9876 9.05517ZM8.88027 9.80828C9.16358 9.34924 9.31062 8.82566 9.31062 8.28773V1.43448H13.3343V8.28773C13.3343 8.82566 13.485 9.35283 13.7647 9.80828L16.3575 14.0077H6.28744L8.88027 9.80828ZM20.9335 23.4825C20.557 24.1603 19.8648 24.5655 19.0902 24.5655H3.55475C2.77655 24.5655 2.08799 24.1603 1.71144 23.4825C1.33489 22.8047 1.34924 22.005 1.75806 21.3451L5.40165 15.4422H17.2433L20.8869 21.3451C21.2957 22.005 21.3137 22.8047 20.9335 23.4825Z" />
                    <path d="M11.5161 13.3192C12.5239 13.3192 13.3451 12.4979 13.3451 11.4902C13.3451 10.4825 12.5239 9.66124 11.5161 9.66124C10.5084 9.66124 9.68717 10.4825 9.68717 11.4902C9.68717 12.4979 10.5048 13.3192 11.5161 13.3192ZM11.5161 11.0921C11.7349 11.0921 11.9106 11.2679 11.9106 11.4866C11.9106 11.7054 11.7349 11.8811 11.5161 11.8811C11.2974 11.8811 11.1216 11.7054 11.1216 11.4866C11.1216 11.2679 11.2974 11.0921 11.5161 11.0921Z" />
                    <path d="M8.99862 16.1953C7.76855 16.1953 6.76441 17.1959 6.76441 18.4295C6.76441 19.6632 7.76496 20.6637 8.99862 20.6637C10.2323 20.6637 11.2328 19.6632 11.2328 18.4295C11.2328 17.1959 10.2287 16.1953 8.99862 16.1953ZM8.99862 19.2257C8.55751 19.2257 8.19889 18.867 8.19889 18.4259C8.19889 17.9848 8.55751 17.6262 8.99862 17.6262C9.43972 17.6262 9.79834 17.9848 9.79834 18.4259C9.79834 18.867 9.43972 19.2257 8.99862 19.2257Z" />
                    <path d="M14.0516 20.0361C12.9327 20.0361 12.0182 20.947 12.0182 22.0695C12.0182 23.1884 12.9291 24.0993 14.0516 24.0993C15.1705 24.0993 16.0814 23.1884 16.0814 22.0695C16.085 20.947 15.1705 20.0361 14.0516 20.0361ZM14.0516 22.6648C13.7217 22.6648 13.4527 22.3959 13.4527 22.0695C13.4527 21.7432 13.7217 21.4706 14.0516 21.4706C14.3815 21.4706 14.6469 21.7396 14.6469 22.0695C14.6469 22.3994 14.3815 22.6648 14.0516 22.6648Z" />
                </svg>
                <p>Kizárólag növényi eredetű alkotó elemek</p>
            </section>
        </header>
    )
}