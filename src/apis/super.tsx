import axios from "axios";

export default axios.create({
    baseURL: 'https://superhero-search.p.rapidapi.com/api/',
    headers: {
        'X-RapidAPI-Key': 'ae9171a8fbmsh26e3b73616d4dc1p1e51f1jsnd4121cd446e0',
        'X-RapidAPI-Host': 'superhero-search.p.rapidapi.com'
    }
})