import axios from 'axios';
require("dotenv").config();
const PORT = process.env.PORT || process.env.REACT_APP_PORT || 3001;
var startUrl = `http://localhost:${PORT}`;
if (process.env.NODE_ENV === "production") {
    startUrl = ``;
};

export default {
    get: {
        onePost: (conditions) => {
            return axios.get("/api/forum/post", {
                params: conditions
            });
        }
    }
}