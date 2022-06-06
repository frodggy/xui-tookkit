const xui = require('../../../../lib/index').default;
const App = require('./app');

xui.render(<App count={0} /> ,document.getElementById('app'));