import catchAsyncErrors from '../middlewares/asyncErrors'
import ErrorHandler from '../utils/errorHandler'

const listNews = catchAsyncErrors(async (req, res) => {
    return res.json({
        url: req.url,
        method: req.method,
        query: req.query,
        result: 'List Page ' + req.query.p,
    })
})

const getNews = catchAsyncErrors(async (req, res, next) => {
    if (req.query.id == '0')
        return next(new ErrorHandler('没这个ID', 400));

    return res.json({
        url: req.url,
        method: req.method,
        query: req.query,
        result: 'Get ' + req.query.id,
    })
})

const createNews = catchAsyncErrors(async (req, res) => {
    return res.json({
        url: req.url,
        method: req.method,
        body: req.body,
        result: 'Create 1',
    })
})

const updateNews = catchAsyncErrors(async (req, res) => {
    return res.json({
        url: req.url,
        method: req.method,
        query: req.query,
        body: req.body,
        result: 'Update ' + req.query.id,
    })
})

const deleteNews = catchAsyncErrors(async (req, res) => {
    return res.json({
        url: req.url,
        method: req.method,
        query: req.query,
        result: 'Delete ' + req.query.id,
    })
})

export {
    listNews,
    getNews,
    createNews,
    updateNews,
    deleteNews,
}