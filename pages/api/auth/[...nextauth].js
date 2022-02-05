import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

export default NextAuth({
    providers: [
        CredentialsProvider({
            name: "Creds",
            credentials: {
                username: { label: "Username", type: "text", placeholder: "jsmith" },
                password: {  label: "Password", type: "password" }
            },
            async authorize(credentials, req) {
                const res = await fetch('http://localhost:3000/api/login', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({username: credentials.username, password: credentials.password})
                })
                const json = await res.json()
                if (json.user) {
                    const all = json.user
                    return {
                        id: all.id,
                        name: all.username,
                        email: all.email,
                        country: all.country,
                        socials: all.socials,
                        fn: all.firstName,
                        ln: all.lastName,
                        admin: all.admin,
                        newsletter: all.newsletter
                    }
                }
                else {
                    return null
                }
            }
        })
    ],
    callbacks: {
        async jwt({ token, user, account, profile, isNewUser }) {
            user && (token.user = user)
            return token
        },
        async session({ session, token, user }) {
            session.user = token.user
            return session;
        },
    },
    secret: process.env.JWT_SECRET
})