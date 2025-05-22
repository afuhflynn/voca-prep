"use client";

import { authClient } from "@/lib/auth-client"; //import the auth client

await authClient.signIn.social({
  /**
   * The social provider ID
   * @example "github", "google", "apple"
   */
  provider: "github",
  /**
   * A URL to redirect if an error occurs during the sign in process
   */
  errorCallbackURL: "/error",
  /**
   * disable the automatic redirect to the provider.
   * @default false
   */
  disableRedirect: true,
});
