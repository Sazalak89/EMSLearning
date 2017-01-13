        var express = require("express");
        var app = express();
        // const crypto = require('crypto');
        var bodyParser = require('body-parser');
        // var mongoose = require('mongoose');
        // var User = require('./Models/user')
        // mongoose.connect('mongodb://localhost/EMS');

        app.use(bodyParser.urlencoded({ extended: true }));
        app.use(bodyParser.json());

        // // Register

        // app.post('/adduser', function(req,res){
            
        // if(req.body.firstname.length > 3)
        //     {
        //           User.find({email: req.body.email},function(err,users){
        //   if(err) throw err;
        //   if(users.length){
        //        res.send("User already exist")
        //   }else{
              
        //       const pass = crypto.createHmac('sha256', req.body.password)
        //            .update('d')
        //            .digest('hex');
        //       console.log(pass);
        //       req.body.password = pass
        //         User.create(req.body,function (err,user){

        //         if(err) {
        //             res.send("Some error occured during the creation" + err);
        //         } else {
        //             res.status(200);
        //             res.send(" New User added " + user.firstname  + " " +  user.lastname + "\n "  + user.email + " " + user.password);
        //         }
        //     });
        //   }
        //   });
        //     }else{
        //         res.send("Please enter atleast 3 characters for first name" );
        //     }

        // });

        // //Login

        // app.post('/login', function(req,res){

        //   User.find({email : req.body.email , password : req.body.password}, function(err, users){

        //     if(err) throw err;

        //     if(users.length == 1){
        //         console.log(users)
        //         res.send("User logged in with name:- " + users[0].firstname)
        //     }
        // else{
        //      res.send("Invalid data")
        // }
        // });
        // });


        // app.listen(3000, function () {
        //   console.log('Example app listening on port 3000!');
        // });

//Example
//get method

// app.get('/', function (req, res) {
//   res.send(req.query);
// })

//post method

// app.post('/', function (req, res) {
//   res.send(req.body)
// })



//put method
// app.put('/', function (req, res) {
//   res.send(req.body)
// })


//delete method
// app.delete('/', function (req, res) {
//   res.send(req.body)
// })

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})

