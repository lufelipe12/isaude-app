import axios from 'axios'

const api = axios.create({
    "baseURL" : "https://fake-api-isaude.herokuapp.com/"
})

export default api