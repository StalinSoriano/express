// const http = require('http');
const express= require('express');//importa la libreria express
const app =express();//llamas al metodo express
app.use(express.urlencoded({extended:true})) //sirve para poder tomar los argumentos del get o post
app.use('/add-product',(req,res,next)=>{//el métod use recibe 3 paramatros req,res,next
    //para enviar información al servidor usamos la función send()
    res.send('<form action="/product" method="POST"><input type="text" name="title"/><input type="text" name="size"/><button type="submit">add product</button></form>') 
} )
app.get('/product',(req,res,next)=>{
    console.log(req.body)// obtengo los argumentos de la url
    res.redirect('/')
})
app.use('/',(req,res,next)=>{//el méthod use recibe 4 o mas paramatros ('ruta',(req,res,next)=>{}) 
    //para enviar información al servidor usamos la función send()
    res.send('<h1>hello from server nodejs!</h1>') 
} )
app.listen(3000)//de esta manera queda mas simple y ya no se necesita utilizar el require('http')
// npm init -f
// npm install --save express
// npm install --save-dev nodemon
// agregar script package.json "start":"nodemon app.js"
// pasos crear Server
// importar librería express const express= require('express');
// metodo que esta pendiendo cuando se llama al servidor app.listen(3000) va al final
// llamar al método const app =express();
// si se necesita para tomar los argumentos app.use(express.urlencoded({extended:true}))
// gestionar rutas app.use('/ruta',(req,res,next)=>{})
// next() funciona para dar paso al siguiente método que sigue en el código
// obtener argumentos req.body req.body.nombreDelArgumento
// redireccionar paginas o ruts con res.redirect('/nombreRutas')
// para enviar la respuesta del server se usa send()  res.send('<h1>hello from server nodejs!</h1>') 
