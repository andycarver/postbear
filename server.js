const express  = require( 'express' ),
      path     = require( 'path' ),
      bp       = require('body-parser'),
      dir      = __dirname,
      port     = 8000,
      app      = express(),
      session  = require('express-session');

app.use( express.static( path.join( dir, 'client' )));
app.use( express.static( path.join( dir, 'bower_components' )));
app.use( bp.json() );
app.use(session({
    secret: 'bearsbeetsbattlestargalactica',
    resave: false,
    saveUninitialized: true
}))

require('./server/config/mongoose.js');
require('./server/config/routes.js')(app);

app.listen( port, function() {
  console.log( `Listening on port ${port}` );
});
