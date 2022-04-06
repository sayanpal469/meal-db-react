import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import CustomLink from '../CustomLink/CustomLink';

const Header = () => {
    const { pathname } = useLocation()
    console.log(pathname);
    return (
        <div className='flex justify-between px-10 py-5'>
            <Link style={
                pathname.includes('details') ? {display: 'none'} : {display: 'block'}
            } className='text-blue-500 font-mono text-3xl ' to='/'>Meal Db</Link>
            <nav style={
                pathname.includes('details') ? {display: 'none'} : {display: 'flex'}
            } className='flex gap-5 text-xl font-mono'>
                <CustomLink to='/'>Home</CustomLink>
                <CustomLink to='/meals'>Foods</CustomLink>
                <CustomLink to='/about'>About</CustomLink>
            </nav>
        </div>
    );
};

export default Header;