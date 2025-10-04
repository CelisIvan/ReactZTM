import { Component } from "react";
import './card_list.styles.css'
import Card from "../card/card_component.component";

class CardList extends Component {
  render() {
    const { dinos } = this.props;
    return (
      <div className= 'card-list'>
        {dinos.map((dino) => {
        return (
            <Card dino = {dino}/>
        )})}
      </div>
    );
  }
}

export default CardList;
