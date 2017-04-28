import React from 'react';

class Button extends React.Component {
    render() {
        return (
            <div>
                <button onClick={this.props.onClick}>{this.props.text}</button>
            </div>
        )
    }
}

export default class ComponentArray extends React.Component {
    render() {
        const stringArray = [
            'Did',
            'you',
            'ever',
            'hear',
            'the',
            'Tragedy',
            'of',
            'Darth',
            'Plagueis',
            'the',
            'Wise'
        ];

        var componentArray = [];
        for (let i = 0; i < stringArray.length; i++) {
            componentArray.push(
                <Button 
                    text={stringArray[i]} 
                    key={i} 
                    onClick={function(e) {alert(e.target.innerHTML);}}
                />
            )
        };

        return (
            <div>
                {componentArray}
            </div>
        )
    }
}