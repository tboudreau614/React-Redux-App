import React from 'react'

const Card = props => {
    return (
    <div class="bodyDiv">
        <div key={props.player.id} className="cardStyles">
            <h3>{`${props.player.first_name} ${props.player.last_name}`}</h3>
            <p>Position: {props.player.position}</p>
            <p>Team: {props.player.team.full_name}</p>
            <p>City: {props.player.team.city} / {props.player.team.abbreviation}</p>
            <p>Division: {props.player.team.division}</p>
            <p>Conference: {props.player.team.conference}</p>
        </div>
    </div>
    )

}

export default Card 