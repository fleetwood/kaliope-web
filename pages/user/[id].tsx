import { useEffect, useState } from "react";
import MainLayout from "../../components/layouts/MainLayout";
import { av, UserAvatar } from "../../components/ui/userAvatar";
import { convertToResponseError, IErrorCode } from "../../utils/ResponseErrors";
import { jsonify, log, logError } from "../../utils/helpers";
import { getApi, sendApi } from "../../utils/api";
import {
  IFullUser,
} from "../../types/user/FullUser";
import { useRouter } from "next/router";
import UserSessionLayout from "../../components/layouts/UserSession";
import PageStatus from "../../components/containers/pageStatus";

export default function UserPage() {
  const router = useRouter()
  const { id } = router.query
  const [user, setUser] = useState<IFullUser | undefined>();
  const [sessionUser, setSessionUser] = useState<IFullUser>();
  const [error, setError] = useState<IErrorCode>();

  useEffect(() => {
    if (id) {
      getApi(`/user/${id}`)
        .then((u) => {
          // @ts-ignore
          setUser(u !== null ? u : undefined)}
        )
        .catch((e) => {
          logError("\tUserPage error", e.message);
          setError(convertToResponseError(e));
        });
    } else {
      logError('UserPage error: No slug')
    }
  }, []);

  const followUser = async () => {
    if (sessionUser) {
      const results = await sendApi(`user/follow`, {userid: sessionUser.id, followid: user?.id});
      if (results.error) {
        setError(results.error)
      }
    }
  }

  return (
    <MainLayout sectionTitle={user?.profile?.displayName || user?.name || "User Profile"}>
      <UserSessionLayout setUser={setSessionUser} setError={setError} required={false} />
      <PageStatus error={error} watch={user} />
      {user && (
        <div>
          <UserAvatar user={user} size={av.xxl} />
          <button className="btn btn-primary text-primary-content p-4" onClick={followUser}>Follow</button>
          <pre>{jsonify(user)}</pre>
        </div>
      )}
    </MainLayout>
  );
}
