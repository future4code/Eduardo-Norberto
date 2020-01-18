import axios from 'axios';
import { push } from "connected-react-router";
import { routes } from "../containers/Router";



const baseUrl = 'https://us-central1-missao-newton.cloudfunctions.net/futureX/eduardo'



const login = (email, password) => async (dispatch) => {

    const data = {
        email,
        password,
    }

    try {
        const response = await axios.post(`${baseUrl}/login`, data);

        window.localStorage.setItem("token", response.data.token);
        window.localStorage.setItem("xpto", response.data.user.id)
        window.alert("Login efetua com sucesso")
        dispatch(push(routes.admin));
    } catch (error){
        console.log(error);
        window.alert("Erro de login")
    }
}


export default login;
