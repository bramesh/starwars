const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/families', function(req, res){
  res.json(
    [
      {
        "school": "Coleytown Elementary School",
        "familyName": "Aggarwal",
        "homePhone": "203-425-9567",
        "address": {
          "street": "6 Garden Ln",
          "city": "Westport",
          "state": "CT",
          "zip": "06880"
        },
        "parents": [
          {
            "first": "Komal",
            "last": "Vora",
            "email": "kvora@compuchild.com",
            "phone": "203-921-7905"
          },
          {
            "first": "Neeraj",
            "last": "Aggarwal",
            "email": "aggarwne@yahoo.com",
            "phone": "203-921-7906"
          }
        ],
        "children": [
          {
            "first": "Suhani",
            "last": "Aggarwal",
            "class": "5"
          }
        ]
      }
    ]
  )
});


app.listen(5001, function(err){
  if(err){
    return console.log(err);
  }
  console.log('API Sever is listening on http://localhost:5001');
});
