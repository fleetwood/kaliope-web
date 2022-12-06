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
import UserSessionLayout from "../components/layouts/UserSession";

const Account = () => {
  const [user, setUser] = useState<IFullUser>();
  const [error, setError] = useState<IFirebaseErrorCode>();

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
      <UserSessionLayout setUser={setUser} setError={setError}>
        <PageStatus error={error} watch={user} />
        {user && <UserAccount {...user} />}

        <button onClick={handleLogout} className="btn btn-secondary">
          Logout
        </button>
      </UserSessionLayout>
    </MainLayout>
  );
};

export default Account;
