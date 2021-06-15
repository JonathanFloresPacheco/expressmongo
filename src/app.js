const express = require('express');
const logger = require('morgan');
const mongoose = require('mongoose');
const bodyParser = require('body-parser'); //voy a entender las peticiones http
const indexRoutes  = require('./routes/index');
const app = express();
const port = process.env.PORT || 3000;
const www = process.env.WWW || './';

app.use(express.static(www));
console.log(`serving ${www}`);


app.use(logger('dev'));
app.use(bodyParser.urlencoded({extended:false}));

// connection db
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://127.0.0.1:27017/crud-example', {
  useUnifiedTopology: true,
  useNewUrlParser: true 
});



app.set('views',__dirname+'/views');//nos muestra la ruta 
app.set('view engine','ejs');//estamos diciendo que  lel template que va ocupar es ejs

//router
app.use('/',indexRoutes);
app.get('*', (req, res) => {
    res.end('Not found!');
});
app.listen(port, () => console.log(`listening on http://localhost:${port}`));
