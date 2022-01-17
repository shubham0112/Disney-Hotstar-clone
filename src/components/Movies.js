import React from 'react'
import '../App.css'
import img1 from '../images_disney/inside_out.jfif'
import img2 from '../images_disney/bao.jpg'
import img3 from '../images_disney/incredibles2.jfif'
import img4 from '../images_disney/auntie_edna.jpg'

function Movies() {
    return (
        <div className='movie_container'>
            <h4>Recommended For You</h4>
            <div className="movie_content">
                <div className="movie_wrap">
                    <img src={img1} alt="image" />
                </div>
                <div className="movie_wrap">
                    <img src={img2} alt="image" />
                </div>
                <div className="movie_wrap">
                    <img src={img3} alt="image" />
                </div>
                <div className="movie_wrap">
                    <img src={img4} alt="image" />
                </div>
            </div>
        </div>
    )
}

export default Movies