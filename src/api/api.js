import axios from "axios";

function  getAnswer  (url, callback) {
    axios.get(url)
        .then(response => callback(response.data))
}

export  {
    getAnswer
}