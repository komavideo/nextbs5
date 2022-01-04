import validator from 'validator';
import bcrypt from 'bcrypt';

import catchAsyncErrors from '../middlewares/asyncErrors'
import ErrorHandler from '../utils/errorHandler'
import { users } from '../data'

const GetMyProfile = catchAsyncErrors(async (req, res) => {
    const user = req.user
    console.log(user)

    return res.json({
        result: 'ok',
        user,
    })
})

export {
    GetMyProfile
}