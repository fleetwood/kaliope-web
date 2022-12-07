import { useEffect, useState } from "react";
import MainLayout from "../../components/layouts/MainLayout";
import { av, UserAvatar } from "../../components/ui/userAvatar";
import { convertToFirebaseError, IFirebaseErrorCode } from "../../utils/FirebaseErrors";
import { jsonify, log, logError } from "../../utils/helpers";
import { getApi } from "../../utils/api";
import {
  IFullUser,
} from "../../types/user/FullUser";
import PageStatus from "../../components/containers/pageStatus";
import { useRouter } from "next/router";

export default function UserPage() {
  const router = useRouter()
  const { id } = router.query
  const [user, setUser] = useState<IFullUser | undefined>();
  const [error, setError] = useState<IFirebaseErrorCode>();

  useEffect(() => {
    if (id) {
      getApi(`/user/${id}`)
        .then((u) => {
          // @ts-ignore
          setUser(u !== null ? u : undefined)}
        )
        .catch((e) => {
          logError("\tUserPage error", e.message);
          setError(convertToFirebaseError(e));
        });
    } else {
      logError('UserPage error: No slug')
    }
  }, []);

  return (
    <MainLayout sectionTitle={user?.profile?.displayName || user?.name || "User Profile"}>
      <PageStatus error={error} watch={user} />
      {user && (
        <div>
          <UserAvatar user={user} size={av.xxl} />
          <pre>{jsonify(user)}</pre>
        </div>
      )}
    </MainLayout>
  );
}
