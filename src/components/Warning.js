import React from 'react';

class Warning extends React.Component {
    render() {
        const style = {
            position: "absolute",
            margin: "-10px -60px",
            left: "50%",
            top: "50%",
            display: this.props.hidden ? "none" : "block",
            zIndex: 1,
            textShadow: "2px 2px 5px rgba(0, 0, 0, 0.4)",
            color: "#eeeeee"
        }
        return (
            <p style={style}>{this.props.children}</p>
        )
    }
}

export default Warning;