const xui = require('../../../../lib/index').default;
// const xui = require('../../lib/index').default;

function App() {
    const store = new xui.createStore({
        count: 0
    })
    let state = store.getState();
    console.log(state)
    return (
        <div>
            {/* <h1>count: {store.getStateByKey('count', state)}</h1> */}
            <button onClick={() => console.log(0)}>Add to count</button>
        </div>
   ) 
 
}

module.exports = App;
