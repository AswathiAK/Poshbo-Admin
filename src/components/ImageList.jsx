import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

export default function StandardImageList({ hotel }) {

  return (
    <ImageList sx={{ width: 500, height: 230 }} cols={3} rowHeight={164}>
      {hotel?.photos?.length>0 && hotel.photos.map((photo,index) => (
        <ImageListItem key={index}>
          <img
            src={`${photo}?w=164&h=164&fit=crop&auto=format`}
            srcSet={`${photo}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            alt='photos'
            loading="lazy"
            style={{ width: '200px', height: '100px', objectFit: 'cover' }}
          />
        </ImageListItem>
      ))}
    </ImageList>
  );

}
