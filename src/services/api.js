// eslint-disable-next-line no-unused-vars
import axios from "axios";

const api = axios.create({
    baseURL: 'https://economia.awesomeapi.com.br/json'
})

export default {
    all(){
        return api.get('/all')
    }
}