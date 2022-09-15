import { BASE_URL } from "../constants/BASE_URL"
import axios from 'axios'
import { toast } from 'react-toastify';

export const updateCar = async (id, body) => {
    await axios.put(`${BASE_URL}/cars/${id}`, body)
        .then((res) => {
            toast.success("Car updated!", {
                position: toast.POSITION.TOP_CENTER
              })
        })
        .catch((error) => {
            toast.error(error.response.data.msg[0], {
                position: toast.POSITION.TOP_CENTER
            })        
        })
}

export const deleteCar = async (id) => {
    if (window.confirm("Do you really want to delete this car?")) {
        await axios.delete(`${BASE_URL}/cars/${id}`)
            .then((res) => {
                toast.success("Car deleted!", {
                    position: toast.POSITION.TOP_CENTER
                  })
                window.location.reload();
            })
            .catch((error) => {
                toast.error(error.response.data.msg[0], {
                    position: toast.POSITION.TOP_CENTER
                })            
            })
    }
}

export const createCar = async(body) => {
    await axios.post(`${BASE_URL}/cars`, body)
            .then((res) => {
                toast.success(`Car ${body.title} was created successfully`)
            })
            .catch((error) => {
                toast.error(error.response.data.msg[0], {
                    position: toast.POSITION.TOP_CENTER
                })    
            })
}

export const getCarById = async(id, setForm) => {
    axios
    .get(`${BASE_URL}/cars/${id}`)
    .then((res) => {
        setForm({
            title: res.data.title,
            brand: res.data.brand,
            price: res.data.price,
            age: res.data.age
        })
    })
    .catch((error) => {
        toast.error(error.response.data.msg[0], {
            position: toast.POSITION.TOP_CENTER
        })  
    })
}