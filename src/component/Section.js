import React from 'react';
import './section.css'
import vector from '../assets/Vector-4.png'
import vector2 from '../assets/Vector-3.png'
import send from '../assets/Group 34.png'
import fb from '../assets/Vector-5.png'
import ins from '../assets/Vector-6.png'
import Linkedin from '../assets/Vector-8.png'
import Ytube from '../assets/Vector-7.png'
const Section = () => {
    return (
        <div >
            <div className='sectionContainer'>
                {/* left side */}
                <div>
                    <div style={{borderLeft:"8px solid  rgb(75, 75, 187)",}}>
                        <p style={{paddingLeft:"10px"}}>Read about our blogs for more 
                        <br></br>information on our processes</p>
                    </div>
                    <div style={{display:"flex", margin:"10px 0", alignItem:"center"}}>
                        <div className='vectorPhoto'>
                            <img src={vector} alt=''></img>
                        </div>
                        <div style={{margin:"20px"}}>
                            <p>How to start a company <br></br>formation in Dubai</p>
                            <p style={{color:" rgb(75, 75, 187)"}}>5 minute</p>
                        </div>
                    </div>

                    <div style={{display:"flex", margin:"10px 0", alignItem:"center"}}>
                        <div className='vectorPhoto'>
                            <img src={vector} alt=''></img>
                        </div>
                        <div style={{margin:"20px"}}>
                            <p>How to start a company <br></br>formation in Dubai</p>
                            <p style={{color:" rgb(75, 75, 187)"}}>5 minute</p>
                        </div>
                    </div>
                   
                    <div style={{display:"flex", margin:"10px 0", alignItem:"center", backgroundColor:"rgb(75, 75, 187)", color:"white", width:"50%", border:"1px solid rgb(75, 75, 187)", borderRadius:"5px"}}>
                        <div className='vectorPhoto'style={{marginLeft:"5px",backgroundColor:"rgb(75, 75, 187)", border
                    :"2px solid white",}}>
                            <img style={{backgroundColor:"white ",      }} src={vector} alt=''></img>
                        </div>
                        <div style={{margin:"20px"}}>
                            <p>How to start a company <br></br>formation in Dubai</p>
                            <p style={{color:"white"}}>5 minute</p>
                        </div>
                    </div>
                    <div style={{borderLeft:"8px solid  rgb(75, 75, 187)",margin:"30px 0"}}>
                        <p style={{paddingLeft:"10px"}}>Read about our blogs for more 
                        <br></br>information on our processes</p>
                    </div>
                    <div style={{display:"flex", margin:"10px 0", alignItem:"center"}}>
                        <div >
                            <img className='vectorPhoto2' style={{alignItem:"center", justify:"center"}} src={vector2} alt=''></img>
                   </div>
                        <div style={{margin:"20px"}}>
                            <p style={{fontWeight:"semibold"}}>"I am very happy with them. I’ll <br></br>
continue to use their services in <br></br>
future & highly recommend them <br></br>
to anyone,"</p>
                         <div className='n'> 
                            <p style={{fontWeight:"bold"}}>Muhib Abrar</p></div> 
                        </div>
                    </div>
                     <div style={{display:"flex", margin:"10px 0", alignItem:"center"}}>
                        <div >
                            <img className='vectorPhoto2' style={{alignItem:"center", justify:"center"}} src={vector2} alt=''></img>
                   </div>
                        <div style={{margin:"20px"}}>
                            <p style={{fontWeight:"semibold"}}>"I am very happy with them. I’ll <br></br>
continue to use their services in <br></br>
future & highly recommend them <br></br>
to anyone,"</p>
                         <div className='n'> 
                            <p style={{fontWeight:"bold"}}>Muhib Abrar</p></div> 
                        </div>
                    </div>
                     <div style={{display:"flex", margin:"10px 0", alignItem:"center"}}>
                        <div >
                            <img className='vectorPhoto2' style={{alignItem:"center", justify:"center"}} src={vector2} alt=''></img>
                   </div>
                        <div style={{margin:"20px"}}>
                            <p style={{fontWeight:"semibold"}}>"I am very happy with them. I’ll <br></br>
continue to use their services in <br></br>
future & highly recommend them <br></br>
to anyone,"</p>
                         <div className='n'> 
                            <p style={{fontWeight:"bold"}}>Muhib Abrar</p></div> 
                        </div>
                    </div>

                </div>

                <div>
                    <div style={{borderLeft:"8px solid  rgb(75, 75, 187)",}}>
                        <p style={{paddingLeft:"10px"}}>Read about our blogs for more 
                        <br></br>information on our processes</p>
                    </div>
                    <div>
                        <p style={{margin:"10px 0", fontWeight:"bold"}}>Services</p>
                        <p style={{color:"gray"}}>Products</p>
                        <p style={{color:"gray"}}>Solutions</p>
                        <p style={{color:"gray"}}>Assurance</p>
                        <p style={{color:"gray"}}>FAQ</p>
                        <p style={{color:"gray"}}>FAQ</p>
                        <p style={{color:"gray"}}>Working at Varal-Singhania</p>
                    </div>
                    <div>
                        <p style={{margin:"10px 0", fontWeight:"bold"}}>Policies</p>
                        <p style={{color:"gray"}}>Privacy Policy</p>
                        <p style={{color:"gray"}}>Terms & Conditions</p>
     
                    </div>
                    <div>
                        <p style={{margin:"10px 0", fontWeight:"bold"}}>About</p>
                        <p style={{color:"gray"}}>About Us</p>
                        <p style={{color:"gray"}}>Contact Us</p>
                       
                    </div>
                    <div>
                        <p style={{margin:"10px 0", fontWeight:"bold"}}>Address</p>
                        <p style={{color:"gray"}}>608 One Lake Plaza, Cluster T,</p>
                        <p style={{color:"gray"}}>Al Sarayat Street, Jumeirah</p>
                        <p style={{color:"gray"}}>Lake Towers</p>
                        <p style={{color:"gray"}}>Dubai</p>
                        <p style={{color:"gray", marginBottom:"20px"}}>United Arab Emirates</p>
                        <p style={{color:"gray"}}>Office Hours: Sunday to</p>
                         <p style={{color:"gray"}}>Thursday 8:30 AM to 6:30 PM</p>
                          <p style={{color:"gray"}}>[GMT+4]</p>
                           <p style={{color:"gray"}}>M: +971 55 794 2016</p>
                         <p style={{color:"gray",marginBottom:"30px"}}>O: +971 4 447 2061</p>
                    </div>
                      <div>
                        <p style={{margin:"10px 0", fontWeight:"bold"}}>Subscribe Now</p>
                        <p style={{color:"gray"}}>Sunbscribe now to receive our</p>
                        <p style={{color:"gray"}}>Newsletters about amazing</p>
                       <p style={{color:"gray",marginBottom:"20px"}}>opportunities in Dubai</p>
                    </div>
                    <div style={{display:"flex", alignItem:"center"}}>
              <input placeholder='Enter your Email' style={{padding:"10px", backgroundColor:"rgb(245, 241, 241)",borderRadius:"5px",fontWeight:"bold"}}></input><img src={send} alt=''></img>
</div>
<div style={{margin:"30px 0"}}>
    <img style={{marginLeft:"15px"}} src={fb} alt=''></img>
    <img style={{marginLeft:"15px"}} src={ins} alt=''></img>
    <img style={{marginLeft:"15px"}} src={Linkedin} alt=''></img>
    <img style={{marginLeft:"15px"}} src={Ytube} alt=''></img>

</div>
                </div>
            </div>
            <h3 style={{display:"flex",text:"center",margin:"30px 0",color:"gray", alignItems:"center", justifyContent:"center"}}>Varaluae 2021 C All Right Reserved</h3>
            
        </div>
    );
};

export default Section;