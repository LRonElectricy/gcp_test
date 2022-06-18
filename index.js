const express = require('express')
const app = express()

// // app.get('/',(req, res)=>res.send('LRON'))
// app.use(express.static('dist'))

// app.listen(8080,()=>console.log('running'))

//-----------------------------------------------------------------------------
// NodeJS App for GCP Cloud Functions deployed via GCP Cloud Build Triggers
// Copyleft (c) by Denis Astahov
//-----------------------------------------------------------------------------

exports.helloWorld = () => {
    // app.get('/',(req, res)=>res.send('LRON'))
    app.use(express.static('dist'))

    app.listen(8080, () => console.log('running'))
};
