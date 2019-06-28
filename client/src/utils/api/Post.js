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
            return axios.get(startUrl + "/api/forum/post", {
                params: conditions
            });
        },
        threadsBySubforum: (conditions) => {
            return axios.get(startUrl + "/api/forum/threads", {
                params: conditions
            })
        },
        repliesToPost: (conditions) => {
            return axios.get(startUrl + "/api/forum/replies", {
                params: conditions
            })
        }
    },
    create: {
        seed: () => {
            let threads = [];
            for (let i = 0; i < 10; i++) {
                threads.push( {
                    author: "Guy" + i,
                    title: "Title" + i,
                    subForum: "general",
                    body: "Thread content goes here. Sample text. Thread number " + i,
                    expires: Date.now(),
                    properties: {
                        reply: {
                            isReply: false,
                            repliesNum: 0
                        }
                    }
                })
            }
            return axios.post(startUrl + "/api/forum/seedthreads", {
                data: threads
            })
        }
    }
}