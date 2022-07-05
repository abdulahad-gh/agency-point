import React from 'react';
import Footer from './Footer';

const ContactUs = () => {
    return (
        <section className='py-10 px-4 lg:px-16 bg-[#FBD062]'>
            <div className='lg:flex justify-evenly'>
                <div className='lg:w-[390px]'>
                    <h3 className='text-2xl font-semibold'>Let us handle your <br />  project, professionally.</h3>
                    <p className='mt-4'>With well written codes, we build amazing apps for all platforms, mobile and web apps in general.</p>
                </div>
                <div>
                    <form >
                        <input type="email" placeholder="Your email address" class="input input-bordered w-full rounded-none" />
                        <input type="text" placeholder="Your name / company’s name" class="input input-bordered w-full my-2 rounded-none" />
                        <textarea type="text" placeholder="Your message" class="input input-bordered w-full rounded-none h-[300px] resize-none"></textarea>
                        <input type="submit" className='btn font-normal text-xs btn-sm bg-[#111430] px-8 mt-2' value="Send" />
                    </form>
                </div>
            </div>
            <Footer />

        </section>
    );
};

export default ContactUs;