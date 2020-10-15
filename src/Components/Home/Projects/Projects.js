import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import CarouselOne from '../../../images/carousel-1.png';
import CarouselTwo from '../../../images/carousel-2.png';
import CarouselThree from '../../../images/carousel-3.png';





const Projects = () => {

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      }

    const carImgStyle ={
        height:'250px',
        width:'93%',
        padding:'0 10px',
        marginBottom:'75px'
    }
    return (
        <div id="portfolio" style={{backgroundColor:'#111430',marginTop:'75px'}}>
            <h2 style={{textAlign:'center',padding:'50px', fontWeight:'bolder',color:"white"}}>Here are some of <span style={{color:'#76ac57'}}>our works</span></h2>

            <Carousel className="container"
                    arrows={false} 
                    renderButtonGroupOutside={true} 
                    draggable={false}
                    showDots={true}
                    responsive={responsive}
                    infinite={true}
                    autoPlaySpeed={1000}
                    keyBoardControl={true}
                    customTransition="all .5"
                    transitionDuration={500}
                    containerClass="carousel-container"
                    removeArrowOnDeviceType={["tablet", "mobile"]}
                    dotListClass="custom-dot-list-style"
                    itemClass="carousel-item-padding-40-px"
                    >
                        
                <div><img style={carImgStyle} src={CarouselOne} alt="" /></div>
                <div><img style={carImgStyle} src={CarouselTwo} alt=""/></div>
                <div><img style={carImgStyle} src={CarouselThree} alt=""/></div>
            </Carousel>
        </div>
    );
};

export default Projects;