import nc from 'next-connect';

import { listNews, createNews } from '../../../controllers/newsController'

const handler = nc({});

handler.get(listNews)
handler.post(createNews)

export default handler;