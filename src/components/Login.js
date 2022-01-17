import React from 'react';
import logo1 from '../images/cta-logo-one.svg';
import logo2 from '../images/cta-logo-two.png';
import '../App.css';

function Login() {
    return (
        <div className='login_container'>
            <div className="CTA">
                <img src={logo1} alt="image" className='CTALogoOne' />
                <a href="/" className='Signup'>GET ALL THERE</a>
                <p className="description" >Get Premier Access to Raya and the Last Dragon for an additional fee with a Disney+ subscription. As of 03/26/21, the price of Disney+ and The Disney Bundle will increase by $1.</p>
                <img src={logo2} alt="image" className='CTALogoTwo' />
            </div>
        </div>
    )
}

export default Login