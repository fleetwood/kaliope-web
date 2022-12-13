import { ReactNode, useEffect } from "react";
import { useSession } from "../../lib/next-auth-react-query";
import { getApi } from "../../utils/api";
import { convertToResponseError } from "../../utils/ResponseErrors";
import { logError } from "../../utils/helpers";

type UserSessionProps = {
  setUser: React.Dispatch<React.SetStateAction<any>>
  setError: React.Dispatch<React.SetStateAction<any>>
  children?: ReactNode
  required?: boolean
};

const UserSessionLayout = ({setUser, setError, required = true, children}: UserSessionProps) => {
  const [session] = useSession({ required });

  useEffect(() => {
    if (session?.user.email) {
      getApi(`/user/byEmail/${session.user.email}`)
        .then((u) => {
          // @ts-ignore
          setUser(u !== null ? u : undefined)}
        )
        .catch((e) => {
          logError("\tUserSession error fetching unique user", e.message);
          setError(convertToResponseError(e));
        });
    } else {
      logError('UserSession could not determine user email',session)
    }
  }, [session]);
  
  return (
    <>
    {children}
    </>
  );
};
export default UserSessionLayout;
