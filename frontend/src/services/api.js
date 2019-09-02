import axios from 'axios'

const api = axios.create({
    baseURL: 'http://rodrigofflima-com.umbler.net'
});

export default api;