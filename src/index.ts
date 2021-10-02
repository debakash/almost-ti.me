require('dotenv').config();

import path from 'path';
import express from 'express';
import routes from './routes';
import mongooseConnector from './utils/mongooseConnector';

const app = express();
mongooseConnector();


app.set('views', path.join(__dirname, '../src/views'));
app.set('view engine', 'ejs');

app.use('/', routes);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.raw());

let port:number = Number(process.env.PORT);
if(!port){
	port = 80
} 
app.listen(port, (() => {
	console.log('App listening on port ' + port);
}));
