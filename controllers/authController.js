import catchAsyncErrors from '../middlewares/asyncErrors'
import ErrorHandler from '../utils/errorHandler'
import { users } from '../data'

const login = catchAsyncErrors(async (req, res) => {
    return res.json({
        result: 'ok',
    })
})

const logout = catchAsyncErrors(async (req, res) => {
    return res.json({
        result: 'ok',
    })
})

export {
    login,
    logout,
}