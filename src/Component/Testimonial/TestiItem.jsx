import React from 'react'
import TestiCard from './TestiCard'
import TestiData from './TestiData'
import './Testimonial.scss'

const TestiItem = () => {
  return (
    <>
     <section className='Testimonial mtop'>
        <div className='container grid1'>
          {TestiData.map((value, index) => {
            return <TestiCard key={index} {...value} />
          })}
        </div>
      </section>
    </>
  )
}

export default TestiItem