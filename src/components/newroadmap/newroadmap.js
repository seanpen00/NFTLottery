import React from "react";
import { Col, Container, Row } from "react-bootstrap";

//import CSS
import './newroadmap.css';

//import Assets
import roadmap from '../../assets/Roadmap.mp4';

//import Component
import RoadMapItem from "./newroadmapitem";
class RoadMap extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            roadmaps: [
                {
                    tag: '100,000,000',
                    title: "Tokens",
                    content: "The NFT Lottery will produce a total of 20,000,000 $Lottery tokens per year, over a period of five years."
                },
                {
                    tag: 'At a Glance',
                    title: "No Staking Required!",
                    content: "You will not be required to stake of give up custody of the NFT in order to earn/claim the utility tokens! $Lottery is an ERC-20 utility token that will be used for various tasks inside the NFT Lottery ecosystem. VIP Pass holders will earn 5 $Lottery tokens per day. "
                },
                {
                    tag: "Roll 'em out",
                    title: "When do we launch?",
                    content: "Currently, the $Lottery launch date is under discussion. The total supply will be up to a maximum of 100,000,000 $Lottery tokens to ever exist."
                },
                {
                    tag: 'Questions?',
                    title: "Some more info about $Lottery",
                    content: "Disclaimer: $Lottery is NOT an investment and has NO monetary value. It will be used as a utility token in the NFT Lottery ecosystem. Once the utility token is launched, as a VIP Pass holder, you won't need to do anything to start earning $Lottery, and recieve $Lottery tokens representing the fractional shares of NFTs held in the community vault. Members also get exclusive access to the DAO community, giveaways and voting rights over the DAO's assets. Join The NFT Lottery now, and Moon with us."
                }
            ]
        }
    }

    render() {
        return (
            <div className='roadmap-control' id='roadmap' style={{ textAlign: "center" }}>
                <Container style={{ backgroundColor: "black", paddingTop: 100 }}>
                    <header style={{ fontWeight: 900, color:"purple" }}>TOKENOMICS</header>
                    <p className='roadmap-description'>
                    Our number 1 priority is to ensure that your investment has a highly profitable return, for us to do so we are going to implement several strategies before and after launch in order to increase the floor price and exposure of your exclusive digital art piece.
                    </p>
                    {/* <img  className="roadimage"style={{border:"solid 5px black", borderRadius: 20}}src="https://github.com/DeadBanditz/banditzsite/blob/main/src/assets/wood.png?raw=true" /> */}
                    <Row style={{ paddingTop: 30, alignContent: "center", justifyContent: "center", textAlign: "center" }}>
                        <Col style={{ color: "white", alignContent: "center", justifyContent: "center", textAlign: "center" }}>
                            {
                                this.state.roadmaps.map((item, index) => {
                                    return (
                                        <RoadMapItem style={{ textAlign: "center", color: "black" }} key={index}
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