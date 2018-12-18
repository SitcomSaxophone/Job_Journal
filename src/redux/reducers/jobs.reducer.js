const jobs = (state = [], action) => {
    switch (action.type) {
        case 'SET_JOBS':
            console.log(action.payload);
            return action.payload;
        default: 
            return state;
    }
}

export default jobs;