import React from 'react'
import './cta.css'
import circle from '../../img/circle.png'
import Card from '../card/Card'
import { themeContext } from '../../Context'
import { useContext } from 'react'
import { motion } from 'framer-motion'

const Cta = () => {
  const transition = { duration: 1, type: 'spring' }

  const theme = useContext(themeContext)
  const darkMode = theme.state.darkMode
  return (
    <div className='cta' id='cta'>
      <div className='register'>
        <span style={{ color: darkMode ? 'white' : '' }}>Register for</span>
        <span>The next cohort Now</span>
        <span style={{ color: darkMode ? 'white' : '' }}>
          Tech4Girls is a skill acquisition training program designed to bridge
          the digital knowledge divide
          <br />
          between young boys and girls by training young women in underserved
          communities across Nigeria
        </span>
        <a href='https://t.co/L4FNGJhu7r' target='blank'>
          <button className='button s-button'>Register</button>
        </a>

        <div
          className='blur s-blur1'
          style={{ background: 'rgb(243, 212, 217)' }}
        ></div>
      </div>
      <div className='courses'>
        <motion.div
          initial={{ left: '25rem' }}
          whileInView={{ left: '14rem' }}
          transition={transition}
          className='card'
          style={{ left: '14rem' }}
        >
          <Card emoji={circle} heading={'Learn'} detail={'Web Development'} />
        </motion.div>
        <motion.div
          initial={{ left: '-10rem' }}
          whileInView={{ left: '-4rem' }}
          transition={transition}
          style={{ top: '12rem', left: '-4rem' }}
        >
          <Card emoji={circle} heading={'Learn'} detail={'UI/UX Design'} />
        </motion.div>
        <motion.div
          initial={{ left: '20rem' }}
          whileInView={{ left: '12rem' }}
          transition={transition}
          style={{ top: '19rem', left: '12rem' }}
        >
          <Card emoji={circle} heading={'Improve'} detail={'Your Tech Skill'} />
        </motion.div>
        <div
          className='blur s-blur2'
          style={{ background: 'rgb(212, 212, 245)' }}
        ></div>
      </div>
    </div>
  )
}

export default Cta
