import { Prisma } from "@prisma/client";
import { IErrorResponse } from "../../utils/FirebaseErrors";

export const FollowerRelations = Prisma.validator<Prisma.UserArgs>()({
  include: {
    profile: {
      select: {
        Followers: true,
        FollowerProfile: true,
        Follows: true,
        FollowsProfile: true,
        totalFollowers: true,
        totalFollows: true,
      },
    },
  },
});

export type IUserFollowers = Prisma.UserGetPayload<typeof FollowerRelations>;

export const FullProfileRelations = Prisma.validator<Prisma.ProfileArgs>()({
  select: {
    displayName: true,
    photoURL: true,
    books: true,
    ratings: true,
    comments: true,
    galleries: true,
    posts: true,
    Follows: true,
    Followers: true,
    totalFollowers: true,
    totalFollows: true,
    _count: {
      select: {
        Follows: true,
        Followers: true
      }
    },
    Inbox: {
      where: {
        messageParentId: {
          equals: null,
        },
      },
      include: {
        sender: true,
        messages: true,
      },
      orderBy: {
        lastLoginAt: "desc"
      },
    },
    Outbox: {
      where: {
        messageParentId: {
          equals: null,
        },
      },
      include: {
        recipient: true,
        messages: true,
      },
      orderBy: {
        lastLoginAt: "desc"
      },
    },
    user: true,
  },
});

export const PostProfileRelations = Prisma.validator<Prisma.ProfileArgs>()({
  select: {
    photoURL: true,
    displayName: true,
    id: true,
    books: true,
    ratings: true,
    comments: true,
    galleries: true,
    posts: true,
    Follows: true,
    Followers: true,
    Inbox: true,
    Outbox: true,
    user: true,
  },
});

export type IPostProfile = Prisma.ProfileGetPayload<
  typeof PostProfileRelations
>;

export type IFullProfile = Prisma.ProfileGetPayload<
  typeof FullProfileRelations
>;

export type FullProfileResponse = IErrorResponse & {
  profile?: IFullProfile;
};
