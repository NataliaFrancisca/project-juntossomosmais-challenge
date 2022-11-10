export const reducerFilter = (state = {state: [], gender: []}, action) => {
    switch(action.type){
        case 'filter/add/state':
            return {...state, state: [...state.state, action.payload]};
        case 'filter/remove/state':
            return {...state, state: state.state.filter(filter => filter !== action.payload)};

        case 'filter/add/gender':
            return {...state, gender: [...state.gender, action.payload]};
        case 'filter/remove/gender':
            return {...state, gender: state.gender.filter(filter => filter !== action.payload)};
        default:
            return state;
    }
}

export const reducerSearchMember = (state = "", action) => {
    switch(action.type){
        case "search/member":
            return action.payload;
        default: 
            return state;
    }
}
