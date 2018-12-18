import moment from 'moment';

const jobs = (state = [], action) => {
    switch (action.type) {
        case 'SET_JOBS':
        for (let i = 0; i < action.payload.length; i++) {
            action.payload[i].dateAdded = moment(action.payload[i].dateAdded).format('L');
        }
            return action.payload;
        default: 
            return state;
    }
}

export default jobs;