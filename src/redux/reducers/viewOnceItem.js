const viewOnceItem = (state = [], action) => {
    switch (action.type) {
        case 'SET_ALL_USER_ENTRIES':
            return action.payload;
        case 'VIEW_THIS_ITEM':
            return state[action.payload];
        default:
            return state;
    }
}

export default viewOnceItem;