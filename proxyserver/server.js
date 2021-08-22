const express = require('express')
const app = express()
const cors = require('cors')
const axdata = require('./axdata.js')

app.use(cors())

app.get('/', async (req, res) => {
    const response = await axdata('중구', (error, {airquality}={})=>{
        if (error){
            console.log('error', error)
            responseInterceptor.send(error)
        }
        res.send(airquality)
    })
})
    
app.listen(8000, ()=> {
    console.log("The server is running at port 8000")
})