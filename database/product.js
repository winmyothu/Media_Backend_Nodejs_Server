let db = require('./db');
let Product = db.Product;

let save= (obj)=>{
    return new Promise((resolve,reject)=>{
        obj["since"]= Date.now();
        let product = new Product(obj);
        product.save((err,data)=>{
            if(err) reject(err);
            resolve(data);
        });
    })
}

let all =()=>{
    return new Promise((resolve,reject)=>{
        Product.find({},(err,data)=>{
            if(err) reject(err);
            resolve(data);
        })
    })
}

let destroy = (id)=>{
    return new Promise((resolve,reject)=>{
        Product.deleteOne({_id:id},err=>{
            if(err) reject(err);
            resolve('Ok');
        })
    })
}

let paginate = (start,count)=>{
    let option={
        sort:{_id:1},
        lean:true,
        page:start,
        limit:count,
    }

    console.log('start ;',start,'count :',count);

    return new Promise((resolve,reject)=>{
        Product.paginate({},option,(err,data)=>{
            if(err) reject(err);
            resolve(data);
        })
    })
}

module.exports={
    save,all,destroy,paginate

}