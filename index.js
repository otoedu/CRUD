const app = require('./Server/src/app');
require("./Server/src/database");

// comienza el server
app.listen(app.get('port'));
  console.log('server on port', app.get("port"));

