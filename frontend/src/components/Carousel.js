import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router-dom';
const CarouselElement = () => {
    return (
        <div className=''>
        <h1 className="title-font font-medium text-3xl mb-2 text-gray-900 text-center py-10">Our Memorial Works</h1>
        <div className='lg:grid grid-cols-3'>
        <div className='w-[500px] h-[500px] mx-auto'>
            
            <Carousel>
                
                <a href="https://www.youtube.com/watch?v=iL4nMpGvBo0" className=''>
                    <img className='' src="images/carousel1.jpg" />
                    <p className="legend">Youtuber's In Quarantine</p>
                </a>
               
                <a href="https://www.youtube.com/watch?v=oqv1-0l6ZSc" className=''>
                    <img src="images/carousel2.webp" />
                    <p className="legend">Types of Reaction</p>
                </a>
                <a href="https://www.youtube.com/watch?v=jWNRADln3ic" className=''>
                    <img src="images/carousel3.webp" />
                    <p className="legend">Kids In Quarantine</p>
                </a>
            </Carousel>
        </div>
        <div className='w-[500px] h-[500px] mx-auto'>
            
            <Carousel>
                <a href="https://www.youtube.com/watch?v=96Te7UM3wOs" className=''>
                    <img src="images/carousel4.jpg" />
                    <p className="legend">Types of People During diwali</p>
                </a>
                <a href="https://www.youtube.com/watch?v=XqB03ZqhLNE" className=''>
                    <img src="images/carousel5.webp" />
                    <p className="legend">Types Of People during Halloween</p>
                </a>
                <a href="https://www.youtube.com/watch?v=NKr9BXV7rAI" className=''>
                    <img src="images/carousel6.webp" />
                    <p className="legend">Types Of Parents</p>
                </a>
            </Carousel>
        </div>
        <div className='w-[500px] h-[500px] mx-auto'>
            
            <Carousel>
                <a href="https://www.youtube.com/watch?v=kEbYI1JRAfA" className=''>
                    <img src="images/carousel7.webp" />
                    <p className="legend">Types Of Cricket Players</p>
                </a>
                <a href="https://www.youtube.com/watch?v=kEbYI1JRAfA" className=''>
                    <img src="images/carousel8.webp" />
                    <p className="legend">Exam Preparation</p>
                </a>
                <a href="https://www.youtube.com/watch?v=R4LYOra4hps" className=''>
                    <img src="images/carousel9.webp" />
                    <p className="legend">Cororna Virus Effects on School</p>
                </a>
            </Carousel>
        </div>
        </div>
        </div>
    )
}

export default CarouselElement
