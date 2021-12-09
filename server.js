const bodyParser = require("body-parser");
const express = require("express");

const app = express();
// const port = 4000;
var dbconnection = require("./db");
// const { patch } = require("./routes/productsRoute");
var productsRoute = require("./routes/productsRoute");
var userRoute = require("./routes/userRoute");
const patch =require ('path');
app.use(bodyParser.json());
app.use("/api/products/", productsRoute);
app.use("/api/users/" , userRoute);

if (process.env.NODE_ENV === 'production')
{
  app.use('/', express.static('client/build'))

  app.get('*' , ( req ,res)=>{
    res.sendFile(patch.resolve(__dirname , 'client/build/index.html')
  })
  
}
  

  const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Node JS Server Started`));
