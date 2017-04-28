import React from 'react';

export default class ListItem extends React.Component {
    render() {
        return (
            <li>
                <div>{this.props.text}</div>
                <button onClick={this.props.onDelete}>remove</button>
            </li>
        )
    }
}