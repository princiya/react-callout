export default (state = {isOpen: false, eventX: 0, eventY: 0}, action) => {
    console.log('action data from reducer', action.data);
    switch (action.type) {
        case 'TOGGLE': Object.assign(state, {isOpen: !state.isOpen, clientX: action.data.clientX, clientY: action.data.clientY});
            console.log('state after toggle from reducer', state);
            return Object.assign({}, state);
        default: return state;
    }
};
