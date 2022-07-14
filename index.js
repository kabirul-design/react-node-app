const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/',(req, res) =>{
    res.send('Hello World My New Website Backend !!!');
})

const users = [
    {id: 1, name: 'imdadul', email: 'imdadulres@gmail.com', phone: '01989059905'},
    {id: 2, name: 'Alamin', email: 'alaminres@gmail.com', phone: '01989059906'},
    {id: 3, name: 'Raju khan', email: 'khanRajures@gmail.com', phone: '01989059907'},
    {id: 4, name: 'Tareq jamil', email: 'tareqres@gmail.com', phone: '01989059908'},
    {id: 5, name: 'Dablu', email: 'jibonres@gmail.com', phone: '01989059909'},
    {id: 6, name: 'Tarikul', email: 'tarikulres@gmail.com', phone: '01989059910'},
]

// search query filter
app.get('/users', (req, res) =>{
    if(req.query.name){
        const search = req.query.name.toLowerCase();
        const matched = users.filter(user => user.name.toLowerCase().includes(search));
        res.send(matched);
    }
    else{
        res.send(users);
    }
   
})
// data id from api
app.get('/user/:id', (req, res) =>{
    console.log(req.params);
    const id = parseInt(req.params.id);
    const user = users.find(u =>u.id == id);
    res.send(user);
})

// receive the client side data
app.post('/user', (req, res) =>{
    console.log('request',req.body)
    const user = req.body;
    user.id = users.length + 1;
    users.push(user);
    res.send(user);
})

app.get('/fruits', (req, res) =>{
    res.send(['mango', 'komola', 'apple'])
})

app.listen(port, () =>{
    console.log('Listen To Port !!!', port);
})