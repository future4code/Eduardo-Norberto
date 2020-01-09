import axios from 'axios'

const setProfileToSwipe = (profile) => ({
	type: "SET_PROFILE_TO_SWUPE",
	payload: {
		profile,
	}
})

export const clearSwipes = () => async (dispatch) => {
	await axios.put('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/eduardo/clear')
}

export const fetchProfileToSwipe = () => async (dispatch) => {
	const response = await axios.get('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/eduardo/person');

	dispatch(setProfileToSwipe(response.data.profile))
}