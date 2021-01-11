
const e = require('express');
const { text } = require('express');
const express = require('express');
const app = express();
var mysql = require('mysql');

app.listen(3000, () => console.log("Server side js running. Listening for connection"));



app.use(express.json());

app.get('/api', function (req, res) {
    console.log('reading..')
    var text = readData();
    //readTextFile("file:///notesSaved.txt");
    /*res.send({
        status:'Get Request Success',
        body: text
    });*/

    const conn= mysql.createConnection({
        host:"localhost",
        port: 3306,
        user:"student",
        password:"student",
        database: "notesdatabase"
    });

    //read from mysql database
    conn.connect(function(err) {
        if(err) throw err;

        console.log("Connected!");

        conn.query("SELECT * FROM notes", function (err, result, fields) {
            if (err) throw err;
            //console.log(result);
            console.log('Query Success.Data Retrived.');

            res.send({
                status:'Get Request Success',
                body: result
            });
        });
        
        conn.end((err)=>{
            if(err) throw err;

            console.log('Connection Terminated!');
        })
        
    });

  })

function readData(){
    const fs = require('fs');
    try{
        const data = fs.readFileSync('notesSaved.txt','utf8');
        //console.log(data);
        return data;
    }catch(err){
        console.log('Error: '+e );
    }
}

app.post('/api', (request, response) =>{
    
    // console.log(request);

    let data = request.body;
    //console.log(data.msg);
    console.log('Data Recieved.');

    response.json({
        status:'Post Request Success'
    });

    writeData(data.msg);
    storeInMYSQLDB(data.msg);
} );

var count =0;
function writeData(text){
    ++count;
    text = '\n'+'Note#'+count+':\r'+text+'\n';

    const fs = require('fs');
    fs.writeFile('notesSaved.txt',text, {
        flag: 'a',
        encoding: 'utf8'
    },
    (err) => { console.log(err); })
}

function storeInMYSQLDB(textdata){

    textdata = textdata.replace(/\'/g,"\\\'");
    
    const conn= mysql.createConnection({
        host:"localhost",
        port: 3306,
        user:"student",
        password:"student"
    });

    //CREATING CONNECTION
    conn.connect(function(err) {
        if (err) throw err;

        console.log("Connected!");

        //CREATING DATABASE
        conn.query("CREATE DATABASE IF NOT EXISTS notesdatabase", function (err, result) {
        if (err) throw err;
        //if(result) console.log(result);

        console.log("Database created");
        });

        //SELECTING DATABASE
        conn.query("use notesdatabase", function (err, result) {
            if (err) throw err;
    
            console.log("Database selected");
        });

        //CREATING TABLE
        var sql = "CREATE TABLE IF NOT EXISTS notes (id INT PRIMARY KEY AUTO_INCREMENT, savednotes TEXT,createdOn DATETIME)";
        conn.query(sql, function (err, result) {
          if (err) throw err;
          console.log("Table created");
        });

        //INSERTING DATA INTO TABLE
        var createtime = new Date().toISOString().slice(0, 19).replace('T', ' ');
        console.log(createtime);

        var sql = `INSERT INTO notes (savednotes,createdOn) VALUES ('${textdata}','${createtime}')`;
        conn.query(sql, function (err, result) {
            if (err) throw err;
            console.log("1 record inserted");
        });

        //TERMINATING CONNECTION
        conn.end(function(err3) {
            if(err3)
            throw err3;

            console.log("Connection Terminated!");
        });
    });

}
