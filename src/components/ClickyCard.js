import React from 'react';
import ClickyImage from './ClickyImage';
import Warning from './Warning';

class ClickyCard extends React.Component {
    state = {
        hovered: false,
        mouseDown: false
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
    handleMouseDown = () => {
        if (this.props.wasClicked) {
            this.setState({ mouseDown: true })
        }
    }
    handleMouseUp = () => {
        this.setState({ mouseDown: false })
    }
    render() {
        const style = {
            width: this.state.hovered ? "210px" : "200px",
            height: this.state.hovered ? "210px" : "200px",
            margin: this.state.hovered ? "5px" : "10px",
            border: "1px #bbbbbb solid",
            backgroundColor: this.state.mouseDown ? "#ff0039" : "#eeeeee",
            boxShadow: "2px 2px 2px 2px rgba(0, 0, 0, 0.4)",
            borderRadius: "3px",
            cursor: this.state.hovered ? "pointer" : "auto",
            position: "relative"
        }
        return (
            <div style={style} onMouseDown={this.handleMouseDown} onMouseUp={this.handleMouseUp} onClick={this.handleClick} onMouseOver={this.onHover} onMouseOut={this.onHoverEnd}>
                <ClickyImage image={this.props.image} name={this.props.name} />
                <Warning hidden={!this.state.mouseDown}>Barnacles! You Lost!</Warning>
            </div>
        )
    }
}

export default ClickyCard;