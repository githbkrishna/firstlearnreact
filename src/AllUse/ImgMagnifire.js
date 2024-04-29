import React from 'react'
import ReactImageMagnify from 'react-image-magnify'
import read from '../assets/read.jpg'
import Logo from '../assets/logo.png'
import '../learn/NavigationRouter/NavRoute.css'

function ImgMagnifire() {

    function change(small) {
        
    }

  return (
    <div className=''>
      <h1 className='text-center text-xl py-2'>React</h1>

      <div className='imgmagrifire'>
        <ReactImageMagnify {...{
            smallImage: {
                alt: 'Wristwatch by Ted Baker London',
                isFluidWidth: true,
                src: read
            },
            largeImage: {
                src: read,
                width: 1200,
                height: 700
            },
            isHintEnabled:true
        }} />
      </div>
      <div className="fours w-3/6 flex justify-center gap-2 py-2">
        <img src={Logo} alt=""  className='w-3/12' />
        <img src={read} alt=""  className='w-3/12' />
        <img src={Logo} alt=""  className='w-3/12' />
        <img src={read} alt=""  className='w-3/12' />
      </div>
    </div>
  )
}

export default ImgMagnifire
