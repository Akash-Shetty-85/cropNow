import React from 'react'
import { ExpandableCardDemo } from './ui/ExpandableCardDemo'

const Services = () => {
  return (
    <div className='w-full !mt-4'>
      <h1 className='text-5xl font-bold text-white flex justify-center !mb-1.5'
      style={{
        fontFamily: 'Telegraf, sans-serif',
        fontWeight: 700
      }      }>
        Services
      </h1>
      <ExpandableCardDemo />
    </div>
  )
}

export default Services