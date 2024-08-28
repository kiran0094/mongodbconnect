var express = require('express');
var router = express.Router();
const Usermodel=require('./users');
const { route } = require('../app');

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log("http://localhost:3000")
  res.render('index');
});
router.get('/create',async function(req,res){
 const createduser=await Usermodel.create({
    username:"kirankumm",
    name:"kiran",
    age:27
  });
  res.send(createduser)
}
)

router.get('/alluser',async(req,res)=>{
  const user=await Usermodel.find()
res.send(user)
}
)

router.get('/delete',async(req,res)=>{
  const deleteduser=await Usermodel.findOneAndDelete({
    username:"kirankumm"
  })
})

module.exports = router;
