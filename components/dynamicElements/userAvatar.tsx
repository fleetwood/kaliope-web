import Image from "next/image";
import React, { useEffect, useState } from "react";
import { UserAuth } from "../../firebase/AuthContext";

export enum av {
  xs = 12,
  sm = 24,
  md = 48,
  lg = 64,
  xl = 96,
  xxl = 128,
}

export const UserAvatar = (props: any) => {
  const [source, setSource] = useState();
  const { user } = UserAuth();
  const [imageSize, setImageSize] = useState(av.md);

  const {size} = props;

  useEffect(() => {
    if (user && user.photoURL) {
      setSource(user.photoURL);
      setImageSize(
        size && size === av.xs ? av.xs
        : size && size === av.sm ? av.sm
        : size && size === av.md ? av.md
        : size && size === av.lg ? av.lg
        : size && size === av.xl ? av.xl
        : size && size === av.xxl ? av.xxl
        : av.md
        )
    }
  }, [user,imageSize]);

  return source ? (
    <Image
      src={source}
      alt="User avatar"
      height={imageSize}
      width={imageSize}
      className="rounded-full border-2 border-gray-500 drop-shadow-lg"
    />
  ) : (
    <></>
  );
};
