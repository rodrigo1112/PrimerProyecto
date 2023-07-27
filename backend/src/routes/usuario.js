const {Router} = require('express')
const router = Router()

const { createUsu, getUsu, getUsuario, deleteUsu, updateUsu}= require('../controller/usuario.controller')

router.route('/')

    .get(getUsu)  
    .post(createUsu)

router.route('/:id')
    .get(getUsuario)
    .delete(deleteUsu)
    .put(updateUsu)

module.exports = router;

/**
 * @swagger
 * /api/users:
 *   get:
 *     summary: Obtiene todos los usuarios
 *     responses:
 *       200:
 *         description: Respuesta exitosa
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                   name:
 *                     type: string
 */
 