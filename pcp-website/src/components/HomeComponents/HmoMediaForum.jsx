import React from 'react'
import {AiTwotoneFolderOpen} from "react-icons/ai"
import "../css/HomeCss/HmoMediaForum.css"
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';


function HmoMediaForum({MediaComm}) {
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    const mouseEnter = (e) =>{
        e.target.classList.add("media-learnMore-btn-hover", "button");
    }
    const mouseLeave = (e) =>{
        e.target.classList.remove("media-learnMore-btn-hover", "button");
    }
    
    return (
        <div className='HmoMediaForum-container'>
            <div className='HMOMedia-wrapper'>
                <div className='HMO'>
                    <h1>UPDATES ON HMO'S</h1>
                    <div className='HMO-content'>
                        <div className='HMO-folder'>
                            <h2>AHMOPI</h2>
                            <div className='folder-container'>
                                <div className='folder-wrapper'>
                                    <AiTwotoneFolderOpen />
                                    <a href='#'>MOA 2021-2023</a>
                                </div>
                                <div className='folder-wrapper'>
                                    <AiTwotoneFolderOpen />
                                    <a href='#'>MOA 2021-2023</a>
                                </div>
                            </div>
                        </div>
                        <div className='HMO-folder'>
                            <h2>PAHMOC</h2>
                            <div className='folder-container'>
                                <div className='folder-wrapper'>
                                    <AiTwotoneFolderOpen />
                                    <a href='#'>MOA 2021-2023</a>
                                </div>
                                <div className='folder-wrapper'>
                                    <AiTwotoneFolderOpen />
                                    <a href='#'>MOA 2021-2023</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='Media-container'>
                    <h1>MEDIA <br/> COMMUNICATION</h1>
                        
                        <Carousel 
                            activeIndex={index} 
                            onSelect={handleSelect}
                            className='Media-Carousel'
                        >
                        {MediaComm.map((Media) => (
                            <Carousel.Item>
                                <img 
                                    src={Media.image} 
                                    alt='Philippine College of Physicians' />
                                <Carousel.Caption>
                                <a href={Media.learnMore}>
                                    <div 
                                    className="media-learnMore-btn"
                                    onMouseEnter={mouseEnter}
                                    onMouseLeave={mouseLeave} 
                                    >
                                        <button>
                                            Learn More
                                        </button>
                                    </div>
                                </a>
                                </Carousel.Caption>
                            </Carousel.Item>
                        ))}
                        </Carousel>
                </div>
            </div>
        </div>
    )
}

export default HmoMediaForum