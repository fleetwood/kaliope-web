interface AccountBillingProps  {
    className?: string
}
 
const AccountBilling = (props:AccountBillingProps) => {
    return (
    <div className={props.className}>
        <h1>Billing</h1>
    </div>
)}
 
export default AccountBilling;