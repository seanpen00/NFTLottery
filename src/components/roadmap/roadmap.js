import React from "react";
import { Col, Container, Row } from "react-bootstrap";

//import CSS
import "./roadmap.css";
import NewRoadMap from "../newroadmap/newroadmap";

//import Assets
import roadmap from "../../assets/Roadmap.mp4";

//import Component
import RoadMapItem from "./roadmapitem";
class RoadMap extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      roadmaps: [
        {
          tag: "Phase 1",
          title: "Project Launch",
          content: "- Giveaways & Partnerships",
          content2: "- VIP Pass launch on Ethereum",
          content5: "- Snapshot voting integration",
          content3:
            "- 10 lucky winners of 1 ETH each will be rewarded during the minting process. The 1 ETH rewards will be given to the original wallets of mint numbers: #1000, #2000, #3000, #4000, #5000, #6000, #7000, #8000, #9000, #10000 (*Must be Metamask*)",
          content4: "- Lucky mint number #7777 will be rewarded 2 ETH.",
        },
        {
          tag: "Phase 2",
          title: "First set of community votes",
          content: "- Voting on which NFTs will be the first purchases for the community DAO",
          content1: "- Vote to enter the Metaverse.",
          content2:
            "- Vote for additional giveaways. ",
          content3: "- Vote for Utility specifics. ",
        },
        {
          tag: "Phase 3",
          title: "Team Building & Partnerships ",
          content: "- Marketing Campaign ",
          content2: "- Community Building",
          content3: "- Team member expansion",
          content4: "- Potential Partnerships ",
        },
        {
          tag: "Phase 4",
          title: "Tokenomics & Fractionalizing Art ",
          content: "- Utility Token implementation",
          content2: "- Special airdrop to Hodlers",
          content3: "- VIP Community Votes on the next route we take as a family.",
        },
      ],
    };
  }

  render() {
    return (
      <div
        className="roadmap-control"
        id="roadmap"
        style={{
          paddingTop: 50,
          paddingBottom: 50,
          marginLeft: 2,
          marginRight: 2,
        }}
      >
        <Container
          style={{
            backgroundColor: "black",
            padding: 30,
            border: "solid white 10px",
            borderRadius: 20,
            textAlign: "center",
            boxShadow: "0px 0px 50px #b600c7",
          }}
        >
          <header style={{ fontWeight: 900, color: "purple", fontSize: 100, lineHeight: .9 }}>
            <span>THE NFT LOTTERY </span><br/><text style={{lineHeight: 1}}>ROADMAP</text>
          </header>
          {/* <p className='roadmap-description'>
                        Welcome to the NFT Lottery Community.<br/>Get ready to go to the MOON!
                    </p> */}
          {/* <img  className="roadimage"style={{border:"solid 5px black", borderRadius: 20}}src="https://github.com/DeadBanditz/banditzsite/blob/main/src/assets/wood.png?raw=true" /> */}
          <Row style={{ paddingTop: 30 }}>
            <Col style={{ color: "white" }}>
              {this.state.roadmaps.map((item, index) => {
                return (
                  <RoadMapItem
                    style={{ color: "black" }}
                    key={index}
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
              })}
            </Col>
          </Row>
          {/* <NewRoadMap /> */}
        </Container>
      </div>
    );
  }
}

export default RoadMap;
