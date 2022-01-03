import nc from 'next-connect';

import { listUsers } from '../../../controllers/userController'

import onError from '../../../middlewares/errors'

const handler = nc({ onError });

handler.get(listUsers)

export default handler;