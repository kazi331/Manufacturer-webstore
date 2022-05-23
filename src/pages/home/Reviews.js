import React from "react";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards, EffectCreative } from "swiper";
import "./styles.css";
import "swiper/css/effect-creative";


const Reviews = () => {
  const reviews = [
    {name: 'Elon Mask', rating: 4.6, des: 'I haretra neque non mi aliquam, finibus hart bibendum molestie. Vestibulum suscipit sagittis dignissim mauris.', time: 2, badge: ['functionality', 'ease of use', 'perfection']},
    {name: 'John Smith', rating: 4.6, des: 'I haretra neque non mi aliquam, finibus hart bibendum molestie. Vestibulum suscipit sagittis dignissim mauris.', time: 2, badge: ['functionality', 'ease of use', 'quality']},
    {name: 'Dr. Samuel', rating: 4.6, des: 'I haretra neque non mi aliquam, finibus hart bibendum molestie. Vestibulum suscipit sagittis dignissim mauris.', time: 2, badge: ['functionality', 'ease of use', 'perfection', 'quality']},
    {name: 'Darel Jodge', rating: 4.6, des: 'I haretra neque non mi aliquam, finibus hart bibendum molestie. Vestibulum suscipit sagittis dignissim mauris.', time: 2, badge: ['functionality',  'perfection', 'quality']},
    {name: 'Donald Trump', rating: 4.6, des: 'I haretra neque non mi aliquam, finibus hart bibendum molestie. Vestibulum suscipit sagittis dignissim mauris.', time: 2, badge: ['functionality',  'perfection', 'quality']},
    {name: 'Vladimir Putin', rating: 4.6, des: 'I haretra neque non mi aliquam, finibus hart bibendum molestie. Vestibulum suscipit sagittis dignissim mauris.', time: 2, badge: ['functionality',  'perfection', 'quality']},
  ]

  return (
    <div>
      <h2 className="text-3xl text-center font-bold mt-24">
        What Our Clients Say
      </h2>
      <p className="text-center text-gray-500 mb-8 mt-2">
        Our Clients love our products
      </p>
      <div >
      <Swiper
        grabCursor={true}
        effect={"cards"}
        modules={[EffectCards]}
        
        creativeEffect={{
          prev: {
            shadow: true,
            origin: "left center",
            translate: ["-5%", 0, -200],
            rotate: [0, 100, 0],
          },
          next: {
            origin: "right center",
            translate: ["5%", 0, -200],
            rotate: [0, -100, 0],
          },
        }}
        // modules={[EffectCreative]}
        className="mySwiper max-w-3xl px-12 lg:px-24 rounded-xl p-12"
      >
        {
          reviews.map((r, i) =>  <SwiperSlide className="rounded-xl shadow-xl " key={i}><SingleReview r={r} key={i} /> </SwiperSlide>  )
        }    
        </Swiper>  
        </div>    
       
    </div>
  );
};
const SingleReview = ({r}) => {
  const starts = [1,2,3,4,5]
  return <div className="card max-w-3xl rounded-xl mx-auto shadow-xl">
  <div className="flex gap-4 flex-wrap  items-center bg-base-200 p-4">
    <div className="avatar online">
      <div className="w-12 rounded-full">
        <img
          src="https://api.lorem.space/image/face?hash=47449"
          alt=""
          />
      </div>
    </div>
    <h4>{r.name}</h4>
    <div className="rating">
      {
        starts.map((s,i)=> <input key={i}
        type="radio"
        name="rating-4"
        className="w-5 mask mask-star-2 bg-green-500"
        /> )
      }
    </div>

    
  </div>
  <div className="card-body">
   <p className="text-gray-600">
     {r.des}
    </p>
    <div className="card-actions gap-4 justify-between items-center">
      <div className="flex gap-4 flex-wrap">
       {
         r.badge.map((b, i)=> 
         <div key={i} className="badge bg-green-100 text-green-500 border-green-600 gap-1 p-3 pl-2">
         <span className="text-2xl bg-white rounded-full w-5 h-5 flex items-center justify-center">+</span>
           {b}
       </div> )
       }
        
      </div>
        <div className="text-xs text-gray-500">added 2 months ago</div>
    </div>
  </div>
</div>
}
export default Reviews;
