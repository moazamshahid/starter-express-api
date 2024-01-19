const express = require('express')
const app = express()
const bodyParser = require('body-parser');
app.all('/', (req, res) => {
    console.log("Just got a request!")
    res.send('sharjeel anjum Nodejs Developer ')
})


app.use(express.json());
app.use(bodyParser.json());
app.get("/getAPi",(req,res)=>{

const name= req.body.name;

return res.status(200).json({message:`hi ${name}`});


})
app.listen(process.env.PORT || 3000)
