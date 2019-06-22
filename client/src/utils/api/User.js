import axios from 'axios';
require("dotenv").config();
const PORT = process.env.REACT_APP_PORT;
const startUrl = `http://localhost:${PORT}`;

console.log(PORT);
console.log(startUrl);

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
                baseURL: startUrl,
                params: conditions
            })
        }
    },
    login: {
        test: (loginDetails) => {
            return axios.post(startUrl + "/api/user/dev/testlogin/", loginDetails);
        }
    },
    register: {
        one: (userObject) => {
            console.log(userObject);
            return axios.post(startUrl + "/api/user/register/", {
                data: userObject
            })
        },
        
        test: (userObject) => {
            console.log(userObject);

            return axios.post(startUrl + "/api/user/dev/testregister/", {
                data: userObject
            })
        }
    },
    delete: {
        test: {
            all: () => {
                return axios.delete(startUrl + "/api/user/dev/testdrop/");
            }
        }
    }
}