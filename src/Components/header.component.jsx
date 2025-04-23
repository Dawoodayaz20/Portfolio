import React from "react";

const Header = () => {
    return(
        <div className="flex fixed w-full p-5 justify-between items-center z-auto">
                    <a href="/" className="text-2xl font-serif">Portfolio.</a>
                    <nav className=''> 
                        <a href="/home" className='text-lg p-5'>Home</a>
                        <a href="/about" className='text-lg p-5'>About</a>
                        <a href="/edu-sect" className='text-lg p-5'>Education</a>
                        <a href="/projects" className='text-lg p-5'>Projects</a>
                        <a href="/contact" className='text-lg p-5'>Contact</a>
                    </nav>
                </div>
    )
}

export default Header