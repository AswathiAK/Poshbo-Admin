// import * as React from 'react';
// import ImageList from '@mui/material/ImageList';
// import ImageListItem from '@mui/material/ImageListItem';

// export default function StandardImageList({ hotel }) {

//   return (
//     <ImageList sx={{ width: 500, height: 230 }} cols={3} rowHeight={164}>
//       {hotel?.photos?.length>0 && hotel.photos.map((photo,index) => (
//         <ImageListItem key={index}>
//           <img
//             // src={`${photo}?w=164&h=164&fit=crop&auto=format`}
//             // srcSet={`${photo}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
//             src={photo}
//             srcSet={photo}
//             alt='photos'
//             loading="lazy"
//             style={{ width: '200px', height: '100px', objectFit: 'cover' }}
//           />
//         </ImageListItem>
//       ))}
//     </ImageList>
//   );

// }

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
        className='w-[450px] h-96 rounded-lg bg-center '
      >
      </div>
    </div>
  )
}

export default StandardImageList
