import React from 'react'
import Slider from 'react-slick'
import '../App.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import img1 from '../images/slider-badging.jpg'
import img2 from '../images/slider-scale.jpg'
import img3 from '../images/slider-badag.jpg'
import img4 from '../images/slider-scales.jpg'

function ImgSlider() {
    let settings={
        dots:true,
        arrows:false,
        infinite:true,
        speed:500,
        slidesToShow:1,
        slidesToScroll:1,
        autoplay:true,
    }

    return (
        <div className="my-badger"> 
            <Slider {...settings} className="my-badger">
                <div>
                    <img src={img1} className='img'/>
                </div>
                <div>
                    <img src={img2} className='img'/>
                </div>
                <div>
                    <img src={img3} className='img'/>
                </div>
                <div>
                    <img src={img4} className='img'/>
                </div>
            </Slider>
        </div>
    )
}

export default ImgSlider
