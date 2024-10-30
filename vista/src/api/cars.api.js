import axios from 'axios'

const carsApi = axios.create({
   baseURL : 'http://localhost:8000/crud/api/car/crud/'
})

export const getAllCars = () => carsApi.get ('/');

export const createCar = (car) => carsApi.post ('/',car);

export const deleteCar = (id) => carsApi.delete(`/${id}/`);

