import React from 'react';

const Reviews = () => {
    return (
        <div>
           <h2 className='text-3xl text-center font-bold mt-24'>What Our Clients Say</h2>
            <p className='text-center text-gray-500 mb-8 mt-2'>Our Clients love our products</p>
            <div className='p'>
                <div class="card max-w-3xl  mt-8  mx-auto bg-base-100 shadow-xl">
                    <div className="flex gap-4 flex-wrap  items-center bg-base-200 p-4">
                        <div class="avatar online">
                            <div class="w-12 rounded-full">
                                <img src="https://api.lorem.space/image/face?hash=47449" alt=''/>
                            </div>
                        </div>
                        <h4>Faustina H. Fawn</h4>
                        <div class="rating">
                            <input type="radio" name="rating-4" class="w-5 mask mask-star-2 bg-green-500" />
                            <input type="radio" name="rating-4" class="w-5 mask mask-star-2 bg-green-500"  />
                            <input type="radio" name="rating-4" class="w-5 mask mask-star-2 bg-green-500" />
                            <input type="radio" name="rating-4" class="w-5 mask mask-star-2 bg-green-500" />
                            <input type="radio" name="rating-4" class="w-5 mask mask-star-2 bg-green-500" />
                        </div>
                    </div>
                        <div class="card-body">
                            <p>I haretra neque non mi aliquam, finibus hart bibendum molestie. Vestibulum suscipit sagittis dignissim mauris.</p>
                            <div class="card-actions justify-start">
                                <div class="badge bg-green-100 text-green-500 border-green-600 gap-2 p-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 " fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4" /></svg>
                                    functionality
                                </div>
                                <div class="badge bg-green-100 text-green-500 border-green-600 gap-2 p-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 " fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4" /></svg>
                                    ease of use
                                </div>
                            </div>
                        </div>
                 </div>
             
            </div>
        </div>
    );
};

export default Reviews;