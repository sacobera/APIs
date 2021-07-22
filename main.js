const residentsBtn = document.querySelector ('#residents-btn')

const axios = require("axios")

const alderaan = axios.get("https://swapi.dev/api/planets/2/")

function clicked() {
    console.log("button clicked") 
}

function responseVariable(res) {
    console.log(res.data);
}
axios.get("https://swapi.dev/api/planets/2/").then(responseVariable)

residentsBtn.addEventListener('click', clicked)