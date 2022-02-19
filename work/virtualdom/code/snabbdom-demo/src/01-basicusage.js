import { h, init } from 'snabbdom';

let patch = init([]);
let vnode = h('div#container.cls', 'Hello World');

let app = document.querySelector('#app');

let oldVnode = patch(app, vnode);

vnode = h('div','Hello Snabbdom');

patch(oldVnode, vnode);

let a = {
    test: function () {
        console.log('test');
    }
};
a?.test();