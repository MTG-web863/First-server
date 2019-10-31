const express = require('express')
const app = express()
app.set('view engine', 'ejs');
app.get('/', function(request, response){
    response.send("Hello from Server")
})
app.listen(3000, function(){
    console.log("Server is running on port 3000")
});