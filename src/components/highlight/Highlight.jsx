import React from 'react'
import './highlight.css'
import { BsArrowRight } from 'react-icons/bs'

export default function Highlight() {

    return (
        <section className='container'>
            <div className="highlight__container">
                <h2>A természetes szépségért</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                <button className='btn btn__primary'>
                    Megnézem
                    <BsArrowRight className='btn__icon' />
                </button>
            </div>
        </section>
    )
}