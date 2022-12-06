import { MouseEventHandler, useState } from "react";
import { IFullUser } from "../../../types/user/FullUser";
import { __host__ } from "../../../utils/constants";
import AccountBilling from "../account/billing";
import AccountInbox from "../account/inbox";
import AccountProfile from "../account/profile";

const UserAccount = (user:IFullUser) => {
  const [activeTab, setActiveTab] = useState('Messages')

  const isActive = (tab:string) => tab === activeTab ? 'tab tab-bordered tab-active' : 'tab tab-bordered'
  const isTabActive = (tab:string) => tab === activeTab ? '' : 'hidden'
  const switchTab = (tab:string) => setActiveTab(tab)

  return (
    <div>
      <div className="tabs">
        <a className={isActive('Profile')} onClick={() => switchTab('Profile')}>Profile</a> 
        <a className={isActive('Messages')} onClick={() => switchTab('Messages')}>Messages</a> 
        <a className={isActive('Billing')} onClick={() => switchTab('Billing')}>Billing</a> 
      </div>
      <AccountBilling className={isTabActive('Billing')} />
      <AccountInbox className={isTabActive('Messages')}  />
      <AccountProfile className={isTabActive('Profile')}  />
      <pre id="json">{JSON.stringify(user, undefined, 2)}</pre>
    </div>
  );
};

export default UserAccount;
