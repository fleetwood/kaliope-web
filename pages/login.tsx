import React, { FC, useState, useEffect } from "react";
import {
  getProviders,
  signOut,
  signIn,
  ClientSafeProvider,
  LiteralUnion,
} from "next-auth/react";
import { BuiltInProviderType } from "next-auth/providers";
import { useSession } from "../lib/next-auth-react-query";
import MainLayout from "../components/layouts/MainLayout";
import { IFullUser } from "../types/user/FullUser";

const Login: FC = () => {
  const [providers, setproviders] = useState<Record<
    LiteralUnion<BuiltInProviderType, string>,
    ClientSafeProvider
  > | null>();
  const [user, setUser] = useState<IFullUser | undefined>();
  const [session, loading] = useSession({
    required: true,
    redirectTo: "./login",
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

  useEffect(() => {
    if (session?.user) {
      setUser(session.user);
    }
  }, [session]);

  return (
    <MainLayout
      sectionTitle="Login"
      subTitle={
        user
          ? user.profile?.displayName || user.name || user.email || undefined
          : "Please login"
      }
      className="text-gray-400"
    >
      <div className="m-0">
        {/* {error && <div className="text-red-400 italic">{error.code }: {error.message}</div>} */}
        {session && (
          <>
            Signed in as {session.user?.email} <br />
            <button 
              onClick={() => signOut()}
              className="bg-primary hover:bg-primary-focus text-primary-content p-2 w-full transition-colors duration-200 ease-in-out"
              >
              Sign out
            </button>
          </>
        )}
        {!session && (
          <>
            <button
              onClick={() => signIn(providers?.email.id)}
              className="bg-orange-600 hover:bg-orange-500 text-gray-200 hover:text-white p-2 w-full transition-colors duration-200 ease-in-out"
            >
              Email Login
            </button>

            <button
              onClick={() => signIn(providers?.google.id)}
              className="bg-blue-600 hover:bg-blue-500 text-gray-200 hover:text-white p-2 w-full transition-colors duration-200 ease-in-out"
            >
              Google Login
            </button>
          </>
        )}
      </div>
    </MainLayout>
  );
};

export default Login;
