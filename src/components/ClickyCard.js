import React from 'react';
import ClickyImage from './ClickyImage';

class ClickyCard extends React.Component {
    state = {
        hovered: false
    }
    onHover = () => {
        this.setState({ hovered: true });
    }
    onHoverEnd = () => {
        this.setState({ hovered: false });
    }
    handleClick = () => {
        this.props.handleClick(this.props.id)
    }
    render() {
        const style = {
            width: this.state.hovered ? "210px" : "200px",
            height: this.state.hovered ? "210px" : "200px",
            margin: this.state.hovered ? "5px" : "10px",
            border: "1px #bbbbbb solid"
        }

        return (
            <div style={style} onClick={this.handleClick} onMouseOver={this.onHover} onMouseOut={this.onHoverEnd}>
                <ClickyImage image={this.props.image} name={this.props.name} />
            </div>
        )
    }
}

export default ClickyCard;