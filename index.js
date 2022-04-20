const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello from node World!!!!!!!!');
});

const users = [
    {
        id: 1,
        name: 'Abdul',
        email: 'abdul@gmail.com',
        phone: '017788787878',
        job: 'eating',
    },
    {
        id: 2,
        name: 'Kabdul',
        email: 'kabdul@gmail.com',
        phone: '0177887879878',
        job: 'eating',
    },
    {
        id: 3,
        name: 'Dabdul',
        email: 'dabdul@gmail.com',
        phone: '0177887687878',
        job: 'eating',
    },
    {
        id: 4,
        name: 'Sabdul',
        email: 'sabdul@gmail.com',
        phone: '0177883787878',
        job: 'eating',
    },
    {
        id: 5,
        name: 'Tabdul',
        email: 'tabdul@gmail.com',
        phone: '0177828787878',
        job: 'eating',
    },
    {
        id: 6,
        name: 'Gabdul',
        email: 'gabdul@gmail.com',
        phone: '0177818787878',
        job: 'eating',
    },
    {
        id: 7,
        name: 'Fabdul',
        email: 'Fabdul@gmail.com',
        phone: '0177878787878',
        job: 'eating',
    },
]

app.get('/users', (req,res) => {
    if(req.query.name){
        const search = req.query.name.toLowerCase();
        const matched = users.filter(user => user.name.toLowerCase().includes(search));
        res.send(matched);
    }
    else{
        res.send(users);
    }
});

app.get('/user/:id', (req, res) => {
    console.log(req.params);
    const id = req.params.id;
    const user = users.find(u => u.id == id);
    res.send(user);
});

app.post('/user', (req, res) => {
    console.log(req.body);
    const user = req.body;
    user.id = users.length + 1;
    users.push(user);
    res.send(user);
});

app.listen(port, () => {
    console.log('Listen port', port);
})