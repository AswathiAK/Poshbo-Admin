import React, { useState } from 'react'

const StandardImageList = ({ hotel }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const goToPrevious = () => {
    const isFirst = currentIndex === 0;
    const newIndex = isFirst ? hotel.photos?.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  }
  const goToNext = () => {
    const isLast = currentIndex === hotel.photos?.length-1;
    const newIndex = isLast ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  } 
  return (
    <div className='h-full relative'>   
      <div className="absolute top-1/2 left-8 -translate-y-1/2 cursor-pointer text-5xl text-red-800"
        onClick={goToPrevious}
      >
        ❰
      </div>
      <div className="absolute top-1/2 right-8 -translate-y-1/2 cursor-pointer text-5xl text-red-800"
        onClick={goToNext}
      >
        ❱
      </div>
      <div style={{ backgroundImage: `url(${hotel.photos?.[currentIndex]})`,backgroundSize:'cover' }}
        className='w-[500px] h-96 rounded-lg bg-center object-cover'
      >
      </div>
    </div>
  )
}

export default StandardImageList
