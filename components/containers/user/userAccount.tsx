import { Profile } from "@prisma/client";
import { useEffect, useState } from "react";
import { FullUserResponse, IFullUser } from "../../../types/user/FullUser";
import { fetchApi } from "../../../utils/api";
import { __host__ } from "../../../utils/constants";
import { UserIcon } from "../../ui/icons";
import { av, UserAvatar } from "../../ui/userAvatar";
import Navbar from "../navbar";

type UserAccountProps = {
  user: Profile;
};

const UserAccount = (props: UserAccountProps) => {
  const [user, setUser] = useState<IFullUser>();
  const [error,setError] = useState()
  const [tab, setTab] = useState();

  useEffect(() => {
    const url = `http://${__host__}:3000/api/user/${user?.id || 0}`;
    async () => { 
      await fetchApi(url)
        .then((results) => {
          if (results.user) {
            setUser(results.user)
          } else {
            setError(results.error)
          }
        })
        .catch(e => setError(e))
    }
  },[])

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
