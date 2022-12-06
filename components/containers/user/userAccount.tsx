import { IFullUser } from "../../../types/user/FullUser";
import { __host__ } from "../../../utils/constants";

const UserAccount = (user:IFullUser) => {
  return (
    <div>
      <div className="tabs">
        <a className="tab tab-bordered">Profile</a> 
        <a className="tab tab-bordered tab-active">Messages</a> 
        <a className="tab tab-bordered">Billing</a>
      </div>
      <button className="btn">Button</button>
      <pre id="json">{JSON.stringify(user, undefined, 2)}</pre>
    </div>
  );
};

export default UserAccount;
