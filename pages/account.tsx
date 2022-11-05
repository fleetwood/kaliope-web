import React, { useEffect } from 'react';
import MainLayout from './../components/layouts/MainLayout'
import { UserAuth } from '../firebase/AuthContext';
import Link from 'next/link';

const Account = () => {
    const {user} = UserAuth()
    return (
    <MainLayout sectionTitle="Account" subTitle={user ? user.email : 'Please login'}>
        {user && (
            <><h1>Welcome back {user.email}</h1>
            <pre id="json">
            {JSON.stringify(user, undefined, 2)}
            </pre></>
        )}
        {!user && (
            <h4><Link href="./login">Login here</Link></h4>
        )}
    </MainLayout>
)}

export default Account;
