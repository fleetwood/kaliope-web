import { User } from "@prisma/client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

export enum av {
  xs = 12,
  sm = 24,
  md = 48,
  lg = 96,
  xl = 128,
  xxl = 256,
}

export type userAvProps = {
  size?: av
  author: User
}

export const UserAvatar = (props: userAvProps) => {
  const [source, setSource] = useState<string>();
  const [imageSize, setImageSize] = useState<av>(av.md);

  const {size, author} = props;

  useEffect(() => {
    if (author && author.photoURL) {
      setSource(author.photoURL);
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
  }, [author,imageSize]);

  return source ? (
    <Image
      src={source}
      alt="User avatar"
      height={imageSize}
      width={imageSize}
      sizes="100vw"
      className={`rounded-full border-2 border-gray-500 max-w-fit drop-shadow-lg relative z-auto`}
    />
  ) : (
    <></>
  );
};
