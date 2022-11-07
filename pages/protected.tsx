import Router, {useRouter} from "next/router";
import { ReactNode } from "react";
import MainLayout from "../components/layouts/MainLayout";
import {UserAuth} from './../firebase/AuthContext'

type ProtectedPageProps= {
    className?: string;
    children?: ReactNode;
}

const Protected = (props:ProtectedPageProps) => {
    const {user} = UserAuth()
    const router = useRouter()

    const {className, children} = props;

    if (!user) {
        const path = router.pathname    
        Router.push({
            pathname: './login',
            query: `refurl=${path}`
        })
    }

    return (
        <MainLayout sectionTitle="Protected Page">
            {children}
        </MainLayout>
        
    )
}

export default Protected