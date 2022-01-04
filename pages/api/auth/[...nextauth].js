/**
 * NextAuth.js exposes a REST API which is used by the NextAuth.js client.
 * 
 * https://next-auth.js.org/getting-started/rest-api
 */
import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import bcrypt from 'bcrypt';

import { users } from '../../../data'

// https://next-auth.js.org/configuration/options
export default NextAuth({
    secret: 'AgFG1DINpIyeMcqnkoGdBglwwdXJSgzIv6S8PoAnw8Z',
    session: {
        strategy: 'jwt',
    },
    jwt: {
        maxAge: 60 * 60 * 24 * 7,
    },
    providers: [
        CredentialsProvider({
            // The name to display on the sign in form (e.g. "Sign in with...")
            // name: "Credentials",
            // The credentials is used to generate a suitable form on the sign in page.
            // You can specify whatever fields you are expecting to be submitted.
            // e.g. domain, username, password, 2FA token, etc.
            // You can pass any HTML attribute to the <input> tag through the object.
            // credentials: {
            //     uid: { label: "Username", type: "text", placeholder: "username" },
            //     pwd: { label: "Password", type: "password" }
            // },
            async authorize(credentials, req) {
                // console.log("credentials:", credentials)

                const { uid, pwd } = credentials;

                if (!uid || !pwd)
                    throw new Error("登录失败")

                // 查询输入的用户
                const user = users.find(item => item.uid == uid)

                if (!user)
                    throw new Error("登录失败")

                if (!bcrypt.compareSync(pwd, user.pwd))
                    throw new Error("登录失败")

                delete user['pwd']

                return (user)
            }
        }),
    ],


    // You can define custom pages to override the built-in ones. These will be regular Next.js pages
    // so ensure that they are placed outside of the '/api' folder, e.g. signIn: '/auth/mycustom-signin'
    // The routes shown here are the default URLs that will be used when a custom
    // pages is not specified for that route.
    // https://next-auth.js.org/configuration/pages
    pages: {
        signIn: '/login',  // Displays signin buttons
        // signOut: '/auth/signout', // Displays form with sign out button
        // error: '/auth/error', // Error code passed in query string as ?error=
        // verifyRequest: '/auth/verify-request', // Used for check email page
        // newUser: null // If set, new users will be directed here on first sign in
    },

    // Callbacks are asynchronous functions you can use to control what happens
    // when an action is performed.
    // https://next-auth.js.org/configuration/callbacks
    callbacks: {
        // async signIn({ user, account, profile, email, credentials }) { return true },
        // async redirect({ url, baseUrl }) { return baseUrl },
        // async session({ session, token, user }) { return session },
        // async jwt({ token, user, account, profile, isNewUser }) { return token }
        async jwt(data) {
            // console.log("jwt.data", data)
            const { token, user } = data
            if (user) {
                token.user = user
            }
            return token
        },
        async session(data) {
            // console.log("session.data", data)
            const { session, token } = data
            session.user = token.user
            return session
        },
    },
})
