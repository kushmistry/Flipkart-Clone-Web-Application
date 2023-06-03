import axios from 'axios';

const URL = "http://localhost:8000/";

const authenticateUser = async (data) => {
    try {
        return await axios.post(`${URL}signup`, data)        
    } catch (error) {
        console.log(`Error Occure while AuthenticateUser api call: ${error}`)
    }
}

export default authenticateUser;