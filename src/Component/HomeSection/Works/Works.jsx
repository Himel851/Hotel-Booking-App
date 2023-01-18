import React from 'react'
import WorkCard from './WorkCard'
import WorkData from './WorkData'
import './Works.scss'

const Works = () => {
  return (
   <>
    <section className='popular works'>
        <div className='container'>
          <div className='heading'>
            <h1>How it Works </h1>
            <div className='line'></div>
          </div>

          <div className='content grid'>
            {WorkData.map((value, index) => {
              return <WorkCard key={index} cover={value.cover} title={value.title} desc={value.desc} />
            })}
          </div>
        </div>
      </section>
   </>
  )
}

export default Works