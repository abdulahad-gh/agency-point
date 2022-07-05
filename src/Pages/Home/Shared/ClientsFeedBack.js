import React from 'react';

const ClientsFeedBack = () => {
    return (
        <section className='lg:p-20 my-10 '>
            <h2 className='text-3xl text-center'> <span className='font-semibold'>Clients</span> <span className='text-[#7AB259]'>Feedback</span> </h2>
            <div className='lg:flex mt-20 gap-10'>
                <div className='border p-5'>
                    <div className='flex gap-3'>
                        <img className='w-[64px] h-[64px]' src="https://i.ibb.co/ftJnTKC/customer-1.png" alt="" />
                        <div>
                            <h4>Nash Patrik</h4>
                            <h5>CEO, Manpol</h5>
                        </div>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A, ab?</p>

                </div>
                <div className='border p-5'>
                    <div className='flex gap-3'>
                        <img className='w-[64px] h-[64px]' src="https://i.ibb.co/PQHPbqn/customer-2.png" alt="" />
                        <div>
                            <h4>Miriam Barron</h4>
                            <h5>CEO, Manpol</h5>
                        </div>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A, ab?</p>

                </div>
                <div className='border p-5'>
                    <div className='flex gap-3'>
                        <img className='w-[64px] h-[64px]' src="https://i.ibb.co/qBsYXxC/customer-3.png" alt="" />
                        <div>
                            <h4>Bria Malone</h4>
                            <h5>CEO, Manpol</h5>
                        </div>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A, ab?</p>

                </div>
            </div>
        </section>
    );
};

export default ClientsFeedBack;