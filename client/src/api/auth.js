import axios from "./axios";

const API = "http://localhost:3000/api";

export const registerRequest = user => axios.post(`/registro`, user);

export const loginRequest = user => axios.post(`/ingreso`, user);

export const verifyTokenRequest = user => axios.get(`/verificar`, user);

export const getUsersRequest = () => axios.get("/users");