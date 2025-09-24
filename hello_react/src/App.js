import logo from "./logo.svg";
import "./App.css";
import { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      dinos: [],
      search_field : ''
    };
  }

  componentDidMount() {
    fetch("https://dinosaur-facts-api.shultzlab.com/dinosaurs").then(
      (response) => response.json()
    )
    .then((dinos_fetch)=> this.setState(
      ()=> {
      return {dinos:dinos_fetch};
    },
    () => {
      console.log(this.state);
    }
  ));
  }

  render() {
     const filtered_dinos = this.state.dinos.filter((dino)=>{
            return dino.Name.toLocaleLowerCase().includes(this.state.search_field);
          });
    return (
      <div className="App">
        <input className='searchbox' type='search' placeholder="search dinos" onChange={(event)=>{
          console.log(event)
          const search_field = event.target.value.toLocaleLowerCase();
          this.setState(()=>{
            return {search_field}
          })
        }}/>
        {filtered_dinos.map((dino) => {
          return (
            <div>
              <h1 key={dino.Name}>{dino.Name}</h1>
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;
