import axios from 'axios'

const api = axios.create({
    "baseURL" : "https://api-isaude.herokuapp.com"
})

export default api