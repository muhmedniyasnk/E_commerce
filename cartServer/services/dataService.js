const db= require('./db')

//get all the products from db

const getProducts =()=>{
   return db.product.find().then(
    (result)=>{
        if(result){
            return{
                status:true,
                statusCode:200,
                products:result
            }
        }
        else{
            return{
                status:false,
                statusCode:404,
                message:'No product found'
            }
        }
    }

    )
}


const addtowishlist=(id,title,price,image,description)=>{
    //data added to mongodb -- create a model in db.js

    return db.wishlist.findOne({id}).then(
        (result)=>{
            if(result){ 
                return{
                status:true,
                statusCode:200,
                message:"product already exists"
            }
        }
        else{
            const newproduct =new db.wishlist({id,title,price,image,description})
            newproduct.save()//to save data into mongodb
            return{
                status:true,
                statusCode:200,
                message:"product added to wishlist"
            }
        }
        }
    )
}



//to get wishlist

const getwishlist=()=>{
    //data added to mongodb -- create a model in db.js

    return db.wishlist.find().then(
        (result)=>{
            if(result){
                return{
                status:true,
                statusCode:200,
                products:result
            }
        }
        else{
           
            return{
                status:false,
                statusCode:404,
                message:"Your Wishlist is empty"
            }
        }
        }
    )
}

 deletewish=(id)=>{

    return db.wishlist.deleteOne({id}).then(
        (result)=>{
            if(result){
            //     return{
            //     status:true,
            //     statusCode:200,
            //     wishlist:result,
            //     message:"product removed"
            // }
            return db.wishlist.find().then(
                (result)=>{
                    if(result){
                        return{
                        status:true,
                        statusCode:200,
                        wishlist:result,
                        message:"product removed successfully"
                    }
                }
                else{
                   
                    return{
                        status:false,
                        statusCode:404,
                        message:"product not found"
                    }
                }
                }
            )
        }
        else{
           
            return{
                status:false,
                statusCode:404,
                message:"Your Wishlist is empty"
            }
        }
        }
    )
}
module.exports ={
    getProducts,
    addtowishlist,
    getwishlist,
    deletewish
}