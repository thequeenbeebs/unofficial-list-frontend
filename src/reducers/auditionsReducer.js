const auditionsReducer = (state = { auditions: [], loading: false }, action) => {
    switch(action.type) {
        case 'LOADING_AUDITIONS':
                return {
                    ...state, 
                    auditions: [...state.auditions], 
                    loading: true
                };
        
        case 'ADD_AUDITIONS':
            return {
                ...state,
                auditions: action.auditions,
                loading: false
            };

        default:
            return state;
    }
}

export default auditionsReducer;