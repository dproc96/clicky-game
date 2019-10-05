import React from 'react';
import Header from './components/Header';
import ClickyBoard from './components/ClickyBoard';
import cards from './data/cards';

const initialState = {
    cards: cards.map((card, i) => {
        card.wasClicked = false;
        card.id = i;
        return card;
    }).sort(() => {
        return 0.5 - Math.random();
    }),
    score: 0
}

class App extends React.Component {
    state = initialState
    resetGame = () => {
        this.setState(initialState)
    }
    handleClick = (i) => {
        let gameEnd= false;
        let score = this.state.score;
        const cards = this.state.cards.map(card => {
            if (card.id === i && !card.wasClicked) {
                card.wasClicked = true;
                score++;
            }
            else if (card.id === i && card.wasClicked) {
                gameEnd = true;
                alert("Oops you lose!")
            }
            return card
        }).sort(() => {
            return 0.5 - Math.random();
        })
        if (gameEnd) {
            this.resetGame()
        }
        else {
            alert(score)
            this.setState({ 
                cards: cards,
                score: score
            });
        }
    }
    render() {
        return (
            <div>
                <Header />
                <ClickyBoard handleClick={this.handleClick} cards={this.state.cards} />
            </div>
        )
    }
}

export default App;