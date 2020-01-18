import axios from "axios"
import { routes } from "../containers/Router"
import { push } from "connected-react-router"

const baseUrl = 'https://us-central1-missao-newton.cloudfunctions.net/futureX/eduardo'


const getTrips = (trips) => ({
    type: 'GET_ALL_TRIPS',
    payload: {
        trips,
    }
})

const setCreateTrip = (newTrip) =>({
    type: 'SET_CREATE_TRIP',
    PAULOAD: {
        newTrip,
    }
})

const setApplication = (apply) =>({
    type: "SET_APPLICATION",
    payload: {
        apply,
    }
})

const getDetailTrip = (tripsDetails) => ({
    type: "GET_ALL_TRIPS_DETAILS",
    payload:{
        tripsDetails,
    }
})


export const getAllTrips = () => async (dispatch) => {
    const response = await axios.get(`${baseUrl}/trips`)

    dispatch(getTrips(response.data.trips))
}

export const createTrip = (name, planet, date, description, durationInDays) => async (dispatch) => {
    
    const token = localStorage.getItem("token");

    const newTrip = {
        name,
        planet,
        date,
        description,
        durationInDays,
        
    }

    try{
        await axios.post(`${baseUrl}/trips`, newTrip, {
            headers: {
                auth: token, 
            }
        })
        dispatch(setCreateTrip())
        window.alert("Cadastro de viagem realizado com sucesso!!!")
        dispatch(push(routes.listTrips));
    } catch(error) {
        console.log(error)
        window.alert("Erro na Criação de Viagens")
    }
}

export const applicationTrip = (name, age, applicationText, profession, country) => async (dispatch) => {
    
    const idApply = localStorage.getItem("xpto");

    const apply = {
        name,
        age,
        applicationText,
        profession,
        country,
    } 

    try {
        await axios.post(`${baseUrl}/trips/${idApply}/apply`, apply)
        dispatch(setApplication())
        window.alert("Candidatura realizada com sucesso!!!")
        dispatch(push(routes.detailsTrips));
    } catch(error){
        window.alert("Erro na candidatura!!!")
    }
}

export const getTripDetail = (tripId) => async (dispatch) => {

    const token = localStorage.getItem("token");

    const response = await axios.get(`${baseUrl}/trips/${tripId}`, token);

    dispatch(getDetailTrip(response.data.tripId))

}