import express from 'express';
import bodyParser from 'body-parser';
import expressValidator from 'express-validator';
import expressSession from 'express-session';

const app = express();

app.use(express.static('public'));
app.use(bodyParser.urlencoded( { extended: true } ));
app.use(expressValidator());
app.use(expressSession({
    secret: 'simplechat-01',
    resave: false,
    saveUninitialized: false
}));

app.set('view engine', 'ejs');
app.set('views', './app/views');


export default app;