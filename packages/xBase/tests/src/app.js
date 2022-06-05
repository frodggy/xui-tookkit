const xui = require('../../lib/index').default;

/** @jsxImportSource ../lib/index.js */

async function App() {
    let count = xui.addState(1);
    return xui.nsx(`
        <div>
            <h1>count: ${count.value}</h1>
            <p>This is a simple example of a template literal</p>
        </div>
   `)
 
}

module.exports = App;