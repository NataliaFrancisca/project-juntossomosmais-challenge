export const reducerFilter = (state = [], action) => {
    switch(action.type){
        case 'filter/add':
            return [...state, action.payload];
        case 'filter/remove':
            return state.filter(filter => filter !== action.payload);
        default:
            return state;
    }
}