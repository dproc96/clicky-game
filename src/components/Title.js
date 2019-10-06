import React from 'react';

class Title extends React.Component {
    render() {
        const style = {
            fontSize: "32px",
            margin: "10px"
        }
        return (
            <h1 style={style}>{this.props.children}</h1>
        )
    }
}

export default Title;