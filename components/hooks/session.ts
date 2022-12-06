import { useEffect, useState } from "react";
import { useSession } from "../../lib/next-auth-react-query";
import { log } from "../../utils/helpers";

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
      log('session.User...',session.user)
      setUser(session.user);
    }
  }, [session]);

  return [user,setUser]
}

export const CurrentSession = (required=false) => {
  const [currentSession, setCurrentSession] = useState<any>();
  const [session] = useSession({required});

  useEffect(() => {
    if (session) {
      log('session.current...')
      setCurrentSession(session);
    }
  }, [session]);

  return [currentSession]
}
