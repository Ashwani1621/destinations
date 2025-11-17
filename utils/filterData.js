export function filterData(data, type, path){
    return destinations.filter((dest)=>  dest[type].toLowerCase() === path.toLowerCase())
}