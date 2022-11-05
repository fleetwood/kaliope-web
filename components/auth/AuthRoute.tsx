
import { getAuth } from "firebase/auth";
import { useRouter } from "next/router";

export interface IAuthRouteProps {}

const AuthRoute = (props: IAuthRouteProps) => {
    // const { children } = props;
    const auth = getAuth()
    const router = useRouter()
        
    return (
    <div></div>
)}

export default AuthRoute