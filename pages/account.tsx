import React, { FormEvent, useState } from 'react';
import MainLayout from './../components/layouts/MainLayout'
import { login, UserAuth } from '../firebase/AuthContext';
import Link from 'next/link';
import Router from 'next/router';
import { convertToFirebaseError, FirebaseErrors, IFirebaseErrorCode } from '../utils/FirebaseErrors';
import error from 'next/error';
import user from '../assets/icons/user';

const Account = () => {
    const { user, logout } = UserAuth()
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState<IFirebaseErrorCode>();

    const handleLogout = async () => {
        setError(undefined)
        try {
            await logout()
            Router.push('./')
        } catch (e) {
            console.log('logout error', e);
            setError(convertToFirebaseError(e));
        }
    }

    const handleLogin = async (e: FormEvent) => {
        e.preventDefault();
        setError(undefined);
        let error = FirebaseErrors.loginSubmit;
        try {
            await login(email, password);
        } catch (e) {
            console.log('LOGIN FAIL', e);
            setError(convertToFirebaseError(e, error));
        }
    }

    return (
        <MainLayout sectionTitle="Account" subTitle={user ? user.email : 'Please login'}>
            {error && <div className="text-red-400 italic">{error.code}: {error.message}</div>}
            {user && (
                <div>
                    <h1>Welcome back {user.email}</h1>
                    <button onClick={handleLogout} className="bg-orange-600 hover:bg-orange-500 text-gray-200 hover:text-white p-2 my-2 transition-colors duration-200 ease-in-out">Logout</button>
                    <pre id="json">
                        {JSON.stringify(user, undefined, 2)}
                    </pre>
                </div>
            )}
            {!user && (
                <form className="space-y-4 m-0" onSubmit={handleLogin}>
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

                    {error && <div className="text-red-400 italic">{error.code}: {error.message}</div>}

                    <button className="bg-orange-600 hover:bg-orange-500 text-gray-200 hover:text-white p-2 w-full transition-colors duration-200 ease-in-out">
                        Sign In
                    </button>

                    <button className="bg-blue-600 hover:bg-blue-500 text-gray-200 hover:text-white p-2 w-full transition-colors duration-200 ease-in-out">
                        Google Login
                    </button>

                    <p className="mt-12">
                        Don't have an account yet? <Link href="./register">Register now</Link>
                    </p>
                </form>
            )}
        </MainLayout>
    )
}

export default Account;
