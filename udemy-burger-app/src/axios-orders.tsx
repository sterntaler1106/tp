import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-cb22d.firebaseio.com/'
});

export default instance;