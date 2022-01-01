import catchAsyncErrors from '../middlewares/asyncErrors'
import ErrorHandler from '../utils/errorHandler'

const listNews = catchAsyncErrors(async (req, res) => {
    return res.json({
        result: 'List Page ' + req.query.p,
        method: req.method,
        query: req.query,
        url: req.url,
    })
})

const getNews = catchAsyncErrors(async (req, res, next) => {
    if (req.query.id == '0')
        return next(new ErrorHandler('没这个ID', 400));

    return res.json({
        result: 'Get ' + req.query.id,
        method: req.method,
        query: req.query,
        url: req.url,
    })
})

const createNews = catchAsyncErrors(async (req, res) => {
    return res.json({
        result: 'Create 1',
        method: req.method,
        url: req.url,
        body: req.body,
    })
})

const updateNews = catchAsyncErrors(async (req, res) => {
    return res.json({
        result: 'Update 1',
        method: req.method,
        query: req.query,
        url: req.url,
        body: req.body,
    })
})

const deleteNews = catchAsyncErrors(async (req, res) => {
    return res.json({
        result: 'Delete 1',
        method: req.method,
        query: req.query,
        url: req.url,
    })
})

export {
    listNews,
    getNews,
    createNews,
    updateNews,
    deleteNews,
}