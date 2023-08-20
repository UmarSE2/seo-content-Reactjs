'use client'
import React from 'react';

const AboutMe = () => {
    const handleDownloadResume = () => {
        const link = document.createElement('a');
        link.href = '/resume.pdf';
        link.download = 'MyResume.pdf';
        link.click();
    };

    return (
        <>
            <div className='flex md:flex-row flex-col w-full items-center justify-center py-10'>
                <div className='w-full items-center flex justify-center'>
                    <img src={"/woman-library.jpg"} alt='image' className='w-80 h-96' />
                </div>
                <div className='w-full flex flex-col lg:items-start items-center lg:text-left text-center'>
                    <h2 className='text-myGreen font-semibold py-2 text-lg pt-10 md:pt-0'>About Me</h2>
                    <h1 className='text-white font-bold text-3xl font-serif py-2 lg:w-[75%] sm:w-[80%] w-full leading-10'>
                        I Provide the Best Content <span className='text-myGreen'>Writing</span> Service</h1>
                    <p className='text-textGrey pt-4 lg:w-[75%] sm:w-[80%] w-full'>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                        standard dummy text ever since the 1500s
                    </p>
                    <button onClick={handleDownloadResume}
                        className='bg-myGreen w-36 tracking-wide text-greenGrey rounded-sm font-bold text-base px-2 py-2 mt-10'>
                        My Resume
                    </button>
                </div>
            </div>
            <hr className='w-full border-mySkyBlue border-1.5 mt-10' />
        </>
    );
}

export default AboutMe;