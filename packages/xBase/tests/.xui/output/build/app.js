const xui = require('../../../../lib/index').default; // const xui = require('../../lib/index').default;


function App() {
  const store = new xui.createStore({
    count: 0
  });
  let state = store.getState();
  console.log(state);
  return xui.nsx("div", null, xui.nsx("button", {
    onClick: () => console.log(0)
  }, "Add to count"));
}

module.exports = App;