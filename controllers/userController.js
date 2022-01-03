const bcrypt = require('bcrypt');

import catchAsyncErrors from '../middlewares/asyncErrors'
import ErrorHandler from '../utils/errorHandler'
import { users } from '../data'

const listUsers = catchAsyncErrors(async (req, res) => {
    return res.json({
        result: 'ok',
        users,
    })
})

const createUser = catchAsyncErrors(async (req, res) => {
    const user = {
        id: users.length + 1,
        uid: 'zhangsan',
        pwd: bcrypt.hashSync('12345678', 10),
        displayName: '张三',
    }
    users.push(user)
    // bcrypt.compareSync('12345678', user.pwd) = true
    return res.json({
        result: 'ok',
        user,
    })
})

export {
    listUsers,
    createUser,
}