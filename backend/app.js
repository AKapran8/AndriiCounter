const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const Count = require('./models/count');

const app = express();

mongoose.connect('mongodb+srv://dbUser:Z!8sW-e_BN+ZK.K@cluster0.ntf46.mongodb.net/counter?retryWrites=true&w=majority')
  .then(() => {
    console.log('Connecterd to database')
  })
  .catch(() => {
    console.log('Connection failed!');
  });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE, OPTIONS");
  next();
});

app.post("/counts", (req, res, next) => {
  const count = new Count({
    date: req.body.date
  })
  count.save().then(createdCount => {
    res.status(201).json({
      message: "Counnt added successfully",
      countId: createdCount._id,
    });
  });
});


app.get("/counts", (req, res, next) => {
  Count.find().then((val) => {
    res.status(200).json({
      message: "Count fetched successfully",
      counts: val
    });
  });
});

app.delete("/counts/:id", (req,res,next) => {
  Count.deleteOne({_id: req.params.id}).then(result => {
    console.log(result);
    res.status(200).json({message: "Count deleted!"});
  });
});

module.exports = app;





