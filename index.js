// const express = require('express')
// const app = express()

// // app.get('/',(req, res)=>res.send('LRON'))
// app.use(express.static('dist'))

// app.listen(8080,()=>console.log('running'))

//-----------------------------------------------------------------------------
// NodeJS App for GCP Cloud Functions deployed via GCP Cloud Build Triggers
// Copyleft (c) by Denis Astahov
//-----------------------------------------------------------------------------

const express = require('express')


exports.helloWorld = (req, res) => {
  // const app = express()

  // app.get('/',(req, res)=>res.send('LRON'))
  // app.use(express.static('dist'))

  // app.listen(80, () => console.log('running'))
  const message = "<font color='blue'>СloudFunction of Denis Astahov!</font><br><b>App Version 1.2 staging!</b>";
  res.status(200).send(message);
};
