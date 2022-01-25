import React from "react";
import { Row, Col, Container } from "react-bootstrap";

//import CSS
import './team.css';

//import image assets
import ooz from '../../assets/team/theteam/ooz.png';
import anthony from '../../assets/team/theteam/anthony.jpeg';
import davon from '../../assets/team/theteam/davon.jpeg';
import hamza from '../../assets/team/theteam/hamza.jpeg';
import kev from '../../assets/team/theteam/kev.png';
import ricky from '../../assets/team/theteam/ricky.png';
import marketing from '../../assets/team/theteam/marketing.png';
import chris from '../../assets/team/theteam/chris.png';
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
                    image: ooz,
                    title: 'Founder',
                    name: "ooZ"
                },
                {
                    image: chris,
                    title: 'Marketing Manager',
                    name: "Brando"
                },
                {
                    image: "https://seanpen.com/nft/1.png",
                    title: 'Smart Contract Developer',
                    name: "Sean"
                },
                {
                    image: hamza,
                    title: 'Smart Contract Developer',
                    name: "Hamza"
                }, 
                {
                    image: anthony,
                    title: 'Community Manager',
                    name: "Anthony"
                },
                {
                    image: davon,
                    title: 'Community Manager',
                    name: "Davon"
                },
                {
                    image: ricky,
                    title: 'Community Manager',
                    name: "Ricky"
                }, 
                {
                    image: kev,
                    title: 'Community Manager',
                    name: "Kev"
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
                                title2={this.state.teams[0].title2}
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
                        <Col className="team-control-card" md={4} xs={12} >
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