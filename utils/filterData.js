import { data as destinations} from "../data/data.js"

export function filterCountry(req){
    const country = req.url.split('/').pop()
    return destinations.filter((dest) => dest.country.toLowerCase() === country.toLowerCase())
}

export function filterContinent(req){
    const continent = req.url.split('/').pop()
    return destinations.filter((dest) => dest.continent.toLowerCase() === continent.toLowerCase())
}

