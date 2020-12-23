const { Router } = require('express');

const { usersControllers } = require('../../controllers');
const { usersMiddlewares, authMiddlewares, filesMiddlewares } = require('../../middlewares');

const userRouter = Router();

userRouter.get('/', usersControllers.getAllUsers);

userRouter.get('/:id',
    usersMiddlewares.checkId,
    usersMiddlewares.checkUserById,
    usersControllers.getOneUsers);

userRouter.post('/',
    usersMiddlewares.checkUserValid,
    usersMiddlewares.checkIsUserCreated,
    filesMiddlewares.checkFileMiddleware,
    filesMiddlewares.checkPhotoCountUser,
    usersControllers.createUser);

userRouter.put('/:id',
    authMiddlewares.checkAccessToken,
    usersMiddlewares.checkId,
    usersMiddlewares.checkUserById,
    usersMiddlewares.checkUpdateUser,
    filesMiddlewares.checkFileMiddleware,
    filesMiddlewares.checkPhotoCountUser,
    usersControllers.updateUser);

userRouter.delete('/:email',
    authMiddlewares.checkAccessToken,
    usersMiddlewares.chekUserBeforeDeleted,
    usersMiddlewares.checkIsUserCreated,
    usersControllers.deleteUser);

module.exports = userRouter;
