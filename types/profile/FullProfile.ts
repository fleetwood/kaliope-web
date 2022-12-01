import { Prisma } from "@prisma/client";
import { IErrorResponse } from "../../utils/FirebaseErrors";

export const FullProfileRelations = Prisma.validator<Prisma.ProfileArgs>()({
  include: {
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
  }
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

export type IPostProfile = Prisma.ProfileGetPayload<typeof PostProfileRelations>;

export type IFullProfile = Prisma.ProfileGetPayload<typeof FullProfileRelations>;

export type FullProfileResponse = IErrorResponse & {
  profile?: IFullProfile;
};
