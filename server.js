const express = require('express');
const app = express();
const  mysql = require('mysql');
 
     const db =  mysql.createConnection({
            password: "Sneh@12345",
            database: "new_schema",
            user: "root",
            host: "localhost"
     })

     db.connect((err)=>{

            if (err) {
                    console.log("this is not be connect");
            }else{
                console.log("this is connect")
            }
     })

    // app.get("/", (req,res)=>{
    //         res.send("hello sneh how are you this is running ")
    // })

    app.listen(3999, ()=>{
        console.log("hello this is run ");
    })