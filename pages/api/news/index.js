import nc from 'next-connect';

import { listNews, createNews } from '../../../controllers/newsController'

import onError from '../../../middlewares/errors'

const handler = nc({ onError });

handler.get(listNews)
handler.post(createNews)

export default handler;