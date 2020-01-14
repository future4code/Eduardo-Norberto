import axios from "axios"

const baseUrl = 'https://us-central1-missao-newton.cloudfunctions.net/futureX/eduardo'

const getTrips = (trips) => ({
    type: 'GET_ALL_TRIPS',
    payload: {
        trips
    }
})

export const getAllTrips = () => async (dispatch) => {
    const response = await axios.get(`${baseUrl}/trips`)

    dispatch(getTrips(response.data.trips))
}

