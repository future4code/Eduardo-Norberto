const initialState = {
    allTripsDetails: [],
}

const tripsDetails = (state = initialState, action) => {
    switch(action.type){
        case "GET_ALL_TRIPS_DETAILS":
            return {...state, allTripsDetails: action.payload.tripsDetails}
        default:
            return state
    }
}

export default tripsDetails;