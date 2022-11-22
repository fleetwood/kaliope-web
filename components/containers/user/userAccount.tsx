import { User } from "@prisma/client";
import { useState } from "react";
import { __host__ } from "../../../utils/constants";
import { UserIcon } from "../../ui/icons";
import { av, UserAvatar } from "../../ui/userAvatar";
import Navbar from "../navbar";

type UserAccountProps = {
  user: User;
};

const UserAccount = (props: UserAccountProps) => {
  const [user, setUser] = useState<User>();
  const [tab, setTab] = useState();

  const update = async () => {
    const url = `http://${__host__}:3000/api/user/${user?.uid || 0}`;
    const results = await fetch(url);
  };

  const tabSelect = (select: string) => {};

  return (
    <div>
      <h2>Welcome back {props.user?.displayName}</h2>
      
      <div className="tabs">
        <a className="tab tab-bordered">Profile</a> 
        <a className="tab tab-bordered tab-active">Messages</a> 
        <a className="tab tab-bordered">Billing</a>
      </div>
      <button className="btn">Button</button>
      <pre id="json">{JSON.stringify(props.user, undefined, 2)}</pre>
    </div>
  );
};

export default UserAccount;
