import React  from "react";
import Typed from 'react-typed';

const Hero = () => {
    return (
        <div className="text-white">
            <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
                <p className="text-[#00df9a] font-[100] p-2">GROW WITH DATA ANALYTICS</p>
                <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">Grow with data.</h1>
               
                <div className="flex justify-center items-center">
                    <p className="md:text-5xl sm:text-4xl text-xl font-bold">Fast, flexible financing for</p>
                    <Typed className="text-white md:text-5xl sm:text-4xl text-xl font-bold pl-2"
                    strings={['toto', 'kpekus', 'cunt']}
                    typeSpeed={120}
                    backSpeed={140}
                    loop 
                />
 
                </div>

                <p className="text-[#fff] text-center pt-4">Na tailwind css i dey use so lidis </p>
            </div>
        </div>
    )
}

export default Hero