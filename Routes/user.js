const UserRouter = require('express').Router()

const {
    createUser,
} = require('../Controller/user')

UserRouter.post('/createUsers',createUser)



module.exports = UserRouter