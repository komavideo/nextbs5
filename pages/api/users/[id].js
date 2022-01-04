import nc from 'next-connect';

import { getUser } from '../../../controllers/userController'

import onError from '../../../middlewares/errors'
import { isAuthenticatedUser } from '../../../middlewares/auth'

const handler = nc({ onError });

handler
    .use(isAuthenticatedUser)
    .get(getUser)

export default handler;