import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../css/HomeCss/PcpDOHWebinars.css';

export default function NewsEvents({ DOHWebinars }) {
  const settings = {
    accessibility: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1330,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          centerMode: true,
          centerPadding: '1px',
        }
      },
      {
        breakpoint: 990,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: '1px',
        }
      }
    ]
  };

  return (
    <div className="pcpdoh-container">
      <div className="pcpdoh-wrapper">
        <h1>PCP-DOH WEBINARS SERIES</h1>
        <Slider {...settings}>
          {DOHWebinars.map((DOHwebinar) => (
            <div className='pcpdoh-webinars' key={DOHwebinar.id}>
              <div className='pcpdoh-webinar-items'>
                    <h3>{DOHwebinar.title}</h3>
                    <a href={DOHwebinar.readMore}>
                      <button>
                        Read More
                      </button>
                    </a>
                </div>
              </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}





// import React from 'react'
// import Carousel from 'react-bootstrap/Carousel';
// import { useState } from 'react';
// import {GrNext} from 'react-icons/gr';
// import {GrPrevious} from 'react-icons/gr';
// import "../css/HomeCss/PcpDOHWebinars.css";

// function PcpDOHWebinars({DOHWebinars}) {

//     const [index, setIndex] = useState(0);
//     const handleSelect = (selectedIndex) => {
//       setIndex(selectedIndex);
//     };
  
//     //Next and Previous Icon
//     const customPrevIcon = <span className='carousel-btn pcp-doh-prev'><GrPrevious/></span>;
//     const customNextIcon = <span className='carousel-btn pcp-doh-next'><GrNext/></span>;

//   return (
//       <div className='pcp-doh-container'>
//         <div className='pcp-doh-wrapper'>
//           <h1>PCP-DOH WEBINARS SERIES</h1> 
//           <Carousel 
//             className='pcp-doh-carousel-slides'
//             activeIndex={index}
//             onSelect={handleSelect}
//             prevIcon={customPrevIcon}
//             nextIcon={customNextIcon}   
//             interval={null}
//           >
//             {DOHWebinars.map((DOHwebinar) => (
//               <Carousel.Item 
//                 className='pcp-dohcarousel-item-news'
//                 key={DOHwebinar.id}
//               > 
//                       <div className='pcp-doh-card-pcp-news'>
//                           <div className='pcp-doh-card-items-news'>
//                               <h3>{DOHwebinar.title}</h3>
//                               <a href={DOHwebinar.readMore}>
//                                 <button>
//                                   Read More
//                                 </button>
//                               </a>
//                           </div>
//                           <div className='pcp-doh-card-items-news'>
//                             <h3>{DOHwebinar.title2}</h3>
//                               <a href={DOHwebinar.readMore2}>
//                                 <button>
//                                   Read More
//                                 </button>
//                               </a>
//                           </div>
//                           <div className='pcp-doh-card-items-news'>
//                             <h3>{DOHwebinar.title3}</h3>
//                               <a href={DOHwebinar.readMore3}>
//                                 <button >
//                                   Read More
//                                 </button>
//                               </a>
//                           </div>
//                       </div>
//               </Carousel.Item>
//             ))}
//           </Carousel>
//         </div>
          
          
//       </div>
//   )
// }

// export default PcpDOHWebinars