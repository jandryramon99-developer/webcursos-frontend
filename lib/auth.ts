import { betterAuth } from "better-auth";

export const auth = betterAuth({

  /*
  |--------------------------------------------------------------------------
  | EMAIL/PASSWORD
  |--------------------------------------------------------------------------
  */

  emailAndPassword: {
    enabled: true,
  },

  /*
  |--------------------------------------------------------------------------
  | SOCIAL PROVIDERS
  |--------------------------------------------------------------------------
  */

  socialProviders: {

    google: {

      clientId:
        process.env.GOOGLE_CLIENT_ID!,

      clientSecret:
        process.env.GOOGLE_CLIENT_SECRET!,
    },
  },

  /*
  |--------------------------------------------------------------------------
  | SESSION
  |--------------------------------------------------------------------------
  */

  session: {

    expiresIn:
      60 * 60 * 24 * 7,
  },

  secret:
    process.env.BETTER_AUTH_SECRET,

  baseURL:
    process.env.BETTER_AUTH_URL,
});