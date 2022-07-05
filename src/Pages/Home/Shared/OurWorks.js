import React from 'react';

const OurWorks = () => {
    return (
        <section className='lg:p-20 my-10 bg-[#111430]'>
            <h2 className='text-3xl text-center text-white'> <span className='font-semibold'>Here are some of our</span> <span className='text-[#7AB259]'>works</span> </h2>

            <div class="carousel carousel-center mt-10 lg:w-full  p-4 space-x-4 bg-neutral rounded-box">

                <div id='slide1' class="carousel-item">
                    <img className='w-[465px] h-[334px] rounded-box' src="https://i.ibb.co/RTk1vVX/carousel-1.png" />
                </div>
                <div class="carousel-item">
                    <img className='w-[465px] h-[334px] rounded-box' src="https://i.ibb.co/k9j1v12/carousel-2.png" />
                </div>
                <div class="carousel-item">
                    <img className='w-[465px] h-[334px] rounded-box' src="https://i.ibb.co/G7JB4jK/carousel-3.png" />
                </div>
                <div class="carousel-item">
                    <img className='w-[465px] h-[334px] rounded-box' src="https://i.ibb.co/VMWqC5Z/carousel-4.png" />
                </div>
                <div id='slide4' class="carousel-item">
                    <img className='w-[465px] h-[334px] rounded-box' src="https://i.ibb.co/cF9Yy5z/carousel-5.png" />
                </div>


            </div>
            <div className='flex justify-center gap-2 mt-2'>
                <a href="#slide4" class="btn btn-circle">❮</a>
                <a href="#slide1" class="btn btn-circle">❯</a>
            </div>

        </section>
    );
};

export default OurWorks;