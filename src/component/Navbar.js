import React from 'react';
import './style.css'
import navLogo from '../assets/Group 114.png'
import nav from '../assets/nav.png'
const Navbar = () => {
    return (
        <div>
        <nav  style={{display:'flex',justifyContent:'space-between', alignItems:'center'}}>
            <div><img src={navLogo} alt="" /></div>
            <div className='nav__menu' >
                
                    <a href='#Home'>Home</a>
                    <a href='#Services'>Services</a>
                    <a href='#Pricing'>Pricing</a>
                    <a href='#About'>About Us</a>
                    <a href='#Start_a_Company'><span style={{background:'blue', color:'white', padding: '18px', opacity:'0.6', borderRadius:'5px'}}>Start a Company</span></a>
                
            </div>
        </nav>
        
           <button className='collaps' ><img style={{width:"50px", height:"50px"}} src={nav} alt=''></img></button> 
        </div>
    );
};

export default Navbar;