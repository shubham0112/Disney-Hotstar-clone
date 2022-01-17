import React from 'react'
import '../App.css'
import logo from '../images/logo.svg'
import home from '../images/home-icon.svg'
import search from '../images/search-icon.svg'
import watchlist from '../images/watchlist-icon.svg'
import original from '../images/original-icon.svg'
import movie from '../images/movie-icon.svg'
import series from '../images/series-icon.svg'

function Header() {
    return (
        <div className="nav">
            <img src={logo} className='logo'/>
            <div className="nav_menu">
                <a>
                    <img src={home} alt="image" />
                    <span>HOME</span>
                </a>
                <a>
                    <img src={search} alt="image" />
                    <span>SEARCH</span>
                </a>
                <a>
                    <img src={watchlist} alt="image" />
                    <span>WATCHLIST</span>
                </a>
                <a>
                    <img src={original} alt="image" />
                    <span>ORIGINALS</span>
                </a>
                <a>
                    <img src={movie} alt="image" />
                    <span>MOVIE</span>
                </a>
                <a>
                    <img src={series} alt="image" />
                    <span>SERIES</span>
                </a>
            </div>
            {/* <button className='login_btn'>LOGIN</button> */}
            <img src="https://icons-for-free.com/iconfiles/png/512/casual+male+man+person+user+icon-1320196226197493271.png" alt="user-image" className='user_image' />

        </div>
    )
}

export default Header
