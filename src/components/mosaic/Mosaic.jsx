import React from 'react'
import './mosaic.css'
import I1 from '../../assets/shutterstock_1667920105.png'
import I2 from '../../assets/shutterstock_1020418684.png'
import I3 from '../../assets/shutterstock_1710322954.png'
import I4 from '../../assets/shutterstock_1354457348.png'
import I5 from '../../assets/shutterstock_1377250259.png'
import I6 from '../../assets/shutterstock_1310794589.png'

export default function Mosaic() {
    const divStyle1 = {
        backgroundImage: 'url(' + I1 + ')',
        backgroundSize: 'cover',
        backgroundPosition: 'center bottom'
    };
    const divStyle2 = {
        backgroundImage: 'url(' + I2 + ')',
        backgroundSize: 'cover',
        backgroundPosition: 'center bottom'
    };
    const divStyle3 = {
        backgroundImage: 'url(' + I3 + ')',
        backgroundSize: 'cover',
        backgroundPosition: 'center bottom'
    };
    const divStyle4 = {
        backgroundImage: 'url(' + I4 + ')',
        backgroundSize: 'cover',
        backgroundPosition: 'center bottom'
    };
    const divStyle5 = {
        backgroundImage: 'url(' + I5 + ')',
        backgroundSize: 'cover',
        backgroundPosition: 'center bottom'
    };
    const divStyle6 = {
        backgroundImage: 'url(' + I6 + ')',
        backgroundSize: 'cover',
        backgroundPosition: 'center bottom'
    };

    return (
        <section className="section">
            <div className="container mosaic__container">
                <div className="mosaic__box">
                    <div className="mosaic__big" style={divStyle1}>
                        <h3 className="mosaic__title"><a href="#" className='mosaic__item'>Heading</a></h3>
                    </div>
                    <div className="mosaic__small">
                        <div className="mosaic__small--left" style={divStyle2}>
                            <h3 className="mosaic__title"><a href="#" className='mosaic__item mosaic__title--light'>Heading</a></h3>
                        </div>
                        <div className="mosaic__small--right" style={divStyle3}>
                            <h3 className="mosaic__title mosaic__title--right"><a href="#" className='mosaic__item'>Heading</a></h3>
                        </div>
                    </div>
                </div>
                <div className="mosaic__box">
                    <div className="mosaic__small">
                        <div className="mosaic__small--left" style={divStyle4}>
                            <h3 className="mosaic__title"><a href="#" className='mosaic__item'>Heading</a></h3>
                        </div>
                        <div className="mosaic__small--right" style={divStyle5}>
                            <h3 className="mosaic__title mosaic__title--right"><a href="#" className='mosaic__item mosaic__title--light'>Heading</a></h3>
                        </div>
                    </div>
                    <div className="mosaic__big" style={divStyle6}>
                        <h3 className="mosaic__title mosaic__title--right"><a href="#" className='mosaic__item'>Heading</a></h3>
                    </div>
                </div>
            </div>
        </section>
    )
}