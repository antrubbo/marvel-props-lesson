import superHeroes from './superHeroes';
import HeroCard from './HeroCard';
import SpiderMan from'./SpiderMan'
import IronMan from './IronMan';
import './App.css';

function App() {
  let allHeroes = superHeroes.map((hero, i) => <HeroCard key={hero.name + i} hero={hero}/>)
  // console.log(allHeroes)

  return (
    <div className="App">
      <h1 id="title">Marvel Superheroes!</h1>
      <div id="heroesContainer">
      {/* <SpiderMan spiderMan={superHeroes[0]}/>
      <IronMan ironMan={superHeroes[6]}/> */}
        {allHeroes}
      </div>
    </div>
  );
}

export default App;
