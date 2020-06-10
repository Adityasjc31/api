const express = require('express')
const router = express.Router();

const Server = require('../models/DataBase1');

router.get('/', async (req, res) => {
    try {
        const server = await Server.find();
        res.json(server);
    }
    catch (error) {
        res.send("Error 1 : " + error);
    }
});

router.get('/:id', async (req, res) => {
    try {
        const server = await Server.findById(req.params.id);
        res.json(server);
    }
    catch (error) {
        res.send("Error 1 : " + error);
    }
});

router.post('/', async (req, res) => {
    const svr = new Server({
        name: req.body.name,
        id: req.body.id,
        sub: req.body.sub
    });

    try {
        const a1 = await svr.save();
        res.json(a1);
    }
    catch (error) {
        res.send("Error 2 " + error);
    }
}
)

router.patch('/:id',async(req,res)=>
{
    try {
        const svr = await Server.findById(req.params.id);
        console.log(svr);
        svr.visit = req.body.sub;
        console.log(req.body.sub);
        //delete to delete
        const a1=await svr.save();
        res.json(a1);
    } catch (error) {
        res.send(error)
    }
})
module.exports = router