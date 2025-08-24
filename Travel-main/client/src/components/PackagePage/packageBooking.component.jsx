import React, { useState } from 'react';

function BookingPackage(props) {

  const [isActive, setIsActive] = useState(false);

  return (
      <>
        <div className=' my-6 bg-gray-100 py-2 px-3 rounded-xl flex justify-between'>
          <div className='flex items-center gap-3'>
              <img src={props.imgSrc} alt="logo" className='w-6 h-6'/>
              <div className='text-xl font-semibold'>
                  {props.explrTitle}
              </div>
          </div>

          <div className='flex gap-4 items-center'>
              <div>
                  {props.priceTitle}
                  <div className='text-right font-bold text-lg'>
                      ₹ {props.avgPrice}
                  </div>
              </div>
              <div 
              className='flex gap-1 font-semibold text-sm items-center bg-vto-400 px-3 py-2 rounded-lg text-white hover:scale-90 cursor-pointer'
              onClick={() => setIsActive(!isActive)}>
                  {isActive ? 'BOOK LATER' : 'BOOK NOW'}
              </div>
          </div>
        </div>

        {isActive && 
        <div className='my-4 flex text-align justify-center gap-6'>
          <div className='drop-shadow-xl rounded-xl bg-white py-2 px-4 text-center w-1/6'>
            <div className='text-xl font-bold'>
              {props.cardHeader1}
            </div>
            <div>
              {props.cardTitle1}
            </div>
            <div className='font-semibold'>
              {props.cardFooter1}
            </div>
            <div className='flex items-center justify-between'>
              <div className='text-vto-400 font-semibold hover:text-vto-500'>
                M
              </div>
              <div className='text-gray-400 font-semibold'>
                T
              </div>
              <div className='text-vto-400 font-semibold hover:text-vto-500'>
                W
              </div>
              <div className='text-vto-400 font-semibold hover:text-vto-500'>
                T
              </div>
              <div className='text-gray-400 font-semibold'>
                F
              </div>
              <div className='text-gray-400 font-semibold'>
                S
              </div>
              <div className='text-vto-400 font-semibold hover:text-vto-500'>
                S
              </div>
            </div>
          </div>
          <div className='drop-shadow-xl rounded-xl bg-white py-2 px-4 text-center w-1/6'>
            <div className='text-xl font-bold'>
              {props.cardHeader2}
            </div>
            <div>
              {props.cardTitle2}
            </div>
            <div className='font-semibold'>
              {props.cardFooter2}
            </div>
            <div className='flex items-center justify-between'>
              <div className='text-vto-400 font-semibold hover:text-vto-500'>
                M
              </div>
              <div className='text-gray-400 font-semibold'>
                T
              </div>
              <div className='text-vto-400 font-semibold hover:text-vto-500'>
                W
              </div>
              <div className='text-vto-400 font-semibold hover:text-vto-500'>
                T
              </div>
              <div className='text-gray-400 font-semibold'>
                F
              </div>
              <div className='text-gray-400 font-semibold'>
                S
              </div>
              <div className='text-vto-400 font-semibold hover:text-vto-500'>
                S
              </div>
            </div>
          </div>
          <div className='drop-shadow-xl rounded-xl bg-white py-2 px-4 text-center w-1/6'>
            <div className='text-xl font-bold'>
              {props.cardHeader3}
            </div>
            <div>
              {props.cardTitle3}
            </div>
            <div className='font-semibold'>
              {props.cardFooter3}
            </div>
            <div className='flex items-center justify-between'>
              <div className='text-vto-400 font-semibold hover:text-vto-500'>
                M
              </div>
              <div className='text-gray-400 font-semibold'>
                T
              </div>
              <div className='text-vto-400 font-semibold hover:text-vto-500'>
                W
              </div>
              <div className='text-vto-400 font-semibold hover:text-vto-500'>
                T
              </div>
              <div className='text-gray-400 font-semibold'>
                F
              </div>
              <div className='text-gray-400 font-semibold'>
                S
              </div>
              <div className='text-vto-400 font-semibold hover:text-vto-500'>
                S
              </div>
            </div>
          </div>
          <div className='drop-shadow-xl rounded-xl bg-white py-2 px-4 text-center w-1/6'>
            <div className='text-xl font-bold'>
              {props.cardHeader4}
            </div>
            <div>
              {props.cardTitle4}
            </div>
            <div className='font-semibold'>
              {props.cardFooter4}
            </div>
            <div className='flex items-center justify-between'>
              <div className='text-vto-400 font-semibold hover:text-vto-500'>
                M
              </div>
              <div className='text-gray-400 font-semibold'>
                T
              </div>
              <div className='text-vto-400 font-semibold hover:text-vto-500'>
                W
              </div>
              <div className='text-vto-400 font-semibold hover:text-vto-500'>
                T
              </div>
              <div className='text-gray-400 font-semibold'>
                F
              </div>
              <div className='text-gray-400 font-semibold'>
                S
              </div>
              <div className='text-vto-400 font-semibold hover:text-vto-500'>
                S
              </div>
            </div>
          </div>
        </div>
        }
        
      </>
  )
}

export default BookingPackage;