import { useEffect, useState } from "react";
import { useSession } from "../../lib/next-auth-react-query";

export type SessionUser = {
  name: string,
  email: string,
  image?: string
}

export const UserSession = (required=false) => {
  const [user, setUser] = useState<SessionUser | undefined>();
  const [session] = useSession({required});

  useEffect(() => {
    if (session?.user) {
      setUser(session.user);
    }
  }, [session]);

  return [user,setUser]
}
