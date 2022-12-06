interface AccountInboxProps  {
    className?: string
}
 
const AccountInbox = (props:AccountInboxProps) => {
    return (
    <div className={props.className}>
        <h1>Inbox</h1>
    </div>
)}
 
export default AccountInbox;