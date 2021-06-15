const express = require('express');
const { route } = require('../../../firstexpress/routing/router');
const task = require('../model/task');
const router = express.Router();
const model =require('../model/task');

router.get('/',(req,res)=>{
    model.find({},(err, tasks)=>{
        if(err) throw err;
        res.render('index.ejs',{
            title:"Crud",
            tasks:tasks
        });      
    })
  
});
router.post('/add',(req,res)=>{
    let body = req.body;
    body.status = false;
    model.create(body,(err,task)=>{
        if(err) throw err;
        res.redirect('/');
    });
    console.log(body);
});

router.get('/turn/:id',(req,res)=>{
    let id = req.params.id;
    model.findById(id,(err,task)=>{
        if(err) throw err;
        task.status = !task.status;
        task.save().then(()=> res.redirect('/'))
    })
})

router.get('/delete/:id',(req,res)=>{
    let id = req.params.id;
    model.remove({_id:id},(err,task)=>{
        if(err) throw err;
        res.redirect('/');

    })
})
module.exports = router;