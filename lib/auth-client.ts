import { createAuthClient } from "better-auth/client";

/*
|--------------------------------------------------------------------------
| AUTH CLIENT
|--------------------------------------------------------------------------
*/

export const authClient =
  createAuthClient({

    baseURL:
      process.env.NEXT_PUBLIC_API_URL!,
  });