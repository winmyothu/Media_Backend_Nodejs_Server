let express = require('express');
let app = new (express);
require('dotenv').config();

const cat =require('./database/cat');
/*
let catObj={
    id:2,
    name:'Computer',
    image:'computer.png',
    since:Date.now()
}

cat.save(catObj)
.then(res=>console.log(res))
.catch(err=>console.log(err));

let catObj={
    id:'60fe7b180faf080c7ca9fbd6',
    name:'Car'
}

cat.update(catObj)
.then(res=>console.log(res))
.catch(err=>console.log(err));


cat.destroy('60fe7f58b1422e16bcc229ee')
.then(res=>console.log(res))
.catch(err=>console.log(err));
*/

let seedCat = require('./database/seeder')

seedCat.seedCat();

app.listen(process.env.PORT,()=>console.log(`Server is starting at Port at ${process.env.PORT}`));

