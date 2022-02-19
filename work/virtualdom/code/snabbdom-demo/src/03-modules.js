import { init, h } from 'snabbdom';

import style from 'snabbdom/modules/style';
import eventlisteners from 'snabbdom/modules/eventlisteners';

let patch = init([
    style,
    eventlisteners
]);

let vnode = h('div', {
    style: {
        backgroundColor: 'red'
    }, 
    on: {
        click: eventHandler
    }
}, [
    h('h1', 'Hello Snabbdom'),
    h('p', 'this is a p label')
]);

function eventHandler() {
    console.log('click me');
}

let app = document.querySelector('#app');

patch(app, vnode);