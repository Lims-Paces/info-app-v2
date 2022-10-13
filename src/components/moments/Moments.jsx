import React from 'react'
import './moments.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import swiper1 from '../../img/swiper1.png'
import swiper2 from '../../img/swiper2.png'
import swiper3 from '../../img/swiper3.png'
import swiper4 from '../../img/swiper4.png'
import swiper5 from '../../img/swiper5.png'
import swiper6 from '../../img/swiper6.png'
import swiper7 from '../../img/swiper7.png'
import swiper8 from '../../img/swiper8.jpg'
import swiper9 from '../../img/swiper9.jpg'
import swiper10 from '../../img/swiper10.jpg'
import { Pagination } from 'swiper'
import 'swiper/css/pagination'
import { themeContext } from '../../Context'
import { useContext } from 'react'

const Moments = () => {
  const theme = useContext(themeContext)
  const darkMode = theme.state.darkMode
  const pictures = [
    {
      img: swiper1,
    },
    {
      img: swiper2,
    },

    {
      img: swiper3,
    },
    {
      img: swiper4,
    },

    {
      img: swiper5,
    },

    {
      img: swiper6,
    },
    {
      img: swiper7,
    },
    {
      img: swiper8,
    },
    {
      img: swiper9,
    },
    {
      img: swiper10,
    },
  ]

  return (
    <div className='t-wrapper' id='gallery'>
      <div className='t-heading'>
        <span style={{ color: darkMode ? 'white' : '' }}>
          &lt; Gallery / &gt;
        </span>
        <div
          className='blur t-blur1'
          style={{ background: 'rgb(212, 212, 245)', left: '38', top: '20rem' }}
        ></div>
        <div
          className='blur t-blur2'
          style={{
            backgroundColor: ' rgb(208, 238, 147)',
            left: '3rem',
            top: '10rem',
          }}
        ></div>
      </div>
      {/* slider */}
      <Swiper
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {pictures.map((picture, index) => {
          return (
            <SwiperSlide key={index}>
              <div className='moment'>
                <img src={picture.img} alt='' />
              </div>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </div>
  )
}

export default Moments
