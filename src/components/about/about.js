import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import AboutGif from '../../assets/thegif.gif';
import YButton from "../basic/YButton";

//import CSS
import './about.css';
class About extends React.Component {
    render() {
        return (
            <div id="about" className='about-control'>
                <Container style={{backgroundColor: "black", border: "solid 10px white", boxShadow: "0px 0px 90px #B600C7", borderRadius: 20}}>
                    <Row>
                        <Col md={6} xs={12} className='about-description'>
                            <header style={{ color: "#E8B331", textAlign: "center" }}>
                                <span style={{ color: "white" }}>THE NFT LOTTERY</span><br /> 
                            </header>
                            <p style={{ color: "white" }}>
                                The NFT Lottery's goal is to put Utility & our Community first. We want holders and participants to have unique and exciting benefits, and raise the value for everyone.                         
                            </p>
                            <p style={{ color: "white" }}>
                                The idea is to give our community opportunities that they didn't think were posisble. The NFT Lottery is built to give the average person a real chance to win HUGE. 80% of mint earnings goes directly into the community vault.                       
                            </p>
                            <p style={{ color: "white" }}>
                                After becoming a verified holder of the original The NFT Lottery "VIP Pass" (see community discord for details), members are entitled to benefits including 70% of all remaining raffle royalties, after rewards are transferred to the winners, goes directly into the community DAO, where the community can vote which NFTs to fractionalize as a family.
                            </p>
                            <p style={{ color: "white" }}>
                                Our vision to build a highly engaged, inclusive and supportive community that thrives on uplifing each other, providing a shared ecosystem for highly sought after and innovative NFT projects through our launchpad, delivering successful NFT projects on the launchpad and becoming a pioneer in providing creative utilities and innovation, and supporting and empowering those who are new to NFTs to learn more and become part of the NFT ecosystem.             
                            </p>
                        </Col>
                        <Col md={6} xs={12} className='image-control'>
                            <img style={{ border: "solid black 10px", borderRadius: 20 }} src={AboutGif} alt='about gif' />
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default About;