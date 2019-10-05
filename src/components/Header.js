import React from 'react';
import Title from './Title';
// import Description from './Description';
// import Score from './Score';

class Header extends React.Component {
    render() {
        const style = {
            backgroundColor: "#222222",
            color: "#eeeeee"
        }
        return (
            <div style={style}>
                <Title>Click Me Spongebob</Title>
                {/* <Description>Click an image to gain points, but don't click any image more than once</Description>
                <Score score={this.props.score} /> */}
            </div>
        )
    }
}

export default Header;