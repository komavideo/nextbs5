import nc from 'next-connect';

import { getNews, createNews, updateNews, deleteNews } from '../../../controllers/newsController'

const handler = nc({});

handler.get(getNews)
handler.post(createNews)
handler.put(updateNews)
handler.delete(deleteNews)

export default handler;