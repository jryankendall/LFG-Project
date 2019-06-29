import axios from 'axios';
require("dotenv").config();
const PORT = process.env.PORT || process.env.REACT_APP_PORT || 3001;
var startUrl = `http://localhost:${PORT}`;
if (process.env.NODE_ENV === "production") {
    startUrl = ``;
};

export default {
    post: (partyObject) => {
        return axios.post(startUrl + "/api/party/new", {
            data: partyObject
        })
    },
    get: (conditions) => {
        return axios.get(startUrl + "/api/party/search", {
            data: conditions
        })
    }
}