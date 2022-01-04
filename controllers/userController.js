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

    console.log(req.body)
    const { uid, pwd1, pwd2, displayName } = req.body

    if (uid && validator.isLength(uid, { min: 6 })) { }
    else
        return next(new ErrorHandler('用户ID不合法', 400));
    if (pwd1 && validator.isStrongPassword(pwd1, { minLength: 8, minLowercase: 0, minUppercase: 0, minNumbers: 0, minSymbols: 0 })) { }
    else
        return next(new ErrorHandler('口令不合法', 400));
    if (pwd1 && pwd2 && validator.equals(pwd1, pwd2)) { }
    else
        return next(new ErrorHandler('口令不合法', 400));
    if (displayName && validator.isByteLength(displayName, { min: 4 })) { }
    else
        return next(new ErrorHandler('显示名不合法', 400));

    // 查询输入的用户
    const existed_user = users.find(item => item.uid == uid)
    if (existed_user)
        return next(new ErrorHandler('重复登录用户', 400));

    const user = {
        id: users.length + 1,
        uid,
        pwd: bcrypt.hashSync(pwd1, 10),
        displayName,
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