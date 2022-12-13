import { Prisma } from "@prisma/client";
import { IErrorResponse } from "../../utils/ResponseErrors";

export const BaseProfileRelations = Prisma.validator<Prisma.ProfileArgs>()({
  select: {
    id: true,
    displayName: true,
    photoURL: true,
    createdAt: true,
    lastLoginAt: true,
    totalLikes: true,
    totalShares: true,
    totalFollows: true,
    totalFollowers: true,
    _count: {
      select: {
        books: true,
        ratings: true,
        comments: true,
        posts: true,
      },
    },
  },
});

export const FollowerProfileRelations = Prisma.validator<Prisma.ProfileArgs>()({
  select: {
    ...BaseProfileRelations.select,
    Followers: { ...BaseProfileRelations },
    Follows: { ...BaseProfileRelations },
  },
});

export const FullProfileRelations = Prisma.validator<Prisma.ProfileArgs>()({
  select: {
    ...FollowerProfileRelations.select,
    comments: true,
    galleries: true,
    books: true,
    user: true,
    Inbox: {
      where: {
        read: false,
      },
    },
  },
});

export type IBaseProfile = Prisma.ProfileGetPayload<typeof BaseProfileRelations>;
export type BaseProfileResponse = IErrorResponse<IBaseProfile>;

export type IFollowersProfile = Prisma.ProfileGetPayload<typeof FollowerProfileRelations>;
export type FollowersProfileResponse = IErrorResponse<IFollowersProfile>;

export type IFullProfile = Prisma.ProfileGetPayload<typeof FullProfileRelations>;
export type FullProfileResponse = IErrorResponse<IFullProfile>;
