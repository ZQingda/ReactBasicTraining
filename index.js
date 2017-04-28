import React from 'react';
import ReactDOM from 'react-dom';
import TutorialApp from './app';

console.log("Hello!");
const target = document.getElementById('app-insert');
if (target) {
    ReactDOM.render(<TutorialApp />, target);
}
