const { Router } = require('express')
const { getAllUser, createUser, updateUser, deleteUser } = require('../service/user-service.js')
const userAuthorization = require('../middleware/user-authorization.js')

const userRouter = Router()



userRouter.get('/', getAllUser)
userRouter.post('/', userAuthorization, createUser)

userRouter.patch(
    "/:id",
    updateUser
  );
  
userRouter.delete(
    "/:id",
    deleteUser
  );

module.exports = userRouter