import axios from 'axios'

const baseUrl = 'https://us-central1-missao-newton.cloudfunctions.net/astroMatch/eduardo'

const setProfileToSwipe = (profile) => ({
	type: "SET_PROFILE_TO_SWIPE",
	payload: {
		profile,
	}
})

const getMatches = (matches) => ({
	type: "GET_MATCHES",
	payload: {
		matches,
	}
})

export const clearSwipes = () => async (dispatch) => {

	await axios.put(`${baseUrl}/clear`)
}

export const fetchProfileToSwipe = () => async (dispatch) => {
	const response = await axios.get(`${baseUrl}/person`);

	dispatch(setProfileToSwipe(response.data.profile))
}

export const handleChoosePerson = (id, choice) => async (dispatch) => {

	
	await axios.post(`${baseUrl}/choose-person`, {id, choice});

	dispatch(fetchProfileToSwipe())
}

export const handleMatches = () => async (dispatch) => {
	const response = await axios.get(`${baseUrl}/matches`);

	dispatch(getMatches(response.data.matches))
}