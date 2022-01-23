const express = require('express');
const router = express.Router();

const Pet = require('../models/mascota');

router.get('/', async (req, res) => {
	try {
		const arrayPets = await Pet.find();
		res.render('mascotas', {
			arrayPets,
			// arrayPets: [
			// 	{
			// 		id: 1,
			// 		name: 'angel',
			// 		kindOfPet: 'cat',
			// 		race: 'ragdoll',
			// 	},
			// 	{
			// 		id: 2,
			// 		name: '4chan',
			// 		kindOfPet: 'dog',
			// 		race: 'bullgod',
			// 	},
			// ],
		});
	} catch (error) {
		console.log(error);
	}
});

router.get('/crear', (req, res) => {
	res.render('crear');
});

router.post('/', async (req, res) => {
	const body = req.body;

	try {
		await Pet.create(body);

		res.redirect('/mascotas');
	} catch (err) {
		console.log(err);
	}
});

router.get('/:id', async (req, res) => {
	const _id = req.params.id;
	try {
		const pet = await Pet.findOne({ _id });
		res.render('detalle', {
			pet,
			error: false,
		});
	} catch (error) {
		console.log(error);
		res.render('editar', {
			error: true,
			message: 'No se encuentra el id seleccionado',
		});
	}
});

router.put('/:id', async (req, res) => {
	const _id = req.params.id;
	const body = req.body;
	try {
		const pet = await Pet.findByIdAndUpdate(_id, body);
		console.log(pet);

		res.json({
			state: true,
			message: 'Editado',
		});
	} catch (error) {
		console.log(error);
	}
});

router.delete('/:id', async (req, res) => {
	const _id = req.params.id;
	try {
		const pet = await Pet.findByIdAndDelete({ _id });
		if (pet) {
			res.json({
				state: true,
				message: 'eliminado',
			});
		} else {
			res.json({
				state: false,
				message: 'fallo eliminado',
			});
		}
	} catch (error) {
		console.log(error);
	}
});

module.exports = router;
