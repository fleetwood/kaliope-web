import { ReactNode, useEffect } from "react";
import { useSession } from "../../lib/next-auth-react-query";
import { fetchApi } from "../../utils/api";
import { convertToFirebaseError } from "../../utils/FirebaseErrors";
import { log } from "../../utils/helpers";

type UserSessionProps = {
  setUser: React.Dispatch<React.SetStateAction<any>>
  setError: React.Dispatch<React.SetStateAction<any>>
  children?: ReactNode
};

const UserSessionLayout = ({setUser, setError, children}: UserSessionProps) => {
  const [session] = useSession({ required: true });

  useEffect(() => {
    if (session?.user.email) {
      fetchApi(`/user/email/${session.user.email}`)
        .then((u) => {
          log('fullUser return',u)
          // @ts-ignore
          setUser(u !== null ? u : undefined)}
        )
        .catch((e) => {
          log("\tfullUser error", e.message);
          setError(convertToFirebaseError(e));
        });
    } else {
      log('Something broke on session dammit',session)
    }
  }, [session]);
  
  return (
    <>
    {children}
    </>
  );
};
export default UserSessionLayout;
