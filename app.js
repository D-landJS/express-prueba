const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.set('Views', __dirname + '/views');

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
	res.render('index', { title: 'Titulo 1' });
});

app.get('/service', (req, res) => {
	res.render('servicios', { titleService: 'Titulo servicio' });
});

app.use((req, res, next) => {
	res.status(404).render('404', { title: '404', description: 'Error' });
});

const port = 3000;

app.listen(port, () => {
	console.log('Ando corriendo en el puerto ', port);
});
