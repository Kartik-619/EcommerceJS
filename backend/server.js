const express=require('express');
const cors=require('cors');
const PORT=3007;
const app=express();

const login=require('./routers/login');
const register=require('./routers/register');

//middlewares
app.use(cors());
app.use(express.json());

app.use('/login',login);
app.use('/register',register);

app.listen(PORT,()=>{
    console.log('the server is running',PORT);
})