import { data as destinations} from "../data/data.js"

export function filterData(type, path){
    return destinations.filter((dest)=>  dest[type].toLowerCase() === path.toLowerCase())
}