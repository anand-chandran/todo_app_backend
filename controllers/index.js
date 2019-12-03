
module.exports = {
    addTodo : (req , res) => {
        let body = req.body;
        if(!req.body.title || req.body.title < 1){
            res.status(400).send('Title unidentified or minimum of 1 char is required');
            return;
        } 
        const task = {
            ...body,
            id : tasks.length+1
            };
    if(body.id && body.title && body.label && body.status){
            tasks.push(task);
        }
    res.send(task);
    },
    addSubTodo : (req , res) => {
        let parent_id = parseInt(req.params.parent_id);
        console.log(typeof parent_id)
        let body = req.body;
        console.log(body)
        if(!req.body.title || req.body.title < 1){
            res.status(400).send('Title unidentified or minimum of 1 char is required');
            return;
        } 
        let index = tasks.map(function(e) { return e.id; }).indexOf(parent_id);
    
        console.log(index)
        const task = {
            ...body,
            id : tasks[index].subtasks.length+1
            };
        tasks[index].subtasks.push(task)
        res.send(tasks[index]);

    },

    updateTodo : (req, res) => {
        const task = tasks.find(t => t.id === parseInt(req.params.id) );
        if(!task){
            res.status(404).send('The task with the given ID not found');
            return;
        } 
        
        if(!req.body.title || req.body.title < 1){
            res.status(400).send('Title unidentified or minimum of 1 char is required');
            return;
        } 
    
        task.title = req.body.title;
        res.send(task)
    },

    showTodo : (req, res) => {
        const task = tasks.find(t => t.id === parseInt(req.params.id) );
        if(!task){
            res.status(404).send('The task with the given ID not found');
            return;
        } 
        res.send(task);
    },

    deleteTodo : (req, res) => {
        const task = tasks.find(t => t.id === parseInt(req.params.id) );
        if(!task){
            res.status(404).send('The task with the given ID not found');
            return;
        } 
    
        const index = tasks.indexOf(task);
        tasks.splice(index, 1);
        res.send(task);
    }


}