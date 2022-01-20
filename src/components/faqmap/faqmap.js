import React from "react";
import { Col, Container, Row } from "react-bootstrap";

//import CSS
import './faqmap.css';

//import Assets
import roadmap from '../../assets/Roadmap.mp4';

//import Component
import RoadMapItem from "./faqmapitem";
class RoadMap extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            roadmaps: [
                {
                    tag: '1',
                    title: "What is OpenSea?",
                    content: "Opensea is a game-changing decentralized commercial center for purchasing and selling NFTs. In case you're wondering, NFTs represents Non-Fungible Tokens, which are one of a kind, collectible advanced ded above and beyond $3entities like in-game resources, symbols, trading cards, and workmanship. In August 2021 alone, OpenSea recorded above and beyond $3.5 billion in NFT exchanging volume. Considering it posted just $21 million in volume during all of 2020, most would agree the 12,000% exchanging action rise immovably flags achievement."
                },
                {
                    tag: '2',
                    title: "When does minting go live?",
                    content: "The NFT Lottery will be available for mint at a date yet to be determined."
                },
                {
                    tag: '3',
                    title: "How much will lottery tickets be?",
                    content: "The usual price for a lottery ticket is between .01 - .1 ETH."
                },
                {
                    tag: '4',
                    title: "How do I become a VIP?",
                    content: "Members may look to the community Discord for steps to verify themselves as an owner of the original The NFT Lottery VIP."
                }
            ]
        }
    }

    render() {
        return (
            <div className='roadmap-control' id='roadmap' style={{ backgroundColor: "black", backgroundImage: "none" }}>
                <Container style={{ backgroundColor: "black"}}>
                    <header style={{fontStyle: "normal", color:"white", textAlign: "center" }}><span></span> <br/> FAQ's</header>
                    <Row style={{ paddingTop: 0}}>
                        <Col>
                            {
                                this.state.roadmaps.map((item, index) => {
                                    return (
                                        <RoadMapItem style={{ color: "black" }} key={index}
                                            tag={item.tag}
                                            title={item.title}
                                            content={item.content}
                                             />
                                    );
                                })
                            }
                        </Col>
                    </Row>
                </Container>
            </div>

        );
    }
}

export default RoadMap;