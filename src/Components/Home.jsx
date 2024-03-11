import { React, useRef, useEffect } from 'react';
import bannerImage from '../assets/kaushik.png';
import bannerBackground from '../assets/banner_wallpaper.svg'

import Typed from "typed.js";

const Home = () => {
    const el = useRef(null);

    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ["Full Stack Developer", "Frontend Developer", "Backend Developer", "Java Developer", "Civil Engineer"],
            startDelay: 100,
            typeSpeed: 50,
            backSpeed: 10,
            backDelay: 100,
            loop: true,
        });

        return () => {
            typed.destroy();
        };
    }, []);

    return (
        <>
            <div className='main-container flex justify-center items-center bg-cover' style={{ backgroundImage: `url(${bannerBackground})` }}>
                <div className='container mx-auto flex flex-col md:flex-row justify-between items-center py-10 px-6'>
                    <div className='md:w-2/3 space-y-4 md:ms-10'>
                        <h3 className='text-3xl font-semibold text-white'>Hi, I am</h3>
                        <h1 className='text-5xl font-bold text-purple'>Kaushik Ajit Bhosale</h1>
                        <h2 className='text-2xl text-white'>I am <span className="font-bold underline" ref={el}></span></h2>
                        <p className='mt-4 text-white'>Aspiring Full Stack Developer with a solid foundation in programming and
                            a strong desire to contribute to innovative projects. Seeking an entry-level
                            position to apply and enhance my technical skills while contributing to the
                            success of a dynamic development team.</p>
                        <div className='icons-container space-x-5 flex mt-4'>
                            <a target='_blank' href='https://www.linkedin.com/in/kaushik-bhosale-728770181?original_referer=' className='hover:bg-black border cursor-pointer px-3 py-4 w-12 h-12 rounded-full flex justify-center items-center bg-blue-800'><i class="fa-brands fa-linkedin text-2xl text-white"></i></a>
                            <a target='_blank' href='https://github.com/KaushikBhosale' className='hover:bg-black border cursor-pointer px-3 py-4 w-12 h-12 rounded-full flex justify-center items-center bg-gray-700'><i class="fa-brands fa-github text-2xl text-white"></i></a>
                            {/* <a target='_blank' href='' className='hover:bg-black border cursor-pointer px-3 py-4 w-12 h-12 rounded-full flex justify-center items-center bg-green-800'><i class="fa-brands fa-hackerrank text-2xl text-white"></i></a> */}
                            {/* <a target='_blank' href='' className='hover:bg-black border cursor-pointer px-3 py-4 w-12 h-12 rounded-full flex justify-center items-center bg-blue-800'><i class="fa-brands fa-facebook text-2xl text-white"></i></a> */}
                            {/* <a target='_blank' href='' className='hover:bg-black border cursor-pointer px-3 py-4 w-12 h-12 rounded-full flex justify-center items-center bg-pink-800'><i class="fa-brands fa-instagram text-2xl text-white"></i></a> */}
                        </div>
                        <br />
                        <a className='text-lg px-4 py-2 bg-black text-white rounded-full shadow-lg inline-block mt-4' href="/">Contact Me</a>
                    </div>
                    <div className='flex justify-center mt-6 md:mt-0'>
                        <img className='rounded-full shadow-lg w-64 md:w-fit my-2' src={bannerImage} alt="Kaushik Bhosale Profile Photo" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;
