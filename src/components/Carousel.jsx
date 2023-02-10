import React from 'react'
import Slider from 'react-animated-slider';
import horizontalCss from 'react-animated-slider/build/horizontal.css';
import alex from "../Img/alex.JPG";
import flex from "../Img/flex.JPG";
import gang from "../Img/gang.JPG";
import row from "../Img/row.JPG";
import "./Carousel.css"

const slides = [
    {  title: 'Lats Pulldowns', description: 'Back', image: <img src={alex} alt="" className='gallery'/> },
    {  title: 'Posing', description: 'Biceps', image: <img src={flex} alt="" className='gallery'/> },
    {  title: 'Community', description: 'Shared Interest', image: <img src={gang} alt="" className='gallery'/> },
    {  title: 'Back Rows', description: 'Center Back', image: <img src={row} alt="" className='gallery'/> }
];

const Carouseli = () => {
    return (
        <div>

            <Slider className="slider">
                {slides.map((slide, index) => <div key={index} >
                <h2 className='title'>{slide.title}</h2>
                    <div>{slide.image}</div>
                    <div className='description'>{slide.description}</div>
                </div>)}
            </Slider>
        </div>
    )
}

export default Carouseli
