const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");
const mongoose = require("mongoose");
var app = express();

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));
var con1 = mongoose.createConnection("mongodb://localhost:27017/project", {useNewUrlParser: true});
var con2 = mongoose.createConnection("mongodb://localhost:27017/login", {useNewUrlParser: true});
var con3 = mongoose.createConnection("mongodb://localhost:27017/review", {useNewUrlParser: true});

const dataSchema = new mongoose.Schema({
  _id: Number,
  name: String,
  description: String,
  lat: Number,
  lon: Number,
  Prizer: String,
  img: String
});

const loginSchema = new mongoose.Schema({
  _id: Number,
  uname: String,
  pass: String
});

const reviewSchema = new mongoose.Schema({
  _id: Number,
  name: String,
  desc: String
});

const Detail =  con1.model("Detail",dataSchema);
const Login =  con2.model("Login",loginSchema);
const Review =  con2.model("Review",loginSchema);

/* const detail = new Detail({
  _id: 20,
  name:"West Coast Park",
  description:"West Coast Parl is a park located at the south-westernmost corner of Queenstown in Singapore.It runs parallel to West Coast Highway.The park covers an area of roughtly 50 hectres.",
  lan:1.2914,
  lon:103.7667,
  category:"Garden",
  Prizer:"$30",
  img:" https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1Gcq5XpZkbcNcAz4D4HPNd4DRQbZBJtAlYQ&usqp=CAU"
})

detail.save();
*/
app.get("/",function(req, res){
  res.sendFile(__dirname + "/index.html");
});

var name = [];
var desc = [];
var lat = [];
var lon = [];
var src = [];
var prizes = [];
var numprices = [];
var intprizes = [];
var total = 0;
app.post("/",function(req,res){
  var days = Number(req.body.days);
  var boxes = Array(req.body.boxes);
  console.log(boxes);
  Detail.find(function(err,arr){
    if(err){
      console.log(err);
    }
    else{
      var i;
      for(i=0;i<20;i++){
        name[i] = arr[i].name;
        desc[i] = arr[i].description;
        lat[i] = arr[i].lat;
        lon[i] = arr[i].lon;
        src[i] = arr[i].img;
        prizes[i] = arr[i].Prizer;
        intprizes[i] = prizes[i].slice(1,prizes[i].length);
        numprices[i] = parseInt(intprizes[i]);
      }
      if(days===4){
        // for(i=0;i<20;i++){
        //   if(cats.includes(category[i]) && days!=0){
        //     suggestions[ini] = i;
        //     total=total+numprices[i];
        //     days--;
        //   }
        // }
      total=0;
      for(i=0;i<4;i++){
       total=total+numprices[i];
     }
      res.render('travel4',{var1: name[0],
                            desc1: desc[0],
                            var2: name[1],
                            desc2: desc[1],
                            var3: name[2],
                            desc3: desc[2],
                            var4: name[4],
                            desc4: desc[4],
                            lat1:lat[0],
                            lon1:lon[0],
                            lat2:lat[1],
                            lon2:lon[1],
                            lat3:lat[2],
                            lon3:lon[2],
                            lat4:lat[4],
                            lon4:lon[4],
                            price1:prizes[0],
                            price2:prizes[1],
                            price3:prizes[2],
                            price4:prizes[4],
                            src1:src[0],
                            src2:src[1],
                            src3:src[2],
                            src4:src[4],
                            total:total
                          })
    }
    if(days===3){
      total=0;
      for(i=0;i<3;i++){
        total=total+numprices[i];
      }
      res.render('travel3',{var1: name[0],
                            desc1: desc[0],
                            var2: name[1],
                            desc2: desc[1],
                            var3: name[2],
                            desc3: desc[2],
                            lat1:lat[0],
                            lon1:lon[0],
                            lat2:lat[1],
                            lon2:lon[1],
                            lat3:lat[2],
                            lon3:lon[2],
                            price1:prizes[0],
                            price2:prizes[1],
                            price3:prizes[2],
                            src1:src[0],
                            src2:src[1],
                            src3:src[2],
                            total:total
                            })
    }
    if(days===5){
      total=0;
      for(i=0;i<5;i++){
        total=total+numprices[i];
      }
      res.render('travel5',{var1: name[0],
                            desc1: desc[0],
                            var2: name[1],
                            desc2: desc[1],
                            var3: name[2],
                            desc3: desc[2],
                            var4:name[4],
                            desc4:desc[4],
                            var5:name[5],
                            desc5:desc[5],
                            lat1:lat[0],
                            lon1:lon[0],
                            lat2:lat[1],
                            lon2:lon[1],
                            lat3:lat[2],
                            lon3:lon[2],
                            lat4:lat[4],
                            lon4:lon[4],
                            lat5:lat[5],
                            lon5:lon[5],
                            price1:prizes[0],
                            price2:prizes[1],
                            price3:prizes[2],
                            price4:prizes[4],
                            price5:prizes[5],
                            src1:src[0],
                            src2:src[1],
                            src3:src[2],
                            src4:src[4],
                            src5:src[5],
                            total:total
                            })
    }
    if(days===6){
      total=0;
      for(i=0;i<6;i++){
        total=total+numprices[i];
      }
      res.render('travel6',{var1: name[0],
                            desc1: desc[0],
                            var2: name[1],
                            desc2: desc[1],
                            var3: name[2],
                            desc3: desc[2],
                            var4:name[4],
                            desc4:desc[4],
                            var5:name[5],
                            desc5:desc[5],
                            var6:name[6],
                            desc6:desc[6],
                            lat1:lat[0],
                            lon1:lon[0],
                            lat2:lat[1],
                            lon2:lon[1],
                            lat3:lat[2],
                            lon3:lon[2],
                            lat4:lat[4],
                            lon4:lon[4],
                            lat5:lat[5],
                            lon5:lon[5],
                            lat6:lat[6],
                            lon6:lon[6],
                            price1:prizes[0],
                            price2:prizes[1],
                            price3:prizes[2],
                            price4:prizes[4],
                            price5:prizes[5],
                            price6:prizes[6],
                            src1:src[0],
                            src2:src[1],
                            src3:src[2],
                            src4:src[4],
                            src5:src[5],
                            src6:src[6],
                            total:total
                            })
    }
  }
  })

});

app.post("/review", function(req,res){
  var contactname = req.body.name;
  var contactmessage = req.body.message;
  let count = 5;
  const detail = new Login({
  _id: ++count,
  name: req.body.uname,
  desc: req.body.message
  })

  detail.save();
  res.render('index1',{
                      name1:contactname,
                      message1:contactmessage
  })
})
app.post("/login", function(req,res){
  let count = 5;
  const detail = new Login({
  _id: ++count,
  uname: req.body.uname,
  pass: req.body.pass
  })

  detail.save();

  res.sendFile(__dirname + "/index.html");
})

app.post("/download", function(req,res){
  res.download("./public/Safety.pdf");
})
app.listen(3000, function(){
  console.log("Server is running");
});
