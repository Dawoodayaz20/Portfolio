import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
        <header className="md:fixed w-full md:px-[10%] py-5 flex justify-between items-center bg-yellow-100">
            <a href="#home" className="text-3xl font-bold text-[#bc6c25] font-sans">Portfolio.</a>
        <div>
        {/* Hamburger Icon (Mobile Only) */}
        <div className="lg:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Nav Items (Large Screens Only) */}
            <nav className="hidden lg:flex space-x-8 text-lg font-bold">
                <a href="#home" className="hover:text-[#dda15e] text-base md:text-lg">Home</a>
                <a href="#about" className="hover:text-[#dda15e] text-base md:text-lg">About</a>
                <a href="#edu-sect" className="hover:text-[#dda15e] text-base md:text-lg">Education</a>
                <a href="#skills" className="hover:text-[#dda15e] text-base md:text-lg">Skills</a>
                <a href="#projects" className="hover:text-[#dda15e] text-base md:text-lg">Projects</a>
                <a href="#contact" className="hover:text-[#dda15e] text-base md:text-lg">Contact</a>
            </nav>
      </div>

      {/* Dropdown Menu (Mobile Only) */}
      {isOpen && (
        <div className="md:hidden mt-4 flex flex-col gap-4 text-lg">
          <a href="#home" className="hover:text-gray-200">Home</a>
          <a href="#about" className="hover:text-gray-200">About</a>
          <a href="#education" className="hover:text-gray-200">Education</a>
          <a href="#skills" className="hover:text-gray-200">Skills</a>
          <a href="#projects" className="hover:text-gray-200">Projects</a>
          <a href="#contact" className="hover:text-gray-200">Contact</a>
        </div>
      )}
    </header>
  );
};

export default Header;
