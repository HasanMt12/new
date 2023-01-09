import React from "react";
import search from "../assets/icons8-found-24.png";
import img1 from "../assets/ILLUSTRATION.png";
import './Header.css'
const Header = () => {
  return (
    <div>
      <div className="HeaderStyle"
        style={{
          border: "2px solid blue",
          width: "25%",
          marginTop: "5%",
          
          marginLeft: " 75%",
          opacity: "0.6",
          color: "blue",
          padding: "12px",
          alignItems: "center",
          gap: "5px",
          justifyContent: "center",
          borderRadius: "5px",
        }}
      >
        <img
          style={{ marginRight: "12px", color: "blue" }}
          src={search}
          alt=""
        />
        <strong style={{ fontSize: "28px", paddingTop: "2px" }}>
          Search a Term | Topic
        </strong>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
          gap: "20px",
          fontSize: "24px",
        }}
      >
        <div style={{ width: "50%" }}>
          <p style={{ color: "blue", fontSize: "26px",margin: "3% 0%" ,opacity:'0.7', }}>
            Claim a Free Quote
          </p>
          <strong style={{ fontSize: "50px" }}>
            Get started on fulfilling your Dubai or UAE dream
          </strong>
          <p style={{ color: "blue", fontSize: "26px", margin: "3% 0%",opacity:'0.7', }}>
            UAE & Offshore Company
          </p>
          <strong style={{ fontSize: "30px", color:'gray', opacity:'0.4', marginTop:"4%"}}>
            We provide you with information about UAE or Offshore Company
            Registration & help you setup your company with a bank account and
            visas.
          </strong>
          <div style={{display:'flex', margin: '4% 0%',border:'2px solid blue', opacity:'0.6',width:'74%', borderRadius:'8px'}}>
            <div style={{background:'blue',color:'white',padding:'20px', }}>Start a Company</div>
            <div style={{padding:'20px'}}>Review a Company</div>
        </div>
        </div>
       
        <div>
          <img src={img1} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Header;
