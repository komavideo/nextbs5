const listNews = (async (req, res) => {
    return res.json({
        result: 'List Page ' + req.query.p,
        method: req.method,
        query: req.query,
    })
})

const getNews = (async (req, res) => {
    return res.json({
        result: 'Get ' + req.query.id,
        method: req.method,
        query: req.query,
    })
})

const createNews = (async (req, res) => {
    return res.json({
        result: 'Create 1',
        method: req.method,
        query: req.query,
    })
})

const updateNews = (async (req, res) => {
    return res.json({
        result: 'Update 1',
        method: req.method,
        query: req.query,
    })
})

const deleteNews = (async (req, res) => {
    return res.json({
        result: 'Delete 1',
        method: req.method,
        query: req.query,
    })
})

export {
    listNews,
    getNews,
    createNews,
    updateNews,
    deleteNews,
}