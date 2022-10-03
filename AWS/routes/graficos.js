const express = require('express');
const router = express.Router();
const pool = require('../database');

router.get('/grafico/:indice', async (req, res) => {
    const { indice } = req.params;
    const datos = await pool.query(`SELECT * FROM ${process.env.TABLE_ACCIONES_PROY} WHERE ticker = ?`, [indice]);
    const datosExtraidos = JSON.stringify(datos);
    res.send(datosExtraidos);
});

module.exports = router;