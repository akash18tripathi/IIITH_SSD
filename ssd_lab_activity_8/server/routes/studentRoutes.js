const Query = require('../models/QuerySchema')
const express = require('express')
const router = express.Router()

const isAlive = (req, res, next) => {
    if(req.session.user){
        next()
        return
    }
    return res.status(401).send("Unauthorized...");
}


//router.use(isAlive)

router.get('/', async (req, res) => {
    try {
        const users = await Query.find();

        res.status(200).json({ "data": users })
    } catch (err) {
        res.status(500).send("Something went wrong!")
    }
})

router.get('/getMongoData', async (req, res) => {
    try {
        const users = await Query.find({}).sort({updatedAt:-1});
        console.log(users);
        console.log("fetched");
        res.status(200).json({ "data": users });
    } catch (err) {
        res.status(500).send("Something went wrong!")
    }
})

router.post('/getMongoDataTA', async (req, res) => {
    try {
        const { ta_roll } = req.body;
        const users = await Query.find({ta_roll: ta_roll}).sort({updatedAt:-1});
        console.log(users);
        console.log("fetched");
        res.status(200).json({ "data": users });
    } catch (err) {
        res.status(500).send("Something went wrong!")
    }
})


router.get('/:roll', async (req, res) => {
    try {
        const roll = req.params.roll
        const user = await Student.findOne({ roll });

        if(!user){
            return res.status(200).json({ msg: "Student doesn't exist..." })
        }

        return res.status(200).json({ "data": user })
    } catch (err) {
        return res.status(500).send("Something went wrong!")
    }
})


router.post('/sendQuery', async (req, res) => {
    console.log(req.body);
    const { exam_name, course_name, question_num, ta_roll, std_roll, ta_comment ,std_comment, isActive } = req.body;
    if (!exam_name || !course_name || !ta_roll || !std_roll || !std_comment) {
        return res.status(400).send("Something is missing");
    }

    const newStd = new Query({ exam_name, course_name, question_num, ta_roll, std_roll, ta_comment ,std_comment, isActive });
    const savedStd = await newStd.save();

    if (savedStd) {
        return res.status(200).json({ data: newStd })
    }
    else {
        return res.status(500).json({ msg: "Couldn't save student details" })
    }
})

router.post('/postResponse', async (req, res) => {
    const { ta_response , id} = req.body;
    console.log(req.body);
    console.log(ta_response);
    console.log(id);
    var myquery = { _id: id };
  var newvalues = {$set: {ta_comment: ta_response} };
    const newStd = Query.updateOne(myquery, newvalues, function(err, res) {
        if (err) throw err;
        console.log("1 document updated");
      });

    if (newStd) {
        return res.status(200).json({ data: "heyy" })
    }
    else {
        return res.status(500).json({ msg: "Couldn't save student details" })
    }
})


router.put('/', async (req, res) => {
    console.log(req.body);
    const { name, roll, programme, courses } = req.body;

    if (!name || !roll || !programme) {
        return res.status(400).send("Something is missing");
    }

    const existStd = await Student.findOne({ roll });
    if (!existStd) {
        return res.status(500).json({ msg: "Student doesn't exist..." });
    }

    const std = await Student.findByIdAndUpdate(existStd.id, { name, roll, programme, courses }, { new: true })

    if (std) {
        return res.status(200).json({ data: std })
    }
    else {
        return res.status(500).json({ msg: "Couldn't update student details" })
    }
})


router.delete('/:roll', async (req, res) => {
    try {
        const roll = (req.params.roll)
        const result = await Student.findOneAndDelete({ roll })
        
        if (result) {
            res.status(200).json({ msg: "Delete Successfull" })
        }
        else {
            res.status(500).json({ msg: "Couldn't delete student" })
        }
    }
    catch (err) {
        console.log(err);
        return res.status(500).json({ msg: "Something went wrong..." })
    }
})

module.exports = router