const express  = require( 'express' ),
      path     = require( 'path' ),
      bp       = require('body-parser'),
      dir      = __dirname,
      port     = 8000,
      app      = express();

app.use( express.static( path.join( dir, 'client' )));
app.use( express.static( path.join( dir, 'bower_components' )));
app.use( bp.json() );
//require('./server/config/mongoose.js');
require('./server/config/routes.js')(app);

app.listen( port, function() {
  console.log( `server running on port ${ port }` );
});
