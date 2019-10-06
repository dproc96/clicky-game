import React from 'react';

class Timer extends React.Component {
    render() {
        return (
            <p>Click an Image: {this.props.time}</p>
        )
    }
}

export default Timer;