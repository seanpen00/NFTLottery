import React from "react";
import { Col, Container, Row } from "react-bootstrap";

//import CSS
import './roadmap.css';
import NewRoadMap from '../newroadmap/newroadmap';

//import Assets
import roadmap from '../../assets/Roadmap.mp4';

//import Component
import RoadMapItem from "./roadmapitem";
class RoadMap extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            roadmaps: [
                {
                    tag: 'Phase 1',
                    title: "Giveaways & Partnerships",
                    content: "We will host initial giveaways and partner with other projects, as well as influencers to provide the most value to our community."
                },
                {
                    tag: 'Phase 2',
                    title: "Giveaways & Giveaways",
                    content: "Most people simply can’t afford a $10k, $50k, $150k or even a $250k+ NFT.",
                    content2: "So, NFT Raffles will be essential for the community"
                },
                {
                    tag: 'Phase 3',
                    title: "Giveaways & Partnerships",
                    content: "You guessed it! We're going to focus on giving back to our community and growing our network to keep bringing the value in."
                },
                {
                    tag: 'Phase 4',
                    title: "VIP Pass Launch On Opensea",
                    content: "The first NFT posted will be a 1/10,000 original The NFT Lottery (VIP PASS) That will be sold directly on the Opensea.io page for .04 ETH + gas",
                    content2: "VIP Pass holders receive $Lottery tokens representing the fractional shares of NFTs held in the community vault. Members also get exclusive access to the DAO community, giveaways and voting rights over the DAO's assets. Join The NFT Lottery now, and Moon with us."
                },
                {
                    tag: 'Phase 5',
                    title: "Giveaways & $Lottery Token Implementation",
                    content: "Have you ever played in a lottery? Well if you have you know they are fun and exciting. They combine three features which opens the gaming experience to almost everyone. Lottery is not only cheap and highly affordable, lottery tickets are pliable and transparent.",
                    content2: "Affordable: The usual price for a lottery ticket is between .01 - .1 ETH",
                    content3: "Scalable: Customers can buy multiple tickets with several different number combinations to increase their chances to win.",
                    content4: "Transparent: Everything’s on the blockchain which allows everyone to know who won and when.",
                    content5: "Once the utility token is launched, as a VIP Pass holder, you won't need to do anything to start earning $Lottery."
                },
                {
                    tag: 'Phase 6',
                    title: "Giveaways & Snapshot Voting Integration",
                    content: "Snapshot: Shortly after launch, we will set up our voting platform on snapshop.org, allowing holders to vote and introduce their own proposals. The following are the requirements to pass a snapshot vote NFT Purchases (Minimum of 3 hours, need a minimum of 20% of holders to respond) Non-NFT-Purchase related (24 Hours to vote)."
                },
                {
                    tag: 'Phase 7',
                    title: "VIP Community Votes On Fractionalized Art For Vault",
                    content: "Official voting will take place within the community Discord, The community will be able to vote on which NFTs they want to start a raffle for. Remember to get verified. You must be a verified holder in-order to get access to the vip section.",
                    content2: "Staking Roadmap: After the minting period, we will immediately start working on setting up the staking platform. All our blue-chip purchases will be transferred to a fractional vault."
                },
                {
                    tag: 'Phase 8',
                    title: "First Series Of Raffles On Opensea (no gas fees)",
                    content: "The community will be able to vote on which NFTs they want to start a raffle for."
                }
            ]
        }
    }

    render() {
        return (
            <div className='roadmap-control' id='roadmap' style={{ paddingTop: 50, paddingBottom: 50, marginLeft: 2, marginRight: 2 }}>
                <Container style={{ backgroundColor: "black", padding: 30, border: "solid white 10px", borderRadius: 20, textAlign: "center", boxShadow: "0px 0px 50px #b600c7" }}>
                    <header style={{ fontWeight: 900, color: "purple", fontSize: 80 }}><span>THE NFT LOTTERY</span> <br /> ROADMAP</header>
                    <p className='roadmap-description'>
                        Welcome to the NFT Lottery Community.<br/>Get ready to go to the MOON!
                    </p>
                    {/* <img  className="roadimage"style={{border:"solid 5px black", borderRadius: 20}}src="https://github.com/DeadBanditz/banditzsite/blob/main/src/assets/wood.png?raw=true" /> */}
                    <Row style={{ paddingTop: 30}}>
                        <Col style={{ color: "white"}}>
                            {
                                this.state.roadmaps.map((item, index) => {
                                    return (
                                        <RoadMapItem style={{color: "black" }} key={index}
                                            tag={item.tag}
                                            title={item.title}
                                            content={item.content}
                                            content2={item.content2}
                                            content3={item.content3}
                                            content4={item.content4}
                                            content5={item.content5}
                                            content6={item.content6}
                                        />
                                    );
                                })
                            }
                        </Col>
                    </Row>
                    <NewRoadMap />
                </Container>
            </div>

        );
    }
}

export default RoadMap;