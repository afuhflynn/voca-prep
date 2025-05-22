"use client";

import { authClient } from "@/lib/auth-client"; //import the auth client
import { useRouter } from "next/navigation";

export const signOutUser = async () => {
  const router = useRouter();
  await authClient.signOut({
    fetchOptions: {
      onSuccess: () => {
        router.push("/login"); // redirect to login page
      },
    },
  });
};
