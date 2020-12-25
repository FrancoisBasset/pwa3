const express = require('express');
const router = express.Router();

const controllers = require('../classes');
const Pwa3Controller = controllers.Pwa3Controller;

router.get('/lastVersion', function(req, res) {
	Pwa3Controller.getLastVersion().then(function(lastVersion) {
		res.json({
			success: true,
			result: lastVersion
		});
	}).catch(function() {
		res.json({
			success: false,
			message: 'Erreur : Impossible de récupérer la version !'
		});
	});
});

module.exports = router;