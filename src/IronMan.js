import { Component } from "react";

class IronMan extends Component {
    render(){
        const {name, description, thumbnail} = this.props.ironMan
        // console.log(this.props.ironMan)

        return (
            <div className="heroCard">
                <h2 id="heroName">{name}</h2>
                <p id="description">{description}</p>
                <img src={thumbnail} alt={name} />
            </div>
        );
    }
}

export default IronMan;