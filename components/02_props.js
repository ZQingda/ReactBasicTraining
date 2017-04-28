import React from 'react';

class Child extends React.Component {
    render() {
        return (
            <div>
                <div>Here's the prop passed down : {this.props.text}</div>
                <div>You can even pass down jsx elements ! {this.props.innerDiv}</div>
            </div>
        )
    }
}

export default class ParentPassDown extends React.Component {
    render() {
        var passDown = (
            <h3>Passed down element!</h3>
        )

        return (
            <div>
                <Child text="Passed in text!" innerDiv={passDown}/>
            </div>
        )
    }
}