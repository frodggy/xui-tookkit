const xui = require('../../lib/index').default;
const app = require('./app');


async function main() {
    xui.render((await app()), document.getElementById('app'));
}

main();
