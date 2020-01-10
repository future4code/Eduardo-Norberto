import axios from 'axios'

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
	
	await axios.put('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/eduardo/clear')
}

export const fetchProfileToSwipe = () => async (dispatch) => {
	const response = await axios.get('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/eduardo/person');

	dispatch(setProfileToSwipe(response.data.profile))
}

export const handleChoosePerson = (id, choice) => async (dispatch) => {

	
	await axios.post('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/eduardo/choose-person', {id, choice});

	dispatch(fetchProfileToSwipe())
}

export const handleMatches = () => async (dispatch) => {
	const response = await axios.get('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/eduardo/matches');

	dispatch(getMatches(response.data.matches))
}