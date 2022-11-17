import { User } from "@prisma/client";
import { GetServerSideProps } from "next";
import { useEffect, useState } from "react";
import MainLayout from "../../components/layouts/MainLayout";
import { av, UserAvatar } from "../../components/ui/userAvatar";
import { __host__, __port__ } from "../../utils/constants";
import {
  FirebaseErrors,
  IFirebaseErrorCode,
} from "../../utils/FirebaseErrors";
import { jsonify } from "../../utils/helpers";
import { IUserResponse } from "../api/user/[uid]";

export const getServerSideProps: GetServerSideProps<IUserResponse|{}> = async (ctx) => {
  const { uid } = ctx.query;

  if (uid) {
    const result = await (await fetch(`http://${__host__}:3000/api/user/${uid}`)).json();
    return { props: { ...result } };
  }
  return { props: {} };
};

export default function UserPage(props?: IUserResponse) {
  const [user, setUser] = useState<User | undefined>();
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
      sectionTitle={user?.displayName || "User Profile"}
    >
      {error && (
        <div className="text-red-400 italic">
          {error.code}: {error.message}
        </div>
      )}
      {user && (
        <div>
          <UserAvatar author={user} size={av.xxl} />
          <pre>
            {jsonify(user)}
          </pre>
        </div>
      )}
    </MainLayout>
  );
}
