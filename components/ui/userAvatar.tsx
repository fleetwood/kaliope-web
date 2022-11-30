import { User } from "@prisma/client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { IFullProfile, IPostProfile } from "../../types/profile/FullProfile";
import { IFullUser } from "../../types/user/FullUser";

export enum av {
  xs = 12,
  sm = 24,
  md = 48,
  lg = 96,
  xl = 128,
  xxl = 256,
}

export type AvatarProps = {
  src?: string|null|undefined
  profile?: IFullProfile | IPostProfile | undefined
  user?: IFullUser | User | undefined
  size?: av
}

export const UserAvatar = (props: AvatarProps) => {
  const [source, setSource] = useState<string>();
  const [imageSize, setImageSize] = useState<av>(av.md);
  const {size} = props;
  const src = props.src
    ||props.profile?.photoURL
    ||props.user?.image
    ||null;

  useEffect(() => {
    if (src) {
      setSource(src);
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
  }, []);

  return source ? (
    <Image
      src={source}
      alt="User avatar"
      height={imageSize}
      width={imageSize}
      sizes="100vw"
      className={`rounded-full border-2 border-primary-content max-w-fit drop-shadow-lg relative z-auto`}
    />
  ) : (
    <></>
  );
};
