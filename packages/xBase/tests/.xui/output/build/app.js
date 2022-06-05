const xui = require('../../../../lib/index').default;

function App() {
  let count = xui.addState(1);
  return xui.nsx("div", null, xui.nsx("h1", null, "count: $", count.value), xui.nsx("p", null, "This is a simple example of a template literal"));
}

module.exports = App;