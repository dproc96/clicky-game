import React from 'react';
import ClickyCard from './ClickyCard';

class ClickyBoard extends React.Component {
    render() {
        const style = {
            display: "flex",
            flexWrap: "wrap",
            maxWidth: "90%",
            width: "888px",
            margin: "10px auto"
        }
        const cards = this.props.cards.map(card => {
            return <ClickyCard id={card.id} handleClick={this.props.handleClick} image={card.image} name={card.name} />
        })
        return (
            <div style={style}>
                {cards}
            </div>
        )
    }
}

export default ClickyBoard;