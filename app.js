import React from 'react';
import HelloWorld from './components/01_basics';
import ParentPassDown from './components/02_props';
import StateEvents from './components/03_state';
import ParentChange from './components/04_childparent';
import ComponentArray from './components/05_elementarray';
import List from './components/06_todo/list.js';

export default class TutorialApp extends React.Component {
    render() {
        return (
            <div>
                <hr />
                <HelloWorld />
                <hr />
                <ParentPassDown />
                <hr />
                <StateEvents />
                <hr />
                <ParentChange />
                <hr />
                <ComponentArray />
                <hr />
                <List />
                <hr />
            </div>
        )
    }
}