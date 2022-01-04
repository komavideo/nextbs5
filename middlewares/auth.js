import catchAsyncErrors from './asyncErrors';
import ErrorHandler from '../utils/errorHandler';
import { getSession } from "next-auth/react";

const isAuthenticatedUser = catchAsyncErrors(async (req, res, next) => {
    // gets auth-token from req.headers
    const session = await getSession({ req });

    console.log(session)

    if (session) {
        req.user = session.user;
        next();
    } else {
        return next(new ErrorHandler('未登录', 401));
    }
})

export {
    isAuthenticatedUser,
}
