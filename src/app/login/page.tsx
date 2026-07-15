"use client"
import { authClient } from "@/lib/auth-client";
import { Check } from "@gravity-ui/icons";
import {
  Button,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";

import Link from "next/link";
import { BsGoogle } from "react-icons/bs";

const RegisterPage = () => {
  const onSubmit =async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data: Record<string, string> = {};
    formData.forEach((value, key) => {
      data[key] = value.toString();
    });
    const {password,email} = data;
    const { data:submitData, error } = await authClient.signIn.email({
    email, // required
    password, // required
    rememberMe: true,
    callbackURL: "/",
});
    alert(`Form submitted with: ${JSON.stringify(data, null, 2)}`);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 dark:bg-zinc-950 px-4 py-12 sm:px-6 lg:px-8 transition-colors duration-200">
      <div className="w-full max-w-md space-y-8 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-6 shadow-xl sm:p-8 transition-colors duration-200">
        
        {/* Header Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
            Well come at Gamy boy
          </h2>
          <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">
            Get started by filling out your details below
          </p>
        </div>

        {/* Form Container */}
        <Form className="flex flex-col gap-5" onSubmit={onSubmit}>
          
        
         

          {/* Email Field */}
          <TextField
            isRequired
            name="email"
            type="email"
            className="w-full"
            validate={(value) => {
              if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                return "Please enter a valid email address";
              }
              return null;
            }}
          >
            <Label className="text-sm font-semibold text-zinc-700 dark:text-zinc-300">Email Address</Label>
            <Input placeholder="john@example.com" className="mt-1.5 text-white" />
            <FieldError className="text-xs text-danger mt-1" />
          </TextField>

          {/* Password Field */}
          <TextField
            isRequired
            minLength={8}
            name="password"
            type="password"
            className="w-full"
            validate={(value) => {
              if (value.length < 8) {
                return "Password must be at least 8 characters";
              }
              if (!/[A-Z]/.test(value)) {
                return "Password must contain at least one uppercase letter";
              }
              if (!/[0-9]/.test(value)) {
                return "Password must contain at least one number";
              }
              return null;
            }}
          >
            <Label className="text-sm font-semibold text-zinc-700 dark:text-zinc-300">Password</Label>
            <Input placeholder="••••••••" className="mt-1.5 text-white" />
            <Description className="text-xs text-zinc-400 dark:text-zinc-500 mt-1">
              Must be at least 8 characters with 1 uppercase and 1 number
            </Description>
            <FieldError className="text-xs text-danger mt-1" />
          </TextField>

          {/* Form Actions */}
          <div className="flex gap-3 mt-2">
            <Button type="submit" className="flex-1 font-medium text-white">
              <Check className="mr-1 h-4 w-4" />
              Log In
            </Button>
            <Button type="reset"  className="font-medium">
              Reset
            </Button>
          </div>
        </Form>

        {/* Divider Row */}
        <div className="relative flex py-2 items-center">
          <div className="flex-grow border-t border-zinc-200 dark:border-zinc-800"></div>
          <span className="flex-shrink mx-4 text-xs uppercase tracking-wider text-zinc-400 dark:text-zinc-500 font-medium">
            Or continue with
          </span>
          <div className="flex-grow border-t border-zinc-200 dark:border-zinc-800"></div>
        </div>

        {/* Social Sign In */}
        <Button 
          
          className="w-full bg-red-700 border-zinc-200 dark:border-zinc-700 text-zinc-700 dark:text-zinc-200 font-semibold shadow-sm hover:bg-zinc-50 dark:hover:bg-zinc-800" 
          size="md"
        >
          <BsGoogle className="mr-2 text-violet-500" /> {/* Kept Google brand red strictly on the icon */}
          Register with Google
        </Button>

        {/* Redirect to Login */}
        <p className="text-center text-sm text-zinc-500 dark:text-zinc-400 mt-4">
          Already don't have an account?{" "}
          <Link 
            href="/resister" 
            className="font-medium text-primary hover:underline transition-colors"
          >
            Resister 
          </Link>
        </p>

      </div>
    </div>
  );
};

export default RegisterPage;