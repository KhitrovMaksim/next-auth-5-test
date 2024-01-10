import NextAuth from "next-auth"
import GitHub from "next-auth/providers/github"

const user = {
    name: 'Max'
}
export const { handlers, auth } = NextAuth({
    providers: [ GitHub ],
    callbacks: {
        authorized({ request, auth }) {
            const { pathname } = request.nextUrl
            if (pathname === "/middleware-example") return !!auth
            return true
        },
    },
    pages: {
        signIn: '/authentication/signin',
    },
})