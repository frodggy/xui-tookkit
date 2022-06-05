const xui = require('../../../../lib/index').default;
const app = require('./app');


async function main() {
    xui.render(app(), document.getElementById('app'));
}

main();
