import React from 'react'
import Header from '../header/Header'
import Home from '../home/Home'
import Mosaic from '../mosaic/Mosaic'
import Items from '../items/Items'
import Highlight from '../highlight/Highlight'
import Footer from '../footer/Footer'

export default function Homepage() {
    return (
        <>
            <Header/>
            <Home/>
            <Mosaic/>
            <Items/>
            <Highlight/>
            <Footer/>
        </>
    )
}