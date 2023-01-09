import React from "react";
import Play from "../assets/Group 117.png";
import img1 from "../assets/dungeon.png";
import img2 from "../assets/Vector-2.png";
import img3 from "../assets/Vector-1.png";
import img4 from "../assets/ILLUSTRATION-03.png";
import img5 from "../assets/Group.png";
import img6 from "../assets/Group-2.png";
import img7 from "../assets/Group-1.png";
import img8 from "../assets/Vector.png";
import './Design.css'
const Design = () => {
  return (
    <section>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "10px",
          margin: "3% 0%",
        }}
      >
        <div
          style={{
            textAlign: "center",
            fontSize: "25px",
            color: "blue",
            opacity: "0.9",
          }}
        >
          {" "}
          <p>Watch the video about UAE or Offshore Company Registration</p>
        </div>
        <div
          style={{
            border: "2px solid blue",
            borderRadius: "50%",
            padding: "5px",
          }}
        >
          {" "}
          <img src={Play} alt="Play" />
        </div>
      </div>
      <div  style={{ textAlign: "center", margin: "3% auto", width: "50%" }}>
        <strong style={{ fontSize: "35px" }}>
          Dedicated <br />
          to our mission we are
        </strong>
        <p className="mission"
        >
          Our services include Company Formation & Renewals, Trust & Fiduciary,
          Tax Residency Setup With Family, Bank Accounts, Remote Management,
          Stock Trading Platforms, Ownership Solutions
        </p>
      </div>
      <div className="blogContainer"
        // style={{
        //   display: "grid",
        //   gridTemplateColumns: " repeat(3, 400px)",
        //   columnGap: " 10%",
        //   gap: "10%",
        //   margin: "10% auto",
        // }}
      > 
      
      
<div className="singleBlog">
          <div style={{ margin: "3% 0%" }}>
            <img src={img1} alt="" />
          </div>
          <h2>UAE Free Zone Company</h2>
          <p 
            style={{
              color: "gray",
              fontSize: "22px",
              opacity: "0.99",
              margin: "2% 0%",
            }}
          >
            Your registration agent, will answer all of your questions and help
            you to reach a conclusion that meets your objectives of investing in
            the UAE.
          </p>
          <h2 style={{ color: "orange", opacity: "0.7" }}>Get Started</h2>
        </div>
        <div className="singleBlog">
         <div style={{ margin: "3% 0%" }}>
            <img src={img2} alt="" />
          </div>
          <h2>UAE Free Zone Company</h2>
          <p
            style={{
              color: "gray",
              fontSize: "22px",
              opacity: "0.99",
              margin: "2% 0%",
            }}
          >
            Your registration agent, will answer all of your questions and help
            you to reach a conclusion that meets your objectives of investing in
            the UAE.
          </p>
          <h2 style={{ color: "orange", opacity: "0.7" }}>Get Started</h2>
        </div>
        <div className="singleBlog">
          <div style={{ margin: "3% 0%" }}>
            <img src={img3} alt="" />
          </div>
          <h2>UAE Free Zone Company</h2>
          <p
            style={{
              color: "gray",
              fontSize: "22px",
              opacity: "0.99",
              margin: "2% 0%",
            }}
          >
            Your registration agent, will answer all of your questions and help
            you to reach a conclusion that meets your objectives of investing in
            the UAE.
          </p>
          <h2 style={{ color: "orange", opacity: "0.7" }}>Get Started</h2>
        </div>

      </div>
        
      
      {/* design */}
      <div style={{ width: "91%", margin: "auto",display:'flex', gap:'20px' }}>
        <div>
          <p style={{ fontWeight: "30px", fontSize: "30px", margin: "2% 0%" }}>
            Learn the ways in which you can benefit from a UAE/Offshore Company.
            Then get started on fulfilling your UAE dream.
          </p>
          <span
            style={{
              color: "blue",
              fontSize: "26px",
              margin: "1% 0%",
              opacity: "0.7",
            }}
          >
            Claim a Free Quote
          </span>

          <div>
 <div
            style={{
              border: "2px solid gray",
              padding: "10px",
              borderRadius: "10px",
              width: "60%",
              margin: "3% 0%",
            }}
          >
            <div style={{ width: "60%", margin: "12% auto" }}>
              <img src={img4} alt="" />
            </div>
            <div style={{ width: "87%", margin: "auto" }}>
              <h1 style={{}}>Bank Account Setup</h1>
              <p style={{ color: "gray", fontSize: "24px", margin: "3% 0%" }}>
                There are many banks in the United Arab Emirates [UAE]. Both
                locally owned and branches of multinational ones. Foreign banks
                adjust according to their parent s strategies and have changed
                local requirements overnight in the past. But we are here to
                help you
              </p>
              <div
                style={{
                  display: "flex",
                  justifyContent: "start",
                  alignItems: "center",
                  gap: "16px",
                }}
              >
                {" "}
                <p
                  style={{
                    fontSize: "25px",
                    margin: "3% 0%",
                    color: "blue",
                    opacity: "0.6",
                  }}
                >
                  Learn more
                </p>
                <img src={img8} alt="" />
              </div>
            </div>
          </div>
          <div
            style={{
              border: "2px solid gray",
              padding: "10px",
              borderRadius: "10px",
              width: "60%",
              margin: "19% 0%",
            }}
          >
            <div style={{ width: "60%", margin: "12% auto" }}>
              <img src={img6} alt="" />
            </div>
            <div style={{ width: "87%", margin: "auto" }}>
              <h1 style={{}}>UAE Company Visas</h1>
              <p style={{ color: "gray", fontSize: "24px", margin: "3% 0%" }}>
                Your application for visas is critical especially if you intend
                to move to Dubai. This becomes even more urgent if your family
                will also move with you. All the paperwork is done on your
                behalf smoothly so that you may only focus on doing what matters
                most to you.
              </p>
              <div
                style={{
                  display: "flex",
                  justifyContent: "start",
                  alignItems: "center",
                  gap: "16px",
                }}
              >
                {" "}
                <p
                  style={{
                    fontSize: "25px",
                    margin: "3% 0%",
                    color: "blue",
                    opacity: "0.6",
                  }}
                >
                  Learn more
                </p>
                <img src={img8} alt="" />
              </div>
            </div>
          </div>
          </div>
         
        </div>
        <div>
      
         
          <div>
          <div
            style={{
              border: "2px solid gray",
              padding: "10px",
              borderRadius: "10px",
              width: "60%",
              margin: "3% 0%",
            }}
          >
            <div style={{ width: "30%", margin: "12% auto" }}>
              <img src={img5} alt="" />
            </div>
            <div style={{ width: "87%", margin: "auto" }}>
              <h1 style={{}}>Bank Account Setup</h1>
              <p style={{ color: "gray", fontSize: "24px", margin: "3% 0%" }}>
                There are many banks in the United Arab Emirates [UAE]. Both
                locally owned and branches of multinational ones. Foreign banks
                adjust according to their parent s strategies and have changed
                local requirements overnight in the past. But we are here to
                help you
              </p>
              <div
                style={{
                  display: "flex",
                  justifyContent: "start",
                  alignItems: "center",
                  gap: "16px",
                }}
              >
                {" "}
                <p
                  style={{
                    fontSize: "25px",
                    margin: "3% 0%",
                    color: "blue",
                    opacity: "0.6",
                  }}
                >
                  Learn more
                </p>
                <img src={img8} alt="" />
              </div>
            </div>
          </div>
          <div
            style={{
              border: "2px solid gray",
              padding: "10px",
              borderRadius: "10px",
              width: "60%",
              margin: "19% 0%",
            }}
          >
            <div style={{ width: "60%", margin: "12% auto" }}>
              <img src={img7} alt="" />
            </div>
            <div style={{ width: "87%", margin: "auto" }}>
              <h1 style={{}}>UAE Company Visas</h1>
              <p style={{ color: "gray", fontSize: "24px", margin: "3% 0%" }}>
                Your application for visas is critical especially if you intend
                to move to Dubai. This becomes even more urgent if your family
                will also move with you. All the paperwork is done on your
                behalf smoothly so that you may only focus on doing what matters
                most to you.
              </p>
              <div
                style={{
                  display: "flex",
                  justifyContent: "start",
                  alignItems: "center",
                  gap: "16px",
                }}
              >
                {" "}
                <p
                  style={{
                    fontSize: "25px",
                    margin: "3% 0%",
                    color: "blue",
                    opacity: "0.6",
                  }}
                >
                  Learn more
                </p>
                <img src={img8} alt="" />
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Design;
