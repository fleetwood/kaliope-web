import { FormEvent, useState } from "react";
import Link from "next/link";
import Router from "next/router";
import MainLayout from "../components/layouts/MainLayout";

import { FirebaseErrors, IFirebaseErrorCode, convertToFirebaseError } from "../utils/FirebaseErrors";
import { log } from "../utils/helpers";

const Login = () => {
  const [error, setError] = useState<IFirebaseErrorCode>();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError(error)
  };

  const handleGoogleLogin = async (e: FormEvent) => {
    e.preventDefault();
    setError(error)
  }

  return (
    <MainLayout
      sectionTitle="Login"
      subTitle="Sign in to your account"
      className="text-gray-400"
    >
      <div className="m-0">
        <form className="space-y-4 m-0" onSubmit={handleSubmit}>
          <div className="flex flex-col py-2">
            <label>Email address</label>
            <input
              type={"email"}
              className="bg-primary-focus p-2"
            />
          </div>
          <div className="flex flex-col py-2">
            <label>Password</label>
            <input
              type={"password"}
              className="bg-primary-focus p-2"
            />
          </div>

          {error && <div className="text-red-400 italic">{error.code }: {error.message}</div>}

          <button className="bg-orange-600 hover:bg-orange-500 text-gray-200 hover:text-white p-2 w-full transition-colors duration-200 ease-in-out">
            Sign In
          </button>

          <button onClick={handleGoogleLogin} className="bg-blue-600 hover:bg-blue-500 text-gray-200 hover:text-white p-2 w-full transition-colors duration-200 ease-in-out">
            Google Login
          </button>
        </form>

        <p className="mt-12">
          Don't have an account yet? <Link href="./register">Register now</Link>
        </p>
      </div>
    </MainLayout>
  );};
  
export default Login;
