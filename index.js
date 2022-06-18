const express = require('express')
const app = express()

// app.get('/',(req, res)=>res.send('LRON'))
app.use(express.static('dist'))

app.listen(8080,()=>console.log('running'))