import React, {useState} from 'react';
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { BsFillMenuButtonWideFill } from "react-icons/bs";

const Navbar = () => {

    const [nav, setNav] = useState(false);

    const handleNav = () =>{
       setNav(!nav);  
    }
    return (
        <div className='text-white flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4'>
            <h1 className='w-full text-3xl font-bold text-[#00df9a]'>infoDexter.</h1>
            <ul className=' hidden md:flex'>
                
                <li className='p-4'>Name</li>
                <li className='p-4'>Company</li>
                <li className='p-4'>Resource</li>
                <li className='p-4'>About</li>
                <li className='p-4'>Contact</li>
            </ul>
            <div onClick={handleNav} className='block md:hidden'>
                {nav ? <AiOutlineMenu size={20} className='text-[#00df9a]' /> : <AiOutlineClose className='text-[#00df9a]' size={20} />}
               
            </div>
           
            <div className={ !nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-500 bg-[#000300] ease-in-out duration-500' : 'fixed left-[-100%]'}>
            <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'>InfoDexter.</h1>
                <ul className='p-4 uppercase'>
                <li className='p-4 border-b border-grey-600'>Name</li>
                <li className='p-4 border-b border-grey-600'>Company</li>
                <li className='p-4 border-b border-grey-600'>Resource</li>
                <li className='p-4 border-b border-grey-600'>About</li>
                <li className='p-4 border-b border-grey-600'>Contact</li>
            
                </ul>
            </div>
        </div>
    )
}

export default Navbar