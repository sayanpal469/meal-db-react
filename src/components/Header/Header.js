import React from 'react';
import { Link } from 'react-router-dom';
import CustomLink from '../CustomLink/CustomLink';

const Header = () => {
    return (
        <div className='flex justify-between px-10 py-5'>
            <Link className='text-blue-500 font-sans text-3xl' to='/'>Meal Db</Link>
            <nav className='flex gap-5 text-xl'>
                <CustomLink to='/'>Home</CustomLink>
                <CustomLink to='/meals'>Foods</CustomLink>
                <CustomLink to='/details'>Details</CustomLink>
                <CustomLink to='/about'>About</CustomLink>
            </nav>
        </div>
    );
};

export default Header;