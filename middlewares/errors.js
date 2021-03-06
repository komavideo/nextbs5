export default (err, req, res, next) => {
    err.statusCode = err.statusCode || 500;
    let error = { ...err }
    error.message = err.message
    res.status(err.statusCode).json({
        result: 'fail',
        error,
        message: error.message,
        stack: error.stack
    })
}