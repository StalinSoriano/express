const express=require('express')
const router=express.Router()

router.get('/',(req,res,next)=>{//el méthod use recibe 4 o mas paramatros ('ruta',(req,res,next)=>{}) 
    //para enviar información al servidor usamos la función send()
    res.send('<h1>hello from server nodejs!</h1>') 
} )
module.exports=router