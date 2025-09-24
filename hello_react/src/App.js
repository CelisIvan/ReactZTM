import logo from "./logo.svg";
import "./App.css";
import { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [
        { name: "Brachiosaurus", id: "23asd1" },
        { name: "Ankylosaurus" , id: "q2311a"},
        { name: "Velociraptor" , id:"as123a"},
        { name: "Diplodocus", id:"2123as"},
      ],
    };
  }
  render() {
    return (
      <div className="App">
        {this.state.monsters.map((monster) => {
          return <div><h1 key={monster.id}>{monster.name}</h1></div>;
        })}
      </div>
    );
  }
}

export default App;
