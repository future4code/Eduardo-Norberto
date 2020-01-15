import axios from 'axios';

const baseUrl = 'https://us-central1-missao-newton.cloudfunctions.net/futureX/eduardo'

export const login = (email, password) => async (dispatch) => {

    const data = {
        email: email,
        password: password,
    }

    try {
    const response = await axios.post(`${baseUrl}/login`, data);

    window.localStorage.setItem("token", response.data.token);
    } catch (error){
        console.log(error);
        window.alert("Erro de login")
    }
}
