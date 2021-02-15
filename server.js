const express = require('express')
const directory = 'C:\\Users\\SRAVANTHI\\Documents\\GUVI_PRACTICE\\GUVI_LEARNING\\guvi_learning';
const path = require('path');
const fs = require('fs');

const app = express()

app.use('/',express.static("E:\\B19-WD\\Node\\15-02-21"))
app.use('/images',express.static("E:\\B19-WD\\Node\\15-02-21"))
app.get('/', (req, res) => {

    fs.readdir(directory, (err, files) => {
        let result = '';
    files.forEach(file => {
        if (fs.lstatSync(path.resolve(directory, file)).isDirectory()) {
            type = 'Directory: ' + file;
            icon = `<img src = "./images/folder.png" width = "50px" height = "50px">`
        } else {
            type = 'File: ' + file;
            icon = `<img src = "./images/file.png" width = "50px" height = "50px">`
        }
        result += '<span>'+ icon + type + '</span>' + '<br>'
      
    });
    
    res.send(result)
    });
    
    
})



const port = 3000;

 app.listen(port,()=>console.log(`your app is running on ${port}`))