import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import AboutGif from "../../assets/thegif.gif";
import YButton from "../basic/YButton";

//import CSS
import "./about.css";
class About extends React.Component {
  render() {
    return (
      <div id="about" className="about-control">
        <Container
          style={{
            backgroundColor: "black",
            border: "solid 10px white",
            boxShadow: "0px 0px 90px #B600C7",
            borderRadius: 20,
            maxWidth: 700
          }}
        >
          {/* <Row> */}
            {/* <Col */}
              {/* md={6}
              xs={12}
              
            > */}
            <text className="about-description"
              style={{ textAlign: "center" }}>
              <header style={{ color: "#E8B331", textAlign: "center" }}>
                <span style={{ color: "white" }}>THE NFT LOTTERY</span>
                <br />
              </header>
              <p >
                <text style={{fontSize: 20}}>COMMUNITY AND UTILITY FIRST</text>
                <div style={{textAlign: "center"}}>
                <br />
                A chance to raise the value for the entire NFT Space. 
                <br />
                Holders and participants will have unique and exciting benefits moving forward. 
                <br />
                Introducing the NFT community opportunities that they didn’t think were possible.
                <br />
                The NFT Lottery is built to give the average person a real chance to win HUGE.
                <br />
                80% of mint goes directly into the community vault.
                <br />
                <br />
                </div>
                
                <text style={{fontSize: 20}}>ONGOING BENEFITS:</text>
                <br />
                <div style={{textAlign: "left"}}>

                - Requirements is to be a verified holder of The NFT Lottery “VIP
                Pass”
                <br />
                - You can get verified in the community discord.
                
                <br />
                <br />
                </div>
                <text style={{fontSize: 20}}>SECOND COLLECTION: DEFLATIONARY</text>
                <br />
                <div style={{textAlign: "left"}}>

                NFT Raffles:
                <br />
                - After rewards are transferred to the winners, 70% of all ongoing raffle royalties will go directly into the community DAO. Forever.
                <br/>
                - This is where the numbers can get HUGE. 
                <br />
                <br />
                </div>
                <text style={{fontSize: 20}}>BLOCKCHAINS:</text>
                <br />
                <div style={{textAlign: "left"}}>

                - VIP Pass - Ethereum
                <br />
                - Raffles - Eth/Polygon
                <br />
                - Polygon (Matic) blockchain to avoid Ethereum gas fees &<br/>
                 also to remain on OpenSea.
                </div>
              </p>
              
              </text>
            {/* </Col> */}
            {/* <Col md={6} xs={12} className="image-control">
              <img
                style={{ border: "solid black 10px", borderRadius: 20 }}
                src={AboutGif}
                alt="about gif"
              />
            </Col> */}
          {/* </Row> */}
        </Container>
      </div>
    );
  }
}

export default About;
