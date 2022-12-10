import { Prisma } from "@prisma/client";
import { IErrorResponse } from "../../utils/FirebaseErrors";

export const FollowerRelations = Prisma.validator<Prisma.ProfileArgs>()({
    select: {
      id: true,
      displayName: true,
      photoURL: true,
      Followers: true,
      Follows: true,
      totalFollowers: true,
      totalFollows: true,
    },
});

export type IUserFollowers = Prisma.ProfileGetPayload<typeof FollowerRelations>;

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
        visible: {
          equals: true
        }
      },
      include: {
        sender: true,
        messages: {
          orderBy: {
            lastLoginAt: "asc"
          },
        },
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
        visible: {
          equals: true
        }
      },
      include: {
        recipient: true,
        messages: {
          orderBy: {
            lastLoginAt: "asc"
          },
        },
      },
      orderBy: {
        lastLoginAt: "desc"
      },
    },
    user: true,
  },
});

export const FullInboxRelations = Prisma.validator<Prisma.ProfileArgs>()({
  ...FollowerRelations,
  select: {
    Inbox: {
      where: {
        messageParentId: {
          equals: null,
        },
      },
      orderBy: {
        lastLoginAt: "desc"
      },
      include: {
        sender: {
          ...FollowerRelations
        }
      }
    },
    Outbox: {
      where: {
        messageParentId: {
          equals: null,
        },
      },
      include: {
        recipient: {
          ...FollowerRelations
        }
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

export type IInboxProfile = Prisma.ProfileGetPayload<
  typeof FullInboxRelations
>;

export type FullProfileResponse = IErrorResponse & {
  profile?: IFullProfile;
};

export type FullInboxResponse = IErrorResponse & {
  inbox?: IInboxProfile;
};
