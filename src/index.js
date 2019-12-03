const Joi = require('joi');
const express = require('express')
const cors = require('cors')
const app = express()

const port = process.env.PORT || 3000 ;
const routes = require('../routes/index');

app.use(cors())
app.use(express.json());
const tasks = [
    {
        "id" : 1,
        "title" : "Test 1",
        "label" : "Easy",
        "status": "pending",
        "subtasks" : [{"title": "sub1"}]
    },
    {
        "id" : 2,
        "title" : "Sub task for Test 1",
        "label" : "Easy",
        "status": "pending",
        "subtasks" : [{"title": "sub2"}]

    }
];
app.use(routes)

app.get('/api/tasks/show', (req, res) => {
    res.send(tasks);
});
app.listen(port, () => console.log(`Example app listening on port ${port}!`))