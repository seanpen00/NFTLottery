import React from "react";
import { Row, Col, Container } from "react-bootstrap";

//import CSS
import './team.css';

//import image assets
// import CEOImage from '../../assets/team/about.gif';
// import CTOImage from '../../assets/team/about.gif';
// import CMOImage from '../../assets/team/about.gif';
// import CFOImage from '../../assets/team/about.gif'

//import Component
import TeamMember from "./teammember";
class Team extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            teams: [
                {
                    image: "https://seanpen00.github.io/NFTLottery/static/media/thegif.9aed54cd.gif",
                    title: 'Ideator',
                    name: "Brandom (ooZ)"
                },
                {
                    image: "https://seanpen00.github.io/NFTLottery/static/media/thegif.9aed54cd.gif",
                    title: 'Marketing',
                    name: "Chris & Brando"
                },
                {
                    image: "https://seanpen00.github.io/NFTLottery/static/media/thegif.9aed54cd.gif",
                    title: 'Smart Contract',
                    name: "Sean"
                },
                {
                    image: "https://seanpen00.github.io/NFTLottery/static/media/thegif.9aed54cd.gif",
                    title: 'Smart Contract',
                    name: "Hamza"
                }, 
                {
                    image: "https://seanpen00.github.io/NFTLottery/static/media/thegif.9aed54cd.gif",
                    title: 'Community Manager',
                    name: "Anthony"
                },
                {
                    image: "https://seanpen00.github.io/NFTLottery/static/media/thegif.9aed54cd.gif",
                    title: 'Community Manager',
                    name: "Alex"
                },
                {
                    image: "https://seanpen00.github.io/NFTLottery/static/media/thegif.9aed54cd.gif",
                    title: 'Community Manager',
                    name: "Ricardo"
                }, 
                {
                    image: "https://seanpen00.github.io/NFTLottery/static/media/thegif.9aed54cd.gif",
                    title: 'Community Manager',
                    name: "Nick"
                }
            ]
        }
    }

    render() {
        return (
            <div className='team-control' id='team'>
                <Container>
                    <header style={{fontStyle: "italic", color:"white"}}> TEAM MEMBERS </header>
                    <Row>
                        <Col className="team-control-card" md={6} xs={12} >
                            <TeamMember
                                imageUrl={this.state.teams[0].image}
                                title={this.state.teams[0].title}
                                name={this.state.teams[0].name}
                            />
                        </Col>
                        <Col className="" md={6} xs={12} >
                            <TeamMember
                                imageUrl={this.state.teams[1].image}
                                title={this.state.teams[1].title}
                                name={this.state.teams[1].name}
                            />
                        </Col>
                    </Row> 
                    <Row>
                        <Col className="team-control-card" md={4} xs={12} >
                            <TeamMember
                                imageUrl={this.state.teams[2].image}
                                title={this.state.teams[2].title}
                                name={this.state.teams[2].name}
                            />
                        </Col>
                        <Col className="team-control-card" md={4} xs={12} >
                            <TeamMember
                                imageUrl={this.state.teams[3].image}
                                title={this.state.teams[3].title}
                                name={this.state.teams[3].name}
                            />
                        </Col>
                        <Col className="" md={4} xs={12} >
                            <TeamMember
                                imageUrl={this.state.teams[4].image}
                                title={this.state.teams[4].title}
                                name={this.state.teams[4].name}
                            />
                        </Col>
                        <Col className="team-control-card" md={4} xs={12} >
                            <TeamMember
                                imageUrl={this.state.teams[5].image}
                                title={this.state.teams[5].title}
                                name={this.state.teams[5].name}
                            />
                        </Col>
                        <Col className="team-control-card" md={4} xs={12} >
                            <TeamMember
                                imageUrl={this.state.teams[6].image}
                                title={this.state.teams[6].title}
                                name={this.state.teams[6].name}
                            />
                        </Col>
                        <Col className="" md={4} xs={12} >
                            <TeamMember
                                imageUrl={this.state.teams[7].image}
                                title={this.state.teams[7].title}
                                name={this.state.teams[7].name}
                            />
                        </Col>
                    </Row> 
                </Container>
            </div>
        );
    }
}

export default Team