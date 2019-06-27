var express = require('express');
var router = express.Router();
let obj = {"hi":'h'};

/* GET home page. */
router.get('/bank/:txId', function (req, res, next) {
  let txId = req.params['txId'];
  res.render('index', { txId: txId, db: obj[txId]});
});


//bank payment
router.post('/bank/payment/:txId',function(req,res){

  let body = req.body;
  let redirectUrl = body['redirectUrl'];
  let txId = req.params['txId'];

  obj[txId] = redirectUrl;
  console.log(obj);
  res.status(200).send({'bankUrl': `http://localhost:4000/bank/${txId}`,"status":"pending"});
  
});

router.get('/bank/payment/:txId',function(req,res){
  let txId = req.params['txId'];
  console.log(obj);
  res.status(200).send({"status": "completed"});
});

router.get('/payment/:txId', function (req, res, next) {
  let query = req.query['status'];
  console.log(query);
  res.redirect("https://zomato.com");
})
module.exports = router;
