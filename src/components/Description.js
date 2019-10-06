import React from 'react';

class Description extends React.Component {
    render() {
        return (
            <p>{this.props.children}</p>
        )
    }
}

export default Description;