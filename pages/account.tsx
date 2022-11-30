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

const Account = () => {
  const user = null;
  // const [email, setEmail] = useState("");
  // const [name, setName] = useState("");
  // const [password, setPassword] = useState("");
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
    <MainLayout sectionTitle="Account" subTitle={"Please login"}>
      <PageStatus error={error} watch={user} />
      {/* <UserAccount user={user} /> */}
      <button onClick={handleLogout} className="btn btn-secondary">
        Logout
      </button>
    </MainLayout>
  );
};

export default Account;
