import NextAuth, {NextAuthOptions} from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials"
import {authService} from "@/service/auth.service";

const authOption: NextAuthOptions = ({
    secret: process.env.NEXTAUTH_SECRET,
    session:{
        strategy:'jwt'
    },
    providers: [
        CredentialsProvider({
            // The name to display on the sign in form (e.g. 'Sign in with...')
            name: 'Credentials',
            // The credentials is used to generate a suitable form on the sign in page.
            // You can specify whatever fields you are expecting to be submitted.
            // e.g. domain, username, password, 2FA token, etc.
            // You can pass any HTML attribute to the <input> tag through the object.
            credentials: {
                email: {label: "email", type: "text", placeholder: "example@gmail.com"},
                password: {label: "Password", type: "password"}
            },
            async authorize(credentials) {

                console.log(credentials);
                
                // You need to provide your own logic here that takes the credentials
                // submitted and returns either a object representing a user or value
                // that is false/null if the credentials are invalid.
                // e.g. return { id: 1, name: 'J Smith', email: 'jsmith@example.com' }
                // You can also use the `req` object to obtain additional parameters
                // (i.e., the request IP address)
                const res = await authService.login(credentials).catch(err => err)
              console.log(res.data)
                // If no error and we have user data, return it
                if (res.status == 200) {
                    console.log(res.data);
                    return res?.data.data
                }

                // Return null if user data could not be retrieved
                return null
            }
        })
    ],
    callbacks:{
        async jwt({token,user}){
         return {...token,...user}
        },
        async session({ session, token, user }) {
            // Send properties to the client, like an access_token and user id from a provider.
            session.user=token
            return session
        }
    },
    pages:{
        signIn:'/signin'
    }
});

const handler = NextAuth(authOption)
  
  export { handler as GET, handler as POST }