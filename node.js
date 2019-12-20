var http = require('http');
var sql = require('mssql');
var config = {
    user: '',
    password: '',
    server: 'PC-40', 
    database: 'Angular-test' 
  };
  
  sql.connect(config, function (err) {
    
    if (err) console.log(err);

    // create Request object
    var request = new sql.Request();
       
    // query to the database and get the records
    request.query('select * from Users', function (err, recordset) {
        
        if (err) console.log(err)

        // send records as a response
        res.send(recordset);
        
    });
});


http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World! check node');
}).listen(8080);