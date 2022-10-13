import React from 'react'
import './footer.css'
import footer from '../../img/footer (2).png'
import Twitter from '@iconscout/react-unicons/icons/uil-twitter'
import Insta from '@iconscout/react-unicons/icons/uil-instagram'
import Facebook from '@iconscout/react-unicons/icons/uil-facebook'

const Footer = () => {
  return (
    <div className='footer'>
      <img src={footer} alt='' style={{ width: '100%' }} />
      <div className='f-content'>
        <a href={'https://twitter.com/adesso_di'} target='blank'>
          <Twitter color='yellowgreen' size='3rem' />
        </a>
        <a
          href={'https://www.instagram.com/adessodevinitiative/'}
          target='blank'
        >
          <Insta color='yellowgreen' size='3rem' />
        </a>

        <Facebook color='yellowgreen' size='3rem' />
      </div>
    </div>
  )
}

export default Footer
