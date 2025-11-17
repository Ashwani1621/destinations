import http from 'node:http'
import { getDataFromDB } from './database/db.js'
import { sendJSONResponse } from './utils/sendJSONResponse.js'
import { filterData } from './utils/filterData.js'

import { getDataFromQuery } from './utils/getDataFromQuery.js'

const PORT = 8000

const server = http.createServer(async (req, res) => {
  const destinations = await getDataFromDB()
  
  const urlObj = new URL(req.url, `http://${req.headers.host}`) 
  const paramObj = Object.fromEntries(urlObj.searchParams)
  
  if (urlObj.pathname === '/api' && req.method === 'GET') {
      
      const filterData = getDataFromQuery(destinations, paramObj)
      
      sendJSONResponse(res, 200, filterData)

  } else if (req.url.startsWith('/api/continent') && req.method === 'GET') {

      const path = req.url.split('/').pop()
      const data = filterData(destinations,'continent', path)
      sendJSONResponse(res, 200, data)

  } else if (req.url.startsWith('/api/country') && req.method === 'GET') {

      const path = req.url.split('/').pop()
      const data = filterData(destinations, 'country', path)
      sendJSONResponse(res, 200, data)

  } else {

    res.setHeader('Content-Type', 'application/json')
    sendJSONResponse(res, 404, ({
      error: "not found",
      message: "The requested route does not exist"
    }))   

  }
})

server.listen(PORT, () => console.log(`Connected on port: ${PORT}`))
