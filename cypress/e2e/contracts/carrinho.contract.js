const Joi = require('joi');

const carrinhoSchema = Joi.object({
    quantidade: Joi.number(),
    carrinhos: Joi.array().items({
        produtos: Joi.array().items({
            idProduto: Joi.string(),
            quantidade: Joi.number(),
            precoUnitario: Joi.number(),
        }),
        precoTotal: Joi.number(),
        quantidadeTotal: Joi.number(),
        idUsuario: Joi.string(),
        _id: Joi.string()
    })
});

export default carrinhoSchema;