import nc from 'next-connect';

import { getNews, updateNews, deleteNews } from '../../../controllers/newsController'

const handler = nc({});

handler.get(getNews)
handler.put(updateNews)
handler.delete(deleteNews)

export default handler;