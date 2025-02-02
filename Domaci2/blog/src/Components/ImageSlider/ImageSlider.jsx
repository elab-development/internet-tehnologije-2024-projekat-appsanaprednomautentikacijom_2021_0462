import React, { useState } from 'react'
import { MdOutlineNavigateNext } from "react-icons/md";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import { MdOutlineNavigateBefore } from "react-icons/md";
import { GoDot } from "react-icons/go";





const ImageSlider = ({slides}) => {

    const[currentIndex,setCurrentIndex]=useState(0);

    const sliderStyles={
        height: "100%",
        position: "relative",
    }
    const slideStyles = {
        width: '100%',
        height: '100%',
        borderRadius: '10px',
        backgroundPosition: "center",
        backgroundSize: "cover",
        marginTop: '20px',
        backgroundImage: `url(${slides[currentIndex].url})`}

    const leftArrowStyles={
        position: 'absolute',
        top: '50%',
        transform: 'translate(0, -50%)',
        left: '32px',
        fontSize: '45px',
        color: "#000000",
        zIndex: 1,
        cursor: "pointer"
    }
    const rightArrowStyles={
        position: 'absolute',
        top: '50%',
        transform: 'translate(0, -50%)',
        right: '32px',
        fontSize: '45px',
        color: "#000000",
        zIndex: 1,
        cursor: "pointer"
    }
    const dotsContainerStyles = {
        display: 'flex',
        justifyContent: 'center'
    }
    const dotStyles = {
        margin: '0 3px',
        cursor: 'pointer',
        fontSize: '20px'
    }

    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    }
    const goToNext = () => {
        const isLastSlide = currentIndex === slides.length -1
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    }

    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
    }

  return (
    
    <div style={sliderStyles}>
        <div style={leftArrowStyles} onClick={goToPrevious}><GrFormPrevious />
        </div>
        <div style={rightArrowStyles} onClick={goToNext}><GrFormNext />
        </div>
        <div style={slideStyles}></div>
        <div style={dotsContainerStyles}>
            {slides.map((slide,slideIndex) => (
                <div key={slideIndex} style={dotStyles} onClick={()=> goToSlide(slideIndex)}>
                    <GoDot />
                </div>
            ))}
        </div>
    </div>
  )
}

export default ImageSlider