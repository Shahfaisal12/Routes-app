import React from 'react'
import Header from './Header'
import Footer from './Footer'

const Base = (props) => {
  return (
    <>
    <Header />
    <div className='mt-5'>
    {props.children}
    </div>
    <Footer />
    </>
  )
}

export default Base