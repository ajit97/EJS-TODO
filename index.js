const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const val = require(__dirname+"/date.js")

app.set('view engine', "ejs");

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));
var datas = [];
var works = [];
app.get("/",(req,resp)=>{
  console.log(val);
  
  currentDay = val.date();
  resp.render("first", {kindOfDay:currentDay, dos:datas});
});

app.post("/",(req,resp)=>{
  const button = req.body.list;
  if(button === "todo"){
    var data = req.body.do;
    datas.push(data);
    console.log(datas);
    resp.redirect("/"); 
  }
  else if(button == "Worklist"){
      var data = req.body.do;
      works.push(data);
      resp.redirect("/work"); 
  }
});

app.get("/work",(req,resp)=>{
  resp.render("list.ejs",{work:"Work List",list:works})
});

app.listen(3000,()=>{
  console.log("Server is listening ... ");
});