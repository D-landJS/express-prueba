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

module.exports = router;
