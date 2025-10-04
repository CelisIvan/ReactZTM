import { Component } from "react";
import './card.styles.css'

class Card extends Component {

    render(){
        const {Name, Description} = this.props.dino
        return (
            <div className= 'card-container' key={Name}>
            <img alt={Name} src={`https://robohash.org/${Name}?set=set2&size=180x180`}/>
            <h2>{Name}</h2>
            <p>{Description}</p>

          </div>
        )
    }
}
export default Card;