import Link from "next/link";
import React, { FormEvent, useState } from "react";
import MainLayout from "../components/layouts/MainLayout";
import { createUser } from "../firebase/AuthContext";
import { errorMessage } from "../types/props";

const Register = () => {
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [error, setError] = useState<errorMessage>()
  
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError(undefined);
    try {
      console.log('REGISTER: CREATING USER',email,password)
      const user = await createUser(email,password);
    } catch (e) {
      console.log('FAILED CREATE USER', e);
      //todo: handle errors better
      setError({
        message: "User create failed",
        code: "123",
      });
    }
  };
  
  return (
  <MainLayout
    sectionTitle="Register"
    subTitle="Create a new account"
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
          {error && (
              <div className="text-red-400 italic">{error.message}</div>
          )}
        <button className="bg-orange-600 hover:bg-orange-500 text-gray-200 hover:text-white p-2 w-full transition-colors duration-200 ease-in-out" >
          Register
        </button>
      </form>

      <p className="mt-12">
        Existing account <Link href="./login">login here</Link>
      </p>
    </div>
  </MainLayout>
)};

export default Register;
