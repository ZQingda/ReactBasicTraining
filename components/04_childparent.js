import React from 'react';

class Child extends React.Component {
    render() {
        return (
            <div>
                Input Field:<input value={this.props.text} onInput={this.props.onInput} />
            </div>
        );
    }
}

export default class ParentChange extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: "",
        };
    }

    render() {
        return (
            <div>
                <Child
                    text={this.state.text}
                    onInput={(event) => this.setState({ text: event.target.value })} 
                />
                {this.state.text}
            </div>
        );
    }
}