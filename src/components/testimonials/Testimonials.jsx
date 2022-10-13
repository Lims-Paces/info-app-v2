import React from 'react'
import './testimonial.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import agatha from '../../img/agatha.jpg'
import amazing from '../../img/amazing.jpg'
import felicia from '../../img/felicia.jpg'
import jewel from '../../img/jewel.jpg'
import joyezuoma from '../../img/joyezuoma.jpg'
import nnoma from '../../img/nnoma.jpg'
import oluchi from '../../img/oluchi.jpg'
import peace from '../../img/peace.jpg'
import pretty from '../../img/pretty.jpg'
import rebecca from '../../img/rebecca.jpg'
import joy from '../../img/joy.png'
import { Pagination } from 'swiper'
import 'swiper/css/pagination'
import { themeContext } from '../../Context'
import { useContext } from 'react'

const Testimonials = () => {
  const theme = useContext(themeContext)
  const darkMode = theme.state.darkMode
  const students = [
    {
      img: felicia,
      name: 'Mbey Felicia Uchenna',
      review:
        'I really appreciate the exposure to meet people, enlightenment on the tech space and the engagement it gave me. I am grateful to have been a part and parcel of Tech4girls. With the end in view, I started, completed and learnt Frontend Development.',
    },
    {
      img: amazing,
      name: 'Amazing KC Simon',
      review:
        'As a newbie in tech, Adesso tech4girls has helped expose my mind to the world of tech, simplifying it in the most possible way, I am ready to learn more and improve more having been given this exposure by Adesso tech4girls',
      twitter: '',
    },

    {
      img: oluchi,
      name: 'Ogbonna Jeneven Oluchi',
      review:
        'Adeso Tech4girls has really helped me in developing my skill. First, I knew nothing about tech, I had no experience at all but now I am proud to say I have really improved my skill and look forward in to learning more about web development',
      twitter: '',
    },
    {
      img: jewel,
      name: 'Jeff-Onyegbule Jewel',
      review:
        'Tech4girls did not just make me a tech sis, Adesso helped me grow socially, mentally and financially. It gave me the opportunity to observe and learn from my other colleagues; their characters, behaviors and way of thinking',
      twitter: '',
    },

    {
      img: agatha,
      name: 'Ovuoba Agatha Nneka',
      review:
        'Adesso has helped open my mind and eye to what the tech world really is. Learning on my own is now much more better. The foundation they built was really nice. I really appreciate. And to the new friends I met there, I am grateful!',
      twitter: '',
    },

    {
      img: peace,
      name: 'Peace O. Ekuma',
      review:
        'Adesso has helped my tech journey by providing a smooth and reliable mode of transition.',
      twitter: '',
    },

    {
      img: joyezuoma,
      name: 'Ozoemena Joy',
      review:
        'Adesso has helped me to seamlessly transition into tech and learn product design skill even without having prior knowledge about it.',
      twitter: '',
    },

    {
      img: rebecca,
      name: 'Chukwugozie Rebecca',
      review:
        'I embarked on my tech journey a year ago but had so many limitations as regards to funds and other mortalities. I could not enhance my tech skills till I joined Tech4girls. I now have a wider knowledge of product design and better at UI/UX',
      twitter: '',
    },

    {
      img: oluchi,
      name: 'Arua Grace Amarachi',
      review:
        'Tech4girls has helped increase my knowledge in technology. I was into tech before but did not know much but tech4girls has broadened my knowledge about it. it was worth giving a try. The fellowship has also exposed me to lot of opportunities.',
    },

    {
      img: nnoma,
      name: 'Nneoma Janet',
      review:
        'In the world of tech, I felt there was nothng for me. But Adesso happened and gave me the best exposure I can ever ask for. My tech journey has been great and sometimes depressing but I have enjoyed every bit of it. Adesso has shown me that there is hope for me once I remain consistent.',
    },

    {
      img: pretty,
      name: 'Pretty Ugwunne',
      review:
        'Adeso Tech4girls has helped me upgrade my Tech skills and gave me an opportunity to experience a tech community',
    },

    {
      img: joy,
      name: 'Joy Opeyemi Oluwafemi',
      review:
        'Tech4girls made me realise that it is fun learning in public. My tech skill has not only be enhanced but also nurtured to opportunities ',
    },
  ]

  return (
    <div className='t-wrapper' id='testimonial'>
      <div className='t-heading'>
        <span style={{ color: darkMode ? 'white' : '' }}>
          &lt; Testimonial / &gt;
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
        {students.map((student, index) => {
          return (
            <SwiperSlide key={index}>
              <div className='testimonial' id='testimonial'>
                <img src={student.img} alt='' />
                <span
                  style={{
                    fontWeight: 'bold',
                    textAlign: 'center',
                    margin: '4px 0',
                  }}
                >
                  {student.name}
                </span>
                <span
                  style={{
                    color: darkMode ? 'white' : '',
                    textAlign: 'center',
                    className: 'review',
                  }}
                >
                  {student.review}
                </span>
              </div>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </div>
  )
}

export default Testimonials
