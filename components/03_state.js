import React from 'react';

export default class StateEvents extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ""
        }
    }
    render() {
        return (
            <div>
                <p>Button onClick</p>
                <button onClick={() => alert("hello!")} > Button Events! </button>
                <br />
                <p>Input onChange</p>
                <input onChange={(event) => alert(event.target.value)} />
                <br />
                <p>Input changing state</p>
                <input
                    value={this.state.text}
                    onChange={(event) => this.setState({ text: event.target.value })}
                />
                {this.state.text}
            </div>
        )
    }
}