import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'
import { rightImg, watchImg } from '../utils'
import VideoCarousel from './VideoCarouse'
import { animateWithGsap } from '../utils/animation'

const Highlights = () => {

  useGSAP(() => {
    animateWithGsap('#title', {opacity: 1, y: 0, ease: 'power2.inOut'})
    animateWithGsap('.link', {opacity: 1, y: 0, duration: 1, stagger: 0.25})

  }, [])

  return (
    <section id='highlights' className='w-screen overflow-hidden h-full common-padding bg-black'>
      <div className='screen-max-width'>
        <div className='mb-12 w-full items-end justify-between md:flex'>
          <h1 id='title' className='section-heading'>
            Get the highlights
          </h1>
          <div className='flex flex-wrap items-end gap-5'>
            <p className='link'>Watch the film
              <img src={watchImg} alt='watch' className='ml-2'/>
            </p>
            <p className='link'>Watch the event
              <img src={rightImg} alt='watch' className='mr-2'/>
            </p>
          </div>
        </div>

        <VideoCarousel/>
      </div>
    </section>
  )
}

export default Highlights