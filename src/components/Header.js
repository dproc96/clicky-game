import React from 'react';
import Title from './Title';
import Description from './Description';
import Score from './Score';
import Timer from './Timer';

class Header extends React.Component {
    render() {
        const style = {
            backgroundColor: "#d85411",
            color: "#eeeeee",
            textAlign: "center",
            padding: "20px",
            textShadow: "2px 2px 5px rgba(0, 0, 0, 0.4)",
            filter: "opacity(90%)",
            position: "fixed",
            width: "100%",
            top: "0",
            zIndex: "2",
            boxShadow: "2px 2px 2px 2px rgba(0, 0, 0, 0.4)"
        }
        return (
            <div style={style}>
                <Title>Click Me Spongebob</Title>
                <Description>Click an image to gain points, but don't click any image more than once. Every 12 points, you can click all images again.</Description>
                <Score score={this.props.score} />
                <Timer time={this.props.time} />
            </div>
        )
    }
}

export default Header;