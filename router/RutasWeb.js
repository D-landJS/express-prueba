const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
	res.render('index', { title: 'Titulo 1' });
});

router.get('/service', (req, res) => {
	res.render('servicios', { titleService: 'Titulo servicio' });
});

module.exports = router;
