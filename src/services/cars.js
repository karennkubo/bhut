import { BASE_URL } from "../constants/BASE_URL"
import axios from 'axios'

export const changeCarDetails = async (id, body) => {
    await axios.put(`${BASE_URL}/cars/${id}`, body)
        .then((res) => {
            alert("Car updated!")
        })
        .catch((error) => {
            alert(error.data.msg)        })
}

export const deleteCar = async (id) => {
    if (window.confirm("Do you really want to delete this car?")) {
        await axios.delete(`${BASE_URL}/cars/${id}`)
            .then((res) => {
                alert("Car deleted!")
                window.location.reload();
            })
            .catch((error) => {
                alert(error.data.msg)            })
    }
}

export const createCar = async(body) => {
    await axios.post(`${BASE_URL}/cars`, body)
            .then((res) => {
                alert(`Car ${body.title} was created successfully`)
            })
            .catch((error) => {
                alert(error.data.msg)
            })
}