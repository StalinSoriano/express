// const http = require('http');
const express= require('express');//importa la libreria express
const app =express();//llamas al metodo express
app.use(express.urlencoded({extended:true})) //sirve para poder tomar los argumentos del get o post
app.use('/add-product',(req,res,next)=>{//el métod use recibe 3 paramatros req,res,next
    //para enviar información al servidor usamos la función send()
    res.send('<form action="/product" method="POST"><input type="text" name="title"/><input type="text" name="size"/><button type="submit">add product</button></form>') 
} )
app.use('/product',(req,res,next)=>{
    console.log(req.body)// obtengo los argumentos de la url
    res.redirect('/')
})
app.use('/',(req,res,next)=>{//el métod use recibe 3 paramatros req,res,next
    //para enviar información al servidor usamos la función send()
    res.send('<h1>hello from server nodejs!</h1>') 
} )
app.listen(3000)//de esta manera queda mas simple y ya no se necesita utilizar el require('http')
// npm init -f
// npm install --save express
// npm install --save-dev nodemon
// agregar script package.json "start":"nodemon app.js"
