const { Router } = require('express')
const { getAllSpices, createSpices, updateSpices, deleteSpices } = require('../service/spice-service.js')
const authorizationMiddleware = require('../middleware/authorization-middleware.js')

const spiceRouter = Router()



spiceRouter.get('/', getAllSpices)
spiceRouter.post('/', authorizationMiddleware, createSpices)

spiceRouter.patch(
    "/:id",
    authorizationMiddleware,
    updateSpices
  );
  
spiceRouter.delete(
    "/:id",
    authorizationMiddleware,
    deleteSpices
  );

module.exports = spiceRouter