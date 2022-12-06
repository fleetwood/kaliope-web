import React, { useEffect, useState } from "react";
import MainLayout from "./../components/layouts/MainLayout";
import {
  convertToFirebaseError,
  IFirebaseErrorCode,
} from "../utils/FirebaseErrors";
import { log } from "../utils/helpers";
import PageStatus from "../components/containers/pageStatus";
import UserAccount from "../components/containers/user/userAccount";
import { IFullUser } from "../types/user/FullUser";
import { signOut } from "next-auth/react";
import { useSession } from "../lib/next-auth-react-query";
import { fetchApi } from "../utils/api";

const Account = () => {
  const [user, setUser] = useState<IFullUser>();
  const [session] = useSession({ required: true });
  const [error, setError] = useState<IFirebaseErrorCode>();

  useEffect(() => {
    if (session?.user.email) {
      fetchApi(`/user/email/${session.user.email}`)
        .then((u) => {
          log('fullUser return',u)
          // @ts-ignore
          setUser(u !== null ? u : undefined)}
        )
        .catch((e) => {
          log("\tfullUser error", e.message);
          setError(convertToFirebaseError(e));
        });
    } else {
      log('Something broke on session dammit',session)
    }
  }, [session]);

  const handleLogout = async () => {
    setError(undefined);
    try {
      signOut();
    } catch (e) {
      log("logout error", e);
      setError(convertToFirebaseError(e));
    }
  };

  return (
    <MainLayout
      sectionTitle="Account"
      // @ts-ignore
      subTitle={
        user
          ? user.profile?.displayName || user?.name || "Anonymous"
          : "Please login"
      }
    >
      <PageStatus error={error} watch={user} />
      {user && 
        <UserAccount {...user} />
      }
      
      <button onClick={handleLogout} className="btn btn-secondary">
        Logout
      </button>
    </MainLayout>
  );
};

export default Account;
