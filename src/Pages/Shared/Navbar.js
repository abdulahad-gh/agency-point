import React from 'react';

const Navbar = () => {
    const menuItems = <>
        <li><a href='/'>Home</a></li>
        <li><a>Our Portfolio</a></li>
        <li><a>Our Team</a></li>
        <li><a>Contact Us</a></li>
        <li>
            <a href='login' class="btn px-8 bg-[#111430] text-gray-200">Login</a>


        </li>

    </>
    return (
        <div class="navbar bg-[#FACF61] flex flex-row-reverse lg:flex-row lg:px-20">
            <div class="navbar-start">
                <div class="dropdown">
                    <label tabindex="0" class="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {
                            menuItems
                        }

                    </ul>
                </div>
                <div> <img className='w-[140px] h-[40px]' src="https://i.ibb.co/X4Yb40L/logo.png" alt="" /></div>
            </div>
            <div class="navbar-end hidden lg:flex">
                <ul class="menu menu-horizontal p-0">

                    {
                        menuItems
                    }
                </ul>

            </div>
        </div>
    );
};

export default Navbar;