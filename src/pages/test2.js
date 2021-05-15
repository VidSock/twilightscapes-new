import React from 'react'
import Layout from '../components/Layout'
// import Slider from '../components/Slider'
import { Zoom } from 'react-slideshow-image';

const Slideshow = () => {
  const images = [
    '../img/night283.jpg',
    '../img/night283.jpg',
    '../img/night283.jpg'
  ];
  
  const zoomInProperties = {
    indicators: true,
    scale: 1.4
  }
  return (
    <div>
      <Zoom {...zoomInProperties}>
        {images.map((each, index) => (
          <div key={index} style={{width: "100%"}}>
            <img style={{ objectFit: "cover", width: "100%" }} src={each} />
          </div>
        ))}
      </Zoom>
    </div>
  )
}

export default Slideshow;
