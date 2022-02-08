import Character from "./components/Character";

function App() {
    const array = [
        {name:'Cinder', power: 'fire', color: 'orange', age: 28, moves: ["Trailblazer", "Inferno", "Fire Flash"]},
        {name:'Aganos', power: 'rock', color: '#009999', age: 900000, moves: ["Payload Assault", "Pulverize", "Ruin"]},
        {name:'Jago', power: 'Tiger Spirit', color: '#336699', age: 25, moves: ["Edokuken", "Tiger Fury", "Wind Kick"]}
    ]

    const pokemon = [
        {name:'Cyndaquil', power: 'Fire', color: 'crimson', age: 22, moves: ["Smokescreen", "Ember", "Flame Wheel"]},
        {name:'Oshawott', power: 'Water', color: 'cornflowerblue', age: 11, moves: ["Aqua Jet", "Water Pulse", "Slash"]},
        {name:'Rowlet', power: 'Grass & Flying', color: 'olivedrab', age: 6, moves: ["Peck", "Razor Leaf", "Brave Bird"]}
    ]

    let charEles = array.map((obj, index) =>
        <Character key={index} name={obj.name} power={obj.power} color={obj.color} age={obj.age} moves={obj.moves} />
    )

    let pokemonEles = pokemon.map((obj, index) =>
        <Character key={index} name={obj.name} power={obj.power} color={obj.color} age={obj.age} moves={obj.moves} />
    )

    let container = {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "flex-start",
        marginTop: "50px",
    }

    return (
        <div>
          <header style={container}>
              {charEles}
              {pokemonEles}
          </header>
        </div>
    );
}

export default App;
