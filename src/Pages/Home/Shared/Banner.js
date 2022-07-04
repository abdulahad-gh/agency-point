import React from 'react';
import './Banner.css'

const Banner = () => {

    return (
        <div>
            <div className='w-full h-[453px] lg:py-8' style={{ backgroundColor: '#FACF61' }} >
                <div className='lg:flex lg:px-20  items-center'>
                    <div className='flex-1 '>
                        <div className='w-[397px]'>
                            <h1 className='text-[48px] text-[#111430] font-bold leading-tight'>Let's Grow Your Brand To The Next Level.</h1>
                            <p className='my-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita magnam repellendus, culpa reiciendis qui explicabo placeat labore eveniet aliquam rem?</p>
                            <a className='btn bg-[#111430] px-10' href="https://linkedin.com">Hire Us</a>
                        </div>
                    </div>
                    <div className='flex-0 '>

                        {/* <img src="../../../Assets/Images/Frame.png" alt="frame" /> */}
                        <img className='w-[625px] h-[422px]' src="https://i.ibb.co/RCLCDmr/Frame.png" alt="frame" />
                    </div>
                </div>
                {/* <div id='banner' className='overflow-hidden'>

            </div> */}
            </div>

            <div className='flex gap-12 justify-center items-center h-[200px]'>
                <img className='w-[140px] h-[40px]' src="https://i.ibb.co/3pCQXh9/slack.png" alt="" />
                <img className='w-[129px] h-[44px]' src="https://i.ibb.co/qprCzp2/google.png" alt="" />
                <img className='w-[99px] h-[56px]' src="https://i.ibb.co/gdZC9NJ/uber.png" alt="" />
                <img className='w-[120px] h-[67 px]' src="https://i.ibb.co/VmSYKF6/netflix.png" alt="" />
                <img className='w-[160px] h-[50px]' src="https://i.ibb.co/LYSB1dQ/airbnb.png" alt="" />
            </div>
        </div>
    );
};

export default Banner;