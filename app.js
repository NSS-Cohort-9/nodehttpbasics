var http = require('http');
var https = require('https');

http.createServer(function (req, res) {
  if (req.method === 'GET' && req.url === '/starwarsmovies') {
    http.get('http://swapi.co/api/films/')
      .on('response', function (xhr) {
        var body = '';

        xhr
          .on('data', function (chunk) {
            body += chunk;
          })

          .on('end', function () {
            var data = JSON.parse(body);

            data.results.forEach(function (r) {
              res.write(r.title + '\n');
            });

            res.end();
          });
      });
  } else if (req.method === 'GET' && req.url === '/weather') {
    var API_KEY = 'b84bb89276e33167420e33a4ceb55678';
    var LOCATION = '36.1658,-86.7777';

    res.writeHeader(200, {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    });

    https.get('https://api.forecast.io/forecast/' + API_KEY + '/' + LOCATION)
      .on('response', function (xhr) {
        xhr.pipe(res);
        // xhr
        //   .on('data', function (chunk) {
        //     res.write(chunk);
        //   })
        //   .on('end', function () {
        //     res.end();
        //   });
      });

  } else {
    res.writeHead(403);
    res.end('Access Denied!');
  }

}).listen(1337);

console.log('Server running on http://localhost:1337');
