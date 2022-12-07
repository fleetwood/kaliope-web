import { MouseEventHandler, useState } from "react";
import { IFullUser } from "../../../types/user/FullUser";
import { __host__ } from "../../../utils/constants";
import AccountBilling from "../account/billing";
import AccountInbox from "../account/inbox";
import AccountProfile from "../account/profile";

const UserAccount = (user:IFullUser) => {
  const [activeTab, setActiveTab] = useState('Inbox')

  const tabClass = 'tab tab-bordered text-lg w-full md:w-[25%]'
  const isActive = (tab:string) => tab === activeTab ? tabClass + ' tab-active txt-primary' : tabClass
  const isTabActive = (tab:string) => tab === activeTab ? '' : 'hidden'
  const switchTab = (tab:string) => setActiveTab(tab)

  return (
    <div>
      <div className="tabs w-full">
        <a className={isActive('Inbox')} onClick={() => switchTab('Inbox')}>Inbox</a> 
        <a className={isActive('Profile')} onClick={() => switchTab('Profile')}>Profile</a> 
        <a className={isActive('Billing')} onClick={() => switchTab('Billing')}>Billing</a> 
        <a className={isActive('User')} onClick={() => switchTab('User')}>User</a> 
      </div>
      <AccountInbox className={'transition-all duration-200 '+ isTabActive('Inbox')} user={user} />
      <AccountBilling className={'transition-all duration-200 '+ isTabActive('Billing')} />
      <AccountProfile className={'transition-all duration-200 '+ isTabActive('Profile')} user={user} />
      <div className={'transition-all duration-200 '+ isTabActive('User')}>
        <pre id="json">{JSON.stringify(user, undefined, 2)}</pre>
      </div>
    </div>
  );
};

export default UserAccount;
