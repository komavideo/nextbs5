import nc from 'next-connect';

import { getNews, updateNews, deleteNews } from '../../../controllers/newsController'

import onError from '../../../middlewares/errors'

const handler = nc({ onError });

handler.get(getNews)
handler.put(updateNews)
handler.delete(deleteNews)

export default handler;