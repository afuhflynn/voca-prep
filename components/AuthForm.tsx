"use client";

import { z } from "zod";
import Link from "next/link";
import Image from "next/image";
import { toast } from "sonner";
// import { auth } from "@/firebase/client";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";

import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";

// import { signIn, signUp } from "@/lib/actions/auth.action";
import FormField from "./FormField";
import { googleSignin } from "@/lib/actions/googleSignIn";
import { githubSignin } from "@/lib/actions/githubSignIn";
import { credentialsSignin } from "@/lib/actions/credentialsSignin";
import { credentialsSignup } from "@/lib/actions/credentialsSignup";
import { useState } from "react";

const authFormSchema = (type: FormType) => {
  return z.object({
    name: type === "sign-up" ? z.string().min(3) : z.string().optional(),
    email: z.string().email(),
    password: z.string().min(3),
  });
};

const AuthForm = ({ type }: { type: FormType }) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const formSchema = authFormSchema(type);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    setIsLoading(true);
    try {
      if (type === "sign-up") {
        const { name, email, password } = data;

        const result = await credentialsSignup(email, password, name as string);

        if (!result.success) {
          toast.error(result.message);
          return;
        }

        toast.success(result.message);
        router.push("/sign-in");
      } else {
        const { email, password } = data;

        await credentialsSignin(email, password);

        toast.success("Signed in successfully.");
        router.push("/");
      }
    } catch (error: any) {
      console.log(error);
      toast.error(`There was an error: ${error.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  const isSignIn = type === "sign-in";

  return (
    <div className="card-border lg:min-w-[480px]">
      <div className="flex flex-col gap-6 card py-14 px-10 w-full">
        <div className="w-full flex items-center justify-center">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/logo.svg" alt="MockMate Logo" width={38} height={32} />
            <h2 className="text-primary-100">VocaPrep</h2>
          </Link>
        </div>

        <h3 className="text-center">Practice job interviews with AI</h3>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="w-full space-y-6 mt-4 form"
          >
            {!isSignIn && (
              <FormField
                control={form.control}
                name="name"
                label="Name"
                placeholder="Your Name"
                type="text"
              />
            )}

            <FormField
              control={form.control}
              name="email"
              label="Email"
              placeholder="Your email address"
              type="email"
            />

            <FormField
              control={form.control}
              name="password"
              label="Password"
              placeholder="Enter your password"
              type="password"
            />

            {isSignIn ? (
              <Button className="btn" type="submit" disabled={isLoading}>
                {isLoading ? "Signing in..." : "Sign In"}
              </Button>
            ) : (
              <Button className="btn" type="submit" disabled={isLoading}>
                {isLoading ? "Creating..." : "Create an Account"}
              </Button>
            )}
          </form>
        </Form>

        {
          <div className="flex flex-col space-y-4  pt-6 mt-4 relative">
            <div className="absolute top-0 flex text-center items-center justify-center w-full">
              <hr className="bg-border w-full h-[1px]" />
              <span className="text-center absolute bg-background p-2">
                Or continue with
              </span>
            </div>
            <Button
              className="btn rounded-full py-4 cursor-pointer"
              size={"lg"}
              type="button"
              variant={"outline"}
              onClick={googleSignin}
              disabled={isLoading}
            >
              Google G
            </Button>
            <Button
              className="btn rounded-full py-4 cursor-pointer"
              size={"lg"}
              type="button"
              variant={"outline"}
              onClick={githubSignin}
              disabled={isLoading}
            >
              GitHub G
            </Button>
          </div>
        }
        <p className="text-center">
          {isSignIn ? "No account yet?" : "Have an account already?"}
          <Link
            href={!isSignIn ? "/sign-in" : "/sign-up"}
            className="font-bold text-user-primary ml-1 hover:underline"
          >
            {!isSignIn ? "Sign In" : "Sign Up"}
          </Link>
        </p>
      </div>
    </div>
  );
};

export default AuthForm;
