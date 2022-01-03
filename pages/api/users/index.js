import nc from 'next-connect';

import { listUsers, createUser } from '../../../controllers/userController'

import onError from '../../../middlewares/errors'

const handler = nc({ onError });

handler.get(listUsers)
handler.post(createUser)

export default handler;