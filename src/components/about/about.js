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
              <p>
                <text style={{fontSize: 20}}>COMMUNITY AND UTILITY FIRST</text>
                <br />
                Raising the value for everyone
                <br />
                A community and utility oriented project. Holders and<br/>
                participants will have unique and exciting benefits.
                <br />
                Giving the NFT community the opportunities that they didn’t
                think were possible.
                <br />
                The NFT Lottery is built to give the average person a real
                chance to win HUGE.
                <br />
                80% of mint goes directly into the community vault.
                <br />
                <br />
                <text style={{fontSize: 20}}>Benefits:</text>
                <br />
                Requirements is to be a verified holder of The NFT Lottery “VIP
                Pass”
                <br />
                You can get verified in the community discord.
                
                <br />
                <br />
                <text style={{fontSize: 20}}>Second collection:</text>
                <br />
                NFT Raffles:
                <br />
                After rewards are transferred to the winners, 70% of all ongoing raffle royalties will go directly into the community DAO. Forever.
                <br />
                Where the community can vote which NFTs to fractionalize as a
                family.
                <br />
                <br />
                <text style={{fontSize: 20}}>Which blockchain:</text>
                <br />
                VIP Pass - Ethereum
                <br />
                Raffles - Eth/Polygon
                <br />
                Polygon (Matic) blockchain to avoid Ethereum gas fees &<br/>
                remaining on Opensea.
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
