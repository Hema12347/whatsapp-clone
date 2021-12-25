import axios from 'axios'

const instance = axios.create({
    baseURL: "https://whatsapp-chat--clone.herokuapp.com"
})

export default instance