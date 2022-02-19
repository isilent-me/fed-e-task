import { h, init} from 'snabbdom';

let patch = init([]);

let vnode = h('div#container', [
    h('h1','Hello Snabbdom'),
    h('p', 'this is a p label')
]);

let app = document.querySelector('#app');

let oldVnode = patch(app,vnode);

setTimeout(() => {
    vnode = h('div#container', [
        h('h1', 'Hello World'),
        h('p', 'Hello P')
    ]);
    patch(oldVnode, vnode);

    patch(vnode, h('!'));
}, 2000);