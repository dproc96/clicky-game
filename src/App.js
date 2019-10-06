import React from 'react';
import Header from './components/Header';
import ClickyBoard from './components/ClickyBoard';
import cards from './data/cards';



class App extends React.Component {
    constructor() {
        super();
        this.initialState = {
            cards: cards.map((card, i) => {
                card.wasClicked = false;
                card.id = i;
                return card;
            }).sort(() => {
                return 0.5 - Math.random();
            }),
            score: {
                current: 0,
                high: localStorage.getItem("highScore") || 0
            },
            time: 5
        }
        this.state = {...this.initialState}
    }
    resetGame = () => {
        let state = {...this.initialState};
        state.score.high = this.state.score.high;
        this.setState(state);
    }
    handleClick = (i) => {
        let gameEnd = false;
        const localHighScore = localStorage.getItem("highScore") || 0;
        const score = {...this.state.score};
        let cards = [...this.state.cards.map(x => {return {...x}})].map(card => {
            if (card.id === i && !card.wasClicked) {
                card.wasClicked = true;
                score.current++;
                if (score.current > score.high) {
                    score.high = score.current;
                }
                if (score.high > localHighScore) {
                    localStorage.setItem("highScore", score.high);
                }
            }
            else if (card.id === i && card.wasClicked) {
                gameEnd = true;
            }
            return card
        }).sort(() => {
            return 0.5 - Math.random();
        })
        if (gameEnd) {
            this.resetGame()
        }
        else {
            if (score.current % 12 === 0) {
                cards = cards.map(card => {
                    card.wasClicked = false;
                    return card;
                })
            }
            this.setState({
                cards: cards,
                score: score,
                time: 5
            });
        }
    }
    timer = () => {
        const time = this.state.time - 1;
        if (time === 0) {
            this.resetGame()
        }
        else {
            this.setState({ time: time })
        }
    }
    render() {
        return (
            <div>
                <Header time={this.state.time} score={this.state.score} />
                <ClickyBoard handleClick={this.handleClick} cards={this.state.cards} />
            </div>
        )
    }
    componentDidMount() {
        this.interval = setInterval(this.timer, 1000);
    }
}

export default App;