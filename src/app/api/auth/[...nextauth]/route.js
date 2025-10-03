import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code"
        }
      }
    }),
  ],
  callbacks: {
    async jwt({ token, user, account }) {
      // Guardar el token de acceso y la información del usuario en el token
      if (account) {
        token.accessToken = account.access_token;
        token.user = user;
      }
      return token;
    },
    async session({ session, token }) {
      // Enviar las propiedades necesarias al cliente
      session.accessToken = token.accessToken;
      session.user = token.user || session.user;
      
      // Guardar en localStorage (esto se ejecutará en el cliente)
      if (typeof window !== 'undefined') {
        localStorage.setItem('auth-token', token.accessToken);
        localStorage.setItem('user-email', session.user?.email || '');
        localStorage.setItem('user-name', session.user?.name || '');
        localStorage.setItem('user-image', session.user?.image || '');
      }
      
      return session;
    },
  },
  pages: {
    signIn: '/login',
  },
});

export { handler as GET, handler as POST };
