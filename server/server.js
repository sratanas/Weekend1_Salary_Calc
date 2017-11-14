var express = require('express');
//require looks at node modules right away. If it doesn't see a ./ thing
//it goes straight to node_modules
//calling in a module. This is going to check node modules for this dependency.

var app = express();
//this is a function and app is what is returned when we call express
//as a function
// creating an instance of express
//app is where we can build things out


app.use(express.static('server/public')); // but also... express is an object with methods
//app.use is what express defines as code that's going to be run a request is made.
//this app.use says we are going to have express.static which is going to check
//for static files (index.html etc) and return it.

app.listen(5000, function(){
    console.log('listening on port 5000')
});