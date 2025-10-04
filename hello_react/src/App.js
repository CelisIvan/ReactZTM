import logo from "./logo.svg";
import "./App.css";
import { Component } from "react";

import CardList from "./components/card_list/card_list.component";
import SearchBox from "./components/search_box/search_box.component";

class App extends Component {
  constructor() {
    super();
    this.state = {
      dinos: [],
      searchField: "",
    };
  }

  componentDidMount() {
    fetch("https://dinosaur-facts-api.shultzlab.com/dinosaurs")
      .then((response) => response.json())
      .then((dinosFetch) =>
        this.setState(
          () => {
            return { dinos: dinosFetch };
          },
          () => {
            console.log(this.state);
          }
        )
      );
  }
  onSearchChange = (event) => {
    const searchField = event.target.value.toLocaleLowerCase();
            this.setState(() => {
              return { searchField };
            });
  }

  render() {

    const {dinos, searchField} = this.state;
    const {onSearchChange} = this;

    const filtered_dinos = dinos.filter((dino) => {
      return dino.Name.toLocaleLowerCase().includes(searchField);
    });
    return (
      <div className="App">
        <h1 className="app-title">Dinos Rolodex</h1>
        <SearchBox onChangeHandler = {onSearchChange} 
        placeholder = 'search dinos'
        className = 'dinos-search-box'/>
        <CardList dinos = {filtered_dinos}/>
      </div>
    );
  }
}

export default App;
