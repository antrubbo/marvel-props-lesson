import { Component } from "react";

class HeroCard extends Component {
    render(){
        const {name, description, thumbnail} = this.props.hero
        // console.log(this.props.hero)

        return (
            <div className="heroCard">
                <h2 id="heroName">{name}</h2>
                <p id="description">{description}</p>
                <img src={thumbnail} alt={name} />
            </div>
        );
    }
}

export default HeroCard;