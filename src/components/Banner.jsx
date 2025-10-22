import React from 'react'

import heroImage from "../assets/hero.png"

function Banner() {
    return (
        <div className='size-full flex flex-col items-center justify-center'>
            <div className='flex flex-col items-center justify-center w-full font-bold text-5xl md:text-7xl text-[#001931]'>
                <h1>We Build </h1>
                <h1><span className='text-[#632EE3]'>Productive</span> Apps</h1>

            </div>
            <div className='w-full flex flex-col items-center justify-center py-5'>
                <p className='text-center text-gray-500 max-w-3xl'>
                    At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.
                    <br />
                    Our goal is to turn your ideas into digital experiences that truly make an impact.
                </p>
            </div>
            <div className="flex flex-wrap justify-center items-center gap-4 pt-6">

                <a
                    href="https://play.google.com/store/games"
                    target="_blank"

                    className="flex items-center gap-2  bg-white text-black px-5 py-3 rounded-xl hover:shadow-xl transition-transform duration-300 hover:scale-105"
                >
                    <img
                        alt="Google Play"
                        className="w-8"
                        src="https://img.icons8.com/?size=96&id=rZwnRdJyYqRi&format=png"
                    />
                    <span className="text-lg font-semibold">Google Play</span>
                </a>

                <a
                    href="https://www.apple.com/app-store/"
                    target="_blank"
                    className="flex items-center gap-2 bg-white text-black px-5 py-3 rounded-xl hover:shadow-xl transition-transform duration-300 hover:scale-105"
                >
                    <img
                        alt="App Store"
                        className="w-8"
                        src="https://img.icons8.com/?size=160&id=FY7tVsFoeON4&format=png"
                    />
                    <span className="text-lg font-semibold">App Store</span>
                </a>


                <div className='w-full flex justify-center items-center pt-10'>
                    <img src={heroImage} alt="" srcset="" />
                </div>
            </div>


        </div>
    )
}

export default Banner
