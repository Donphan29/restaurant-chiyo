import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

if (!process.env.GOOGLE_ID) {
    throw new Error('Invalid/Missing environment variable: "GOOGLE_ID"');
}

if (!process.env.GOOGLE_SECRET) {
    throw new Error('Invalid/Missing environment variable: "GOOGLE_SECRET"');
}

export const authOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRET,
        }),
    ]
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
