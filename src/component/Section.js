import React from 'react';
import './section.css'
import vector from '../assets/Vector-4.png'
import vector2 from '../assets/Vector-3.png'
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
                             <hr
        style={{
          background: 'lime',
          color: 'lime',
          borderColor: 'lime',
          height: '3px',
         
          justifySelf:"end"
        }}
      /> <p style={{fontWeight:"bold"}}>Muhib Abrar</p></div> 
                        </div>
                    </div>

                </div>

                <div>g</div>
            </div>
            
        </div>
    );
};

export default Section;