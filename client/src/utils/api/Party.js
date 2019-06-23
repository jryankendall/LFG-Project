import axios from 'axios';
require("dotenv").config();
const PORT = process.env.REACT_APP_PORT;
const startUrl = `http://localhost:${PORT}`;

export default {
    post: (partyObject) => {
        return axios.post(startUrl + "/api/party/new", {
            data: partyObject
        })
    }
}