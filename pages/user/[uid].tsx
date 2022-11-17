import { User } from "@prisma/client";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import MainLayout from "../../components/layouts/MainLayout";
import { av, UserAvatar } from "../../components/ui/userAvatar";
import { __host__, __port__ } from "../../utils/constants";
import {
  convertToFirebaseError,
  FirebaseErrors,
  IFirebaseErrorCode,
} from "../../utils/FirebaseErrors";
import { jsonify, log, logError } from "../../utils/helpers";

type UserPageProps = {
  user?: User;
  error?: IFirebaseErrorCode;
};

export const getServerSideProps: GetServerSideProps<UserPageProps|{}> = async (ctx) => {
  const { uid } = ctx.query;

  if (uid) {
    const result = await (await fetch(`http://${__host__}:3000/api/user/${uid}`)).json();
    log('SSR',result)
    return { props: { ...result } };
  }
  return { props: {} };
};

export default function UserPage(props?: UserPageProps) {
  const [user, setUser] = useState<User | undefined>();
  const [error, setError] = useState<IFirebaseErrorCode>();

  useEffect(() => {
    if (props?.user) {
      setError(undefined);
      setUser(props.user);
      log('CLIENT',props)
    } else if (props?.error) {
      setError(props.error);
    } else {
        log('CLIENT GOT NOTHING',props)
    }
  }, [user, error]);

  return (
    <MainLayout
      sectionTitle={user?.displayName || "User Profile"}
      subTitle="the writer's site"
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
