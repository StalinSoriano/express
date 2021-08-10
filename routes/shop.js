const path= require('path')
const express=require('express')
const router=express.Router()

router.get('/',(req,res,next)=>{//el méthod use recibe 4 o mas paramatros ('ruta',(req,res,next)=>{}) 
    //para enviar información al servidor usamos la función send()
    res.sendFile(path.join(__dirname,'../','views','shop.html')) 
} )
module.exports=router