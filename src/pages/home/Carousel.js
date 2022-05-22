import React from "react";
import banner1 from '../../images/banner/butterfly-ssg-30122020.png';
import banner2 from '../../images/banner/led-bulb-ssg--30122020.png';
import banner3 from '../../images/banner/velvet-switch-ssg--30122020.png';
import banner4 from '../../images/banner/Website-Home-Page-tissue.png';
const Carousel = () => {
  return (
    <div>
      <div class="carousel w-full rounded-xl">
            <div id="slide1" class="carousel-item relative w-full">
                <img src={banner1} alt='' class="w-full" />
                <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide4" class="btn btn-sm hidden lg:flex bg-transparent border-primary hover:bg-primary btn-circle">❮</a> 
                <a href="#slide2" class="btn btn-sm hidden lg:flex bg-transparent border-primary hover:bg-primary btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" class="carousel-item relative w-full">
                <img src={banner2} alt='' class="w-full" />
                <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide1" class="btn btn-sm hidden lg:flex bg-transparent border-primary hover:bg-primary btn-circle">❮</a> 
                <a href="#slide3" class="btn btn-sm hidden lg:flex bg-transparent border-primary hover:bg-primary btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" class="carousel-item relative w-full">
                <img src={banner3} alt='' class="w-full" />
                <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide2" class="btn btn-sm hidden lg:flex bg-transparent border-primary hover:bg-primary btn-circle">❮</a> 
                <a href="#slide4" class="btn btn-sm hidden lg:flex bg-transparent border-primary hover:bg-primary btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" class="carousel-item relative w-full">
                <img src={banner4} alt='' class="w-full" />
                <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide3" class="btn btn-sm hidden lg:flex bg-transparent border-primary hover:bg-primary btn-circle">❮</a> 
                <a href="#slide1" class="btn btn-sm hidden lg:flex bg-transparent border-primary hover:bg-primary btn-circle">❯</a>
                </div>
            </div>
       </div>
    </div>
  );
};

export default Carousel;
