const xui = require('../../../../lib/index').default;
const app = require('./app');

// xui.render(app(), );
document.getElementById('app').appendChild(app())
