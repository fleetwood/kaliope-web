import Link from "next/link";
import { FormEvent, useState } from "react";
import MainLayout from "../components/layouts/MainLayout";
import { login } from "../firebase/AuthContext";
import { errorMessage } from "../types/props";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<errorMessage>();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError(undefined);
    try {
      console.log("LOGIN: LOGIN USER", email, password);
      const user = await login(email, password);
    } catch (e) {
      console.log("FAILED LOGIN USER", e);
      //todo: handle errors better
      setError({
        message: "User login failed",
        code: "123",
      });
    }
  };

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
              onChange={(e) => setEmail(e.target.value)}
              className="bg-gray-800 border-[1px] border-gray-500 text-gray-300 p-2"
            />
          </div>
          <div className="flex flex-col py-2">
            <label>Password</label>
            <input
              type={"password"}
              onChange={(e) => setPassword(e.target.value)}
              className="bg-gray-800 border-[1px] border-gray-500 text-gray-300 p-2"
            />
          </div>

          {error && <div className="text-red-400 italic">{error.message}</div>}

          <button className="bg-orange-600 hover:bg-orange-500 text-gray-200 hover:text-white p-2 w-full transition-colors duration-200 ease-in-out">
            Sign In
          </button>

          <button className="bg-blue-600 hover:bg-blue-500 text-gray-200 hover:text-white p-2 w-full transition-colors duration-200 ease-in-out">
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
