import React from 'react';

class ClickyImage extends React.Component {
    render() {
        const style = {
            width: "100%",
            height: "100%",
            objectFit: "cover"
        }
        return (
            <img style={style} alt={this.props.name} src={this.props.image} />
        )
    }
}

export default ClickyImage;