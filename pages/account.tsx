import React, { FormEvent, useEffect, useState } from "react";
import MainLayout from "./../components/layouts/MainLayout";
import Router from "next/router";
import {
  convertToFirebaseError,
  IFirebaseErrorCode,
} from "../utils/FirebaseErrors";
import { log } from "../utils/helpers";
import PageStatus from "../components/containers/pageStatus";
import UserAccount from "../components/containers/user/userAccount";
import { useSession } from "../lib/next-auth-react-query";
import { IFullUser } from "../types/user/FullUser";

const Account = () => {
  const [user, setUser] = useState<IFullUser | undefined>();
  const [session, loading] = useSession({
    required: true,
    redirectTo: "./login",
    queryConfig: {
      staleTime: 60 * 1000 * 60 * 3, // 3 hours
      refetchInterval: 60 * 1000 * 5, // 5 minutes
    },
  });
  // const [email, setEmail] = useState("");
  // const [name, setName] = useState("");
  // const [password, setPassword] = useState("");

  useEffect(() => {
    if (session?.user) {
      setUser(session.user);
    }
  }, [session]);

  const [error, setError] = useState<IFirebaseErrorCode>();

  const handleLogout = async () => {
    setError(undefined);
    try {
      Router.push("./");
    } catch (e) {
      log("logout error", e);
      setError(convertToFirebaseError(e));
    }
  };

  return (
    <MainLayout
      sectionTitle="Account"
      subTitle={user ? user.name || user.email || "Anonymous" : "Please login"}
    >
      <PageStatus error={error} watch={user} />
      {/* <UserAccount profile={user?.profile} /> */}
      {user && <h2>Welcome back {user?.name || user?.email}</h2>}
      <button onClick={handleLogout} className="btn btn-secondary">
        Logout
      </button>
    </MainLayout>
  );
};

export default Account;
