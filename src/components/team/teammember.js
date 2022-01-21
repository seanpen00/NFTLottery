import React from "react";

//import CSS
import './teammember.css';

class TeamMember extends React.Component {
    render() {
        return (
            <div className='teammember-control' style={{textAlign: "center", justifyContent: "center"}}>
                <img style={{maxHeight: 400, maxWidth: 400, border: "solid 5px white"}}src={this.props.imageUrl} alt='team member'/>
                <div className='teammember-description'>
                    <p className='teammember-name'>{this.props.name}</p>
                    <p style={{lineHeight: 0, fontWeight: 900, paddingBottom: 0}}className='teammember-occupation'>{this.props.title}</p>
                    <p style={{paddingTop: 0, marginTop: 0, lineHeight: 1.2, fontWeight: 900}}className='teammember-occupation'>{this.props.title2}</p>
                    <br/>
                </div>
            </div>
        );
    }
}

export default TeamMember;