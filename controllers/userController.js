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
        pwd: '12345678',
        displayName: '张三',
    }
    users.push(user)
    return res.json({
        result: 'ok',
        user,
    })
})

export {
    listUsers,
    createUser,
}