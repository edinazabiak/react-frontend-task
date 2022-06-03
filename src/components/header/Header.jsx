import React, { useState } from 'react'
import './header.css'
import { BsSearch, BsPerson, BsHeart } from 'react-icons/bs'
import { AiOutlineShopping, AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import { MdOutlineScience } from 'react-icons/md'
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
                    <AiOutlineClose className='nav__mobile--hamburger-icon' onClick={() => setState(false)}/>
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
                    <a href="tel:09876543210" className='nav__item'>09 87 654 3210</a>
                    <a href="#" className='nav__item'>Kapcsolat</a>
                    <a href="#" className='nav__item'>Rólunk</a>
                    <a href="#" className='nav__item'>Fizetés, szállítás</a>
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
                        <BsHeart className='nav__item' />
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
                <MdOutlineScience className='header__advantage--icon' />
                <p>Kizárólag növényi eredetű alkotó elemek</p>
            </section>
        </header>
    )
}