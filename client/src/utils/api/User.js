import axios from 'axios';
require("dotenv").config();
const PORT = process.env.REACT_APP_PORT;

export default {
    get: {
        one: (conditions) => {
            return axios.get("/api/user/", {
                params: conditions
            });
        },
        test: (conditions) => {
            console.log("You clicked it.");
            console.log(`Conditions: ${conditions}`);
            
            
            return axios.get("/api/user/dev/test/", {
                baseURL: `http://localhost:${PORT}`,
                params: conditions
            })
        }
    }
}