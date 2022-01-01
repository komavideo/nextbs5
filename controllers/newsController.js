const listNews = (async (req, res) => {
    return res.json({
        result: 'List Page ' + req.query.p,
        method: req.method,
        query: req.query,
        url: req.url,
    })
})

const getNews = (async (req, res) => {
    return res.json({
        result: 'Get ' + req.query.id,
        method: req.method,
        query: req.query,
        url: req.url,
    })
})

const createNews = (async (req, res) => {
    return res.json({
        result: 'Create 1',
        method: req.method,
        url: req.url,
        body: req.body,
    })
})

const updateNews = (async (req, res) => {
    return res.json({
        result: 'Update 1',
        method: req.method,
        query: req.query,
        url: req.url,
        body: req.body,
    })
})

const deleteNews = (async (req, res) => {
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