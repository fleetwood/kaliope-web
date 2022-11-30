import React, { FC, useState, useEffect } from 'react';
import { getProviders, signOut, signIn, ClientSafeProvider, LiteralUnion } from 'next-auth/react';
import { BuiltInProviderType } from 'next-auth/providers';
import { useSession } from '../lib/next-auth-react-query';
import MainLayout from '../components/layouts/MainLayout';

const Login: FC = () => {
  const [providers, setproviders] = useState<Record<LiteralUnion<BuiltInProviderType, string>,ClientSafeProvider> | null>();
  const [session, loading] = useSession({
    required: true,
    redirectTo: 'http://localhost:3000',
    queryConfig: {
      staleTime: 60 * 1000 * 60 * 3, // 3 hours
      refetchInterval: 60 * 1000 * 5, // 5 minutes
    },
  });

  useEffect(() => {
    const setTheProviders = async () => {
      const setupProviders = await getProviders();
      setproviders(setupProviders);
    };
    setTheProviders();
  }, []);

  if (loading) {
    return <h1>Loading...</h1>;
  }
  if (session) {
    return (
      <>
        Signed in as {session.user?.email} <br />
        <button type="button" onClick={() => signOut()}>
          Sign out
        </button>
      </>
    );
  }
  return (
    <MainLayout
    sectionTitle="Login"
    subTitle="Sign in to your account"
    className="text-gray-400"
  >
    <div className="m-0">
      {/* {error && <div className="text-red-400 italic">{error.code }: {error.message}</div>} */}

      <button 
        onClick={() => signIn(providers?.email.id)} 
        className="bg-orange-600 hover:bg-orange-500 text-gray-200 hover:text-white p-2 w-full transition-colors duration-200 ease-in-out">
        Email Login
      </button>

      <button 
        onClick={() => signIn(providers?.google.id)} 
        className="bg-blue-600 hover:bg-blue-500 text-gray-200 hover:text-white p-2 w-full transition-colors duration-200 ease-in-out">
        Google Login
      </button>

    </div>
  </MainLayout>
  );
};

  
export default Login;
