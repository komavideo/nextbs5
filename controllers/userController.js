import validator from 'validator';
import bcrypt from 'bcrypt';

import catchAsyncErrors from '../middlewares/asyncErrors'
import ErrorHandler from '../utils/errorHandler'
import { users } from '../data'

const listUsers = catchAsyncErrors(async (req, res) => {
    return res.json({
        result: 'ok',
        users,
    })
})

const createUser = catchAsyncErrors(async (req, res, next) => {

    const { uid, pwd, pwd2, displayName } = req.body

    if (uid && validator.isLength(uid, { min: 6 })) { }
    else
        return next(new ErrorHandler('用户ID不合法', 400));
    if (pwd && validator.isStrongPassword(pwd, { minLength: 8, minLowercase: 0, minUppercase: 0, minNumbers: 0, minSymbols: 0 })) { }
    else
        return next(new ErrorHandler('口令不合法', 400));
    if (pwd && pwd2 && validator.equals(pwd, pwd2)) { }
    else
        return next(new ErrorHandler('口令不合法', 400));
    if (displayName && validator.isByteLength(displayName, { min: 4 })) { }
    else
        return next(new ErrorHandler('显示名不合法', 400));

    const user = {
        id: users.length + 1,
        uid,
        pwd: bcrypt.hashSync(pwd, 10),
        displayName,
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