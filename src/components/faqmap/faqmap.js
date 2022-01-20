import React from "react";
import { Col, Container, Row } from "react-bootstrap";

//import CSS
import "./faqmap.css";

//import Assets
import roadmap from "../../assets/Roadmap.mp4";

//import Component
import RoadMapItem from "./faqmapitem";
class RoadMap extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      roadmaps: [
        {
          tag: "1",
          title: "What is an NFT?",
          content:
            'An NFT stands for "Non-fungible token" and is a fancy way of saying it\'s a unique, one of a kind digital item that users can buy, own, and trade. Some NFTs main purpose is to be digital art. However, NFTs can be much more than that. TheNFTLottery offers additional utility such as exclusive access to a DAO, member only content, access to ongoing raffles and giveaways. It’s more of a system, designed to give even the average newcomer a chance to win something life changing. Little risk. High reward.',
        },
        {
          tag: "2",
          title: "What's a DAO?",
          content:
            "A DAO stands for \"Decentralized Autonomous Organization\". It's an organization controlled by its members and governed by rules written into a smart contract on the blockchain. TheNFTLottery DAO is controlled by its members and used to purchase metaverse NFTs through voting done by members. The DAO grants proxied ownership of TheNFTLottery's acquired NFTs to its members, and more. It does not provide liquidity benefits and therefore is not at risk of being considered a security.",
        },
        {
          tag: "3",
          title: "What is Metamask?",
          content:
            "Metamask is a crypto wallet that can store your Ethereum and is needed to purchase and mint NFTs. Having a wallet gives you an Ethereum address (i.e. 0xABCD....1234), this is where your NFT will be stored. You can get Metamask and learn more here: https://metamask.io/",
        },
        {
          tag: "4",
          title: "How do I join the community?",
          content:
            "You can go to our Discord (link is at the top of the page).",
        },
        {
          tag: "4",
          title: "Which blockchain will the VIP Pass be launched?",
          content: "Ethereum.",
        },
        {
          tag: "4",
          title: "How much is it to mint TheNFTLottery Vip Pass?",
          content: ".05 ETH + Gas.",
        },
        {
          tag: "4",
          title: "Where do VIP Pass holders vote?",
          content:
            "Shortly after launch, we will set up our voting platform on snapshop.org, allowing verified holders to vote and even introduce their own proposals. There’s also a VIP SECTION in the community discord only accessible to verified VIP Pass holders.",
        },
        {
          tag: "4",
          title: "Where will the raffles take place?",
          content:
          "Raffles will be hosted on OpenSea and will be on the Polygon Matic blockchain to reduce fees.",
        },
        {
          tag: "4",
          title: "How do raffles work?",
          content:
            "Smart contract capability allows us to use NFTs as a form of a raffle system. You along with others will own shares to an individual NFT, once all shares are owned the listed reward will randomly be distributed to the lucky winner. All others will lose that NFT from their wallet & are welcome to join another ongoing raffle.",
        },
      ],
    };
  }

  render() {
    return (
      <div
        className="roadmap-control"
        id="roadmap"
        style={{ backgroundColor: "black", backgroundImage: "none" }}
      >
        <Container style={{ backgroundColor: "black" }}>
          <header
            style={{ fontStyle: "normal", color: "white", textAlign: "center" }}
          >
            <span></span> <br /> FAQ's
          </header>
          <Row style={{ paddingTop: 0 }}>
            <Col>
              {this.state.roadmaps.map((item, index) => {
                return (
                  <RoadMapItem
                    style={{ color: "black" }}
                    key={index}
                    tag={item.tag}
                    title={item.title}
                    content={item.content}
                  />
                );
              })}
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default RoadMap;
