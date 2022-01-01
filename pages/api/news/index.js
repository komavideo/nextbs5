import nc from 'next-connect';

import { listNews } from '../../../controllers/newsController'

const handler = nc({});

handler
    .get(listNews)

export default handler;