let express = require('express');
let app = new (express);
require('dotenv').config();

app.get('/',(req,res)=>res.send(`Hello Win Myo Thu`));

app.listen(process.env.PORT,()=>console.log(`Server is starting at Port at ${process.env.PORT}`));

