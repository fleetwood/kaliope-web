import { useEffect, useState } from "react";
import MainLayout from "../../components/layouts/MainLayout";
import { av, UserAvatar } from "../../components/ui/userAvatar";
import { convertToFirebaseError, IFirebaseErrorCode } from "../../utils/FirebaseErrors";
import { jsonify, log } from "../../utils/helpers";
import { fetchApi } from "../../utils/api";
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
      fetchApi(`/user/${id}`)
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
      log('No slug')
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
