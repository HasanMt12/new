import React from 'react';
import './style.css'
import navLogo from '../assets/Group 114.png'
const Navbar = () => {
    return (
        <nav className='nav' style={{display:'flex',justifyContent:'space-between', alignItems:'center'}}>
            <div><img src={navLogo} alt="" /></div>
            <div style={{display:'flex', justifyContent:'space-evenly', alignItems:'center', gap:'20px',fontSize:'24px'}}>
                
                    <a href='#Home'>Home</a>
                    <a href='#Services'>Services</a>
                    <a href='#Pricing'>Pricing</a>
                    <a href='#About'>About Us</a>
                    <a href='#Start_a_Company'><span style={{background:'blue', color:'white', padding: '18px', opacity:'0.6', borderRadius:'5px'}}>Start a Company</span></a>
                
            </div>
        </nav>
    );
};

export default Navbar;