import { Component } from "react";

class SpiderMan extends Component {
    render(){
        const {name, description, thumbnail} = this.props.spiderMan
        // console.log(this.props.spiderMan)

        return (
            <div className="heroCard">
                <h2 id="heroName">{name}</h2>
                <p id="description">{description}</p>
                <img src={thumbnail} alt={name} />
            </div>
        );
    }
}

export default SpiderMan;