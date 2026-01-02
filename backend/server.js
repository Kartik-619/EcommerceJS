const express=require('express');
const cors=require('cors');
const PORT=3007;
const app=express();
const cookieParser = require("cookie-parser");


const login=require('./routers/login');
const register=require('./routers/register');

//middlewares
app.use(
    cors({
      origin: "http://localhost:5173", // exact frontend origin
      credentials: true,               // allow cookies
    })
  );app.use(express.json());
app.use(cookieParser());


app.use('/login',login);
app.use('/register',register);
app.use('/api/products',require('./routers/Product'));
app.use('/api',require('./routers/cart'));
app.use('/api',require('./routers/ordersummary'));

app.listen(PORT,()=>{
    console.log('the server is running',PORT);
})