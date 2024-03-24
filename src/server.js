const express= require('express')
const app= express();
const cors= require('cors') /* used for policy purposes, not to be used in production */

app.use(cors());
app.use(express.json())

app.get('/hello',(req,res)=>{
  res.send('hello');
} )

app.post('/api/register', (req, res)=>{
  console.log(req.body);
  console.log({status: 'ok'});
})

app.listen(5000, ()=>{
  console.log('Server started at port: 5000');
})
