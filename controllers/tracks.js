const { tracksModel } = require('../models');

/**
 * Obtener lista de la base de datos!
 * @param {*} req
 * @param {*} res
 */
const getItems = async (req, res) => {
    const data = await tracksModel.find({});
    res.send({ data })
};

/**
 * Obtener un detalle
 * @param {*} req
 * @param {*} res
 */

const getItem = async (req, res) => { };

/**
 * Insertar un registro
 * @param {*} req
 * @param {*} res
 */

const createItem = async (req, res) => { ;
    const { body } = req;
    console.log('body', body);
    const data = await tracksModel.create(body);
    res.send({ data });
}
/**
 *  Actualizar un registro
 * @param {*} req
 * @param {*} res
 */

const updateItem = async (req, res) => { };

/**
 * Eliminar un registro
 * @param {*} req
 * @param {*} res
 */

const deleteItem = async (req, res) => { };

module.exports = {
    getItems,
    getItem,
    createItem,
    updateItem,
    deleteItem,
};