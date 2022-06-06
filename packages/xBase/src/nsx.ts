import { h } from 'snabbdom-ts';

const createElement = (type: any, props: any, ...children: any[]) => {
  // flatten the children
  // this to make todos.map(todo => <p>{todo}</p>) work in jsx
  // [['idly'], ['dosa', 'vada']] -> ['idly', 'dosa', 'vada']
  children = children.flat();

  // if type is a Class then
  // 1. create a instance of the Class
  // 2. call the render method on the Class instance
  if (type.prototype && type.prototype.isQndReactClassComponent) {
    const componentInstance = new type(props);

    // remember the current vNode instance
    componentInstance.__vNode = componentInstance.render();

    // add hook to snabbdom virtual node to know whether it was added to the actual DOM
    componentInstance.__vNode.data.hook = {
      create: () => {
        componentInstance.componentDidMount()
      }
    }

    return componentInstance.__vNode;
  }
  // if type is a function then call it and return it's value
  if (typeof (type) == 'function') {
    return type(props);
  }

  props = props || {};
  let dataProps: any = {};
  let eventProps: any = {};

  // This is to seperate out the text attributes and event listener attributes
  for(let propKey in props) {
    // event props always startwith on eg. onClick, onChange etc.
    if (propKey.startsWith('on')) {
      // onClick -> click
      const event = propKey.substring(2).toLowerCase();

      eventProps[event] = props[propKey];
    }
    else {
      dataProps[propKey] = props[propKey];
    }
  }

  // props -> snabbdom's internal text attributes
  // on -> snabbdom's internal event listeners attributes
  return h(type, { props: dataProps, on: eventProps }, children);
};

// component base class


// add a static property to differentiate between a class and a function

// to be exported like React.createElement, React.Component

export default createElement;

