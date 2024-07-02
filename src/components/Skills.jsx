import React from 'react'

export default function Stakes() {
    return (
        <>
            <div className='md:mb-0'>
                <h1 className=' mt-7 md:mt-2  brrr text-2xl justify-center flex align-middle md:text-4xl md:justify-center ' >What i use ?</h1>
            </div>
            <div className=' pl-4 sm:grid sm:justify-center mb-4 sm:mt-4  md:flex brrr justify-center gap-3 align-middle mt-5 ' >
                <ul className='sm:text-2xl md:text-4xl grid md:gap-10 grid-cols-3 transition-all'>
                    <li className='toUp'>HTML</li>
                    <li className='toUp'>CSS</li>
                    <li className='toUp'>JavaScript</li>
                    <li className='toUp'>Tailwindcss</li>
                    <li className='toUp'>React</li>
                    <li className='toUp'>Nodejs</li>
                </ul>
            </div>
        </>
    )
}
