import React from 'react';
import Logo from '../assets/logo.png';
import { FaLinkedinIn, FaFacebook, FaInstagram, FaTelegram } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='flex flex-col md:flex-row gap-[50px] md:gap-0 items-top justify-between w-full lg:max-w-[1220px] mx-auto px-[16px] bg-[#2A3034] text-white rounded-none lg:rounded-[20px] font-poppins py-[20px]'>
            <div className='flex items-top w-[250px] lg:w-[400px] h-auto lg:h-[40px]'>
                <img src={Logo} alt="mobile_logo" className='w-[350px] lg:w-[200px]' />
                <span className='hidden md:block text-[12px] text-[#747C87] pl-[15px]'>All immigration advice is provided by OISC regulated partner. Ref No. F202100337</span>
            </div>
            <div className='flex items-top gap-[40px] xl:gap-[120px]'>
                <div className='flex flex-col gap-[15px]'>
                    <p>Main menu</p>
                    <Link to='' className='text-[#707882] hover:text-primary-green duration-300'>Home</Link>
                    <Link to='' className='text-[#707882] hover:text-primary-green duration-300'>Services</Link>
                    <Link to='' className='text-[#707882] hover:text-primary-green duration-300'>Blog</Link>
                    <Link to='' className='text-[#707882] hover:text-primary-green duration-300'>Contact</Link>
                </div>
                <div className='w-[180px] md:w-[203px]'>
                    <p className='mb-[6px] font-[400]'>Address</p>
                    <p className='text-[#707882]'>132-134 Lots Rd, Chelsea, London SW10 0RJ</p>
                </div>
            </div>
            <div>
                <p className='font-[400] mb-[10px]'>Follow us</p>
                <div className='flex items-center gap-[10px]'>
                    <a href="#" className='bg-[#272A2D] p-[12px] rounded-full'><FaLinkedinIn className='text-[#707882] hover:text-primary-green duration-300' /></a>
                    <a href="#" className='bg-[#272A2D] p-[12px] rounded-full'><FaFacebook className='text-[#707882] hover:text-primary-green duration-300' /></a>
                    <a href="#" className='bg-[#272A2D] p-[12px] rounded-full'><FaInstagram className='text-[#707882] hover:text-primary-green duration-300' /></a>
                    <a href="#" className='bg-[#272A2D] p-[12px] rounded-full'><FaTelegram className='text-[#707882] hover:text-primary-green duration-300' /></a>
                </div>
            </div>
        </div>
    );
};

export default Footer;