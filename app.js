const express = require('express');
const app = express();

require('dotenv').config();

const mongoose = require('mongoose');

const uri = `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@express-mongo-test.izrb4.mongodb.net/${process.env.DBNAME}?retryWrites=true&w=majority`;

mongoose
	.connect(uri)
	.then(_ => console.log('BD connect'))
	.catch(e => console.log(e));

app.set('view engine', 'ejs');
app.set('Views', __dirname + '/views');

app.use(express.static(__dirname + '/public'));

app.use('/', require('./router/RutasWeb'));

app.use('/mascotas', require('./router/Mascotas'));

app.use((req, res, next) => {
	res.status(404).render('404', { title: '404', description: 'Error' });
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
	console.log('Ando corriendo en el puerto ', port);
});
