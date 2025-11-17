export function sendJSONResponse(res, code, data){
    res.setHeader("Content-Type", "application/json")
    res.statusCode = code
    res.end(JSON.stringify(data))

}