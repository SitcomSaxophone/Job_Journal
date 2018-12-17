const jobs = (state = [], action) => {
    switch (action) {
        case 'SET_JOBS':
            return [...action.payload];
        default: 
            return state;
    }
}

export default jobs;