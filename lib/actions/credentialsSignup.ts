"use server";

import { prisma } from "../prisma";

export const credentialsSignup = async (
  email: string,
  password: string,
  name: string
) => {
  if (!email || !password || !name) {
    throw new Error("All fields are required");
  }
  try {
    const userExists = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });

    if (userExists)
      throw new Error(`User email: ${email} already exists. Please login.`);

    // Create new user.
    // TODO: Hash user password
    const hashedPwd = "";
    const newUser = await prisma.user.create({
      data: {
        email,
        password: hashedPwd,
        name,
        emailVerified: true,
        image: "",
      },
    });

    if (!newUser)
      throw new Error(
        `An unexpected error occurred creating account. Please try again later.`
      );

    // Create new account
    const accountId = crypto.randomUUID();
    const providerId = `${crypto.randomUUID()}-vp`;
    const newAccount = await prisma.account.create({
      data: {
        accountId,
        providerId,
        userId: newUser.id,
      },
    });

    if (!newAccount)
      throw new Error(
        `An unexpected error occurred creating account. Please try again later.`
      );

    return {
      success: true,
      message: "Account created successfully. Please login.",
    };
  } catch (error: any) {
    console.log(error);
    throw new Error(error.message);
  }
};
