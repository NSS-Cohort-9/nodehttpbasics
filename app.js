var chalk = require('chalk')
var port = process.env.PORT || 1337;
require('./lib/server')(port);

console.log('Server running on ' +
  chalk.red.bold.underline('http://localhost:' + port));
