import React from 'react'
import './hero.css'
import bg1 from '../../img/bg1.png'
import bg2 from '../../img/bg2.png'
import circle from '../../img/circle.png'
import FloatingDiv from '../floatingDiv/FloatingDiv'
import { themeContext } from '../../Context'
import { useContext } from 'react'
import { motion } from 'framer-motion'

const Hero = () => {
  const transition = { duration: 2, type: 'spring' }

  const theme = useContext(themeContext)
  const darkMode = theme.state.darkMode
  return (
    <div className='hero' id='hero'>
      <div className='i-left'>
        <div className='i-name'>
          <span style={{ color: darkMode ? 'white' : '' }}>ADESSO</span>
          <span>Tech4girls Fellowship</span>
          <span>
            Tech4Girls is a skill acquisition training program designed to
            bridge the digital knowledge divide between young boys and girls by
            training young women in underserved communities across Nigeria. Read
            what the pioneer cohort have to say about the program.
          </span>
        </div>
        <a className='btn' href='#testimonial'>
          <button className='button i-button'>Read here</button>
        </a>
      </div>
      <div className='i-right'>
        <img src={bg1} alt='' />
        <img src={bg2} alt='' />

        <motion.div
          initial={{ left: '-70%' }}
          whileInView={{ left: '-20%' }}
          transition={transition}
          style={{ top: '18rem', left: '-5rem' }}
          className='floating-div'
        >
          <FloatingDiv
            image={circle}
            txt1='Become a'
            txt2='Product Designer/Web Deveoper'
          />
        </motion.div>
        <div
          className='blur'
          style={{ backgroundColor: 'rgb(236, 226, 226)' }}
        ></div>
        <div
          className='blur'
          style={{
            backgroundColor: 'rgb(212, 212, 245)',
            top: '17rem',
            left: '-35rem',
            width: '21rem',
            height: '11rem',
          }}
        ></div>
      </div>
    </div>
  )
}

export default Hero
