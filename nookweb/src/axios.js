import axios from 'axios';

const instance = axios.create({
    baseURL:'https://nookweb-5fb61.firebaseio.com/'
});

export default instance;