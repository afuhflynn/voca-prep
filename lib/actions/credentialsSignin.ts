"use client";

import { authClient } from "@/lib/auth.client";

export const credentialsSignin = async (email: string, password: string) => {
  await authClient.signIn.email({
    email,
    password,
  });
};
