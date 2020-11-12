const express = require('express');
const router = express.Router();
const Item = require('../../model/item')

router.get('/', (req, res, next)=>{
    Item.find()
    .sort({ date:'desc' })
    .then((items)=>{
        res.json(items)
    })
    .catch(err =>{
        console.log(err);
        next(err);
    })
})

router.post('/', (req, res)=>{
    const body ={
        name : req.body.name,
    }

    const newItem = new Item(body);

    newItem.save().then(item => {
        res.json(item);
    })
})

router.delete('/:id', (req, res)=>{
    const id = req.params.id;

    Item.findByIdAndDelete(id, (err, id)=>{
        if(err){
            res.status(400).json({
                message: err,
            })
        }

        res.json({
            message: 'Item deleted.'
        })
    })
})

module.exports = router;