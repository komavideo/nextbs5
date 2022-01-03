import nc from 'next-connect';

import { login } from '../../../controllers/authController'

import onError from '../../../middlewares/errors'

const handler = nc({ onError });

handler.post(login)

export default handler;