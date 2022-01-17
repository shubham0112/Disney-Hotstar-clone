import React from 'react'
import '../App.css'
import img1 from '../images_disney/tangledjfif.jfif'
import img2 from '../images_disney/moana.jfif'
import img3 from '../images_disney/simpsons.jpg'
import img4 from '../images_disney/mickey.png'

function Trending() {
    return (
        <div className='movie_container'>
            <h4>Trending</h4>
            <div className="movie_content">
                <div className="movie_wrap">
                    <img src={img1} />
                </div>
                <div className="movie_wrap">
                    <img src={img2} />
                </div>
                <div className="movie_wrap">
                    <img src={img3} />
                </div>
                <div className="movie_wrap">
                    <img src={img4} />
                </div>
            </div>
        </div>
    )
}

export default Trending