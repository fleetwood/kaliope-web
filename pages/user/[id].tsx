import { GetServerSideProps } from "next";
import { useEffect, useState } from "react";
import MainLayout from "../../components/layouts/MainLayout";
import { av, UserAvatar } from "../../components/ui/userAvatar";
import {
  FirebaseErrors,
  IFirebaseErrorCode,
} from "../../utils/FirebaseErrors";
import { jsonify } from "../../utils/helpers";
import { fetchApi } from "../../utils/api";
import { FullUserResponse, IFullUser } from "../../types/user/FullUser";

export const getServerSideProps: GetServerSideProps<FullUserResponse|{}> = async (ctx) => {
  const { id } = ctx.query;

  if (id) {
    const result = await fetchApi(`user/${id}`)
    return { props: { ...result } };
  }
  return { props: {} };
};

export default function UserPage(props?: FullUserResponse) {
  const [user, setUser] = useState<IFullUser | undefined>();
  const [error, setError] = useState<IFirebaseErrorCode>();

  useEffect(() => {
    if (props?.user) {
      setError(undefined);
      setUser(props.user);
    } else if (props?.error) {
      setError(props.error);
    } else {
        setError(FirebaseErrors.generic)
    }
  }, [user, error]);

  return (
    <MainLayout
      sectionTitle={user?.name || "User Profile"}
    >
      {error && (
        <div className="text-red-400 italic">
          {error.code}: {error.message}
        </div>
      )}
      {user && (
        <div>
          {/* <UserAvatar user={props?.user} size={av.xxl} /> */}
          <pre>
            {jsonify(user)}
          </pre>
        </div>
      )}
    </MainLayout>
  );
}
