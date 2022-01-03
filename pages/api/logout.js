import nc from 'next-connect';

import { logout } from '../../controllers/authController'

import onError from '../../middlewares/errors'

const handler = nc({ onError });

handler.post(logout)

export default handler;