interface AccountProfileProps  {
    className?: string
}
 
const AccountProfile = (props:AccountProfileProps) => {
    return (
    <div className={props.className}>
        <h1>Profile</h1>
    </div>
)}
 
export default AccountProfile;