import QndReact from "./nsx";
import { __updater } from "./render";

export class Component {
    state: any;
    isQndReactClassComponent: boolean | undefined;
    constructor() { }
  
    componentDidMount() { }
  
    setState(partialState: any) {
      // update the state by adding the partial state
      this.state = {
        ...this.state,
        ...partialState
      }
      // call the __updater function that QndReactDom gave
      __updater(this);
    }
  
    render() { }
}

Component.prototype.isQndReactClassComponent = true;