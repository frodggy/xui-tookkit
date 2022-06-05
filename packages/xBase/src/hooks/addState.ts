class state {
    value: any
    constructor(initialState: any) {
        this.value = initialState;
    }

    update(newState: any) {
        this.value = newState;
        window.location.href
    }
        
}


export default function addState(initialState: any): state {
    
    let signal = new state(initialState);

    return signal;
}