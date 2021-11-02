import { Component } from "react";
import superHeroes from "../data/superHeroes";
import HeroCard from "./HeroCard";

class HeroList extends Component {
    // constructor(){
    //     super()
    // }
    
    allHeroes = superHeroes.map((hero, i) => <HeroCard key={hero.name + i} hero={hero}/>)

    render(){
        return (
            <div id="heroesContainer">
                {this.allHeroes}
            </div>
        )
    }
}

export default HeroList;