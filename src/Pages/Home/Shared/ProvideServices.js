import React from 'react';

const ProvideServices = () => {
    return (
        <section className='lg:px-20 my-10'>
            <h2 className='text-3xl text-center'> <span className='font-semibold'>provide awesome</span> <span className='text-[#7AB259]'>services</span> </h2>
            <div className='lg:flex  justify-center mt-20 gap-16'>
                <div className='text-center p-5'>
                    <img className='w-[74px] h-[74px] mx-auto' src="https://i.ibb.co/pwVf4CF/service1.png" alt="" />
                    <h4>web and mobile design</h4>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus ratione laborum maxime facere minima adipisci ducimus! Rerum possimus quod quo!</p>
                </div>
                <div className='text-center shadow-2xl rounded-md p-5'>
                    <img className='w-[74px] h-[74px] mx-auto' src="https://i.ibb.co/8mBVL2T/service2.png" alt="" />

                    <h4>Graphic design</h4>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus ratione laborum maxime facere minima adipisci ducimus! Rerum possimus quod quo!</p>
                </div>
                <div className='text-center p-5'>
                    <img className='w-[74px] h-[74px] mx-auto' src="https://i.ibb.co/S7H0znR/service3.png" alt="" />

                    <h4>web developmennt</h4>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus ratione laborum maxime facere minima adipisci ducimus! Rerum possimus quod quo!</p>
                </div>
            </div>

        </section>
    );
};

export default ProvideServices;