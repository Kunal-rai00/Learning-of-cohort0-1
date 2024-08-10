const fs = require("fs");

fs.readFile("aa.txt", "utf-8",(err, data)=> {
    data = "the new data " + " " + data
    fs.writeFile("aa.txt", data, "utf-8", (err)=>{
        console.log(data)
    })
} )