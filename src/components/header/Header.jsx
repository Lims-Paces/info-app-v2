import React from 'react'
import './header.css'
import Toggle from '../toggle/Toggle'
import { Link } from 'react-scroll'

const Header = () => {
  return (
    <div className='n-wrapper'>
      <div className='n-left'>
        <div className='n-logo'>Tech4girls</div>
        <Toggle />
      </div>
      <div className='n-right'>
        <div className='n-list'>
          <ul style={{ listStyleType: 'none' }}>
            <Link spy={true} to='hero' smooth='true'>
              <li>Home</li>
            </Link>
            <Link spy={true} to='testimonial' smooth='true'>
              <li>Testimonials</li>
            </Link>
            <Link spy={true} to='gallery' smooth='true'>
              <li>Gallery</li>
            </Link>
          </ul>
        </div>
        <a href='#cta' target='blank'>
          <button className='button n-button'>Register</button>
        </a>
      </div>
    </div>
  )
}

export default Header
