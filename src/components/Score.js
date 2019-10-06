import React from 'react';

class Score extends React.Component {
    render() {
        const style = {
            fontSize: "18px"
        }
        return (
            <p style={style}>Score: {this.props.score.current} || High Score: {this.props.score.high}</p>
        )
    }
}

export default Score;