import nc from 'next-connect';

import { GetMyProfile } from '../../../controllers/authController'

import onError from '../../../middlewares/errors'
import { isAuthenticatedUser } from '../../../middlewares/auth'

const handler = nc({ onError });

handler
    .use(isAuthenticatedUser)
    .get(GetMyProfile)

export default handler;