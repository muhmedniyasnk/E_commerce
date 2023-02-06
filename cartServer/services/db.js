//1 import mongoose

const mongoose=require('mongoose')

//2 Define connection string

mongoose.connect('mongodb://localhost:27017/cart',()=>{
    console.log('Connected to mongoDB')
})

//model creation

const product=mongoose.model('product',{
     id:Number,
     title:String,
     price:Number,
     description:String,
     category:String,
     image:String,
     rating:{
        rate:Number,
        count:Number
     }
})

//create a model for wishlist
const wishlist =mongoose.model('wishlist',{
    id:Number,
     title:String,
     price:Number,
     description:String,
     image:String
})

//4 export

module.exports={
    product,
    wishlist
}