import React from 'react';

const Login = () => {
    return (
        <div className='lg:flex lg:flex-col  items-center justify-center h-94 lg:mt-20'>
            <img className='w-[140px] h-[40px]' src="https://i.ibb.co/X4Yb40L/logo.png" alt="" />
            <div className='border-2 text-center lg:px-12 lg:py-32 mt-6'>
                <h4 className='font-bold'>Login With</h4>
                <button className='border-2 rounded-lg  w-80 block mt-4 relative'><span className='px-1 absolute left-0'><i class="fa-brands fa-google"></i></span> Continue with google</button>
                <span className='text-xs'>Don't have an account?<button>Create an account</button></span>
            </div>
        </div>
    );
};

export default Login;