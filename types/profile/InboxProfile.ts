import { Prisma } from "@prisma/client";
import { IErrorResponse } from "../../utils/ResponseErrors";
import { FullProfileRelations } from "./FullProfile";

export const FullInboxRelations = Prisma.validator<Prisma.ProfileArgs>()({
  select: {
    ...FullProfileRelations.select,
    Inbox: {
      where: {
        messageParentId: {
          equals: null,
        },
        visible: {
          equals: true,
        },
      },
      include: {
        sender: {
          ...FullProfileRelations,
        },
        messages: {
          orderBy: {
            lastLoginAt: "asc",
          },
        },
      },
      orderBy: {
        lastLoginAt: "desc",
      },
    },
    Outbox: {
      where: {
        messageParentId: {
          equals: null,
        },
        visible: {
          equals: true,
        },
      },
      include: {
        recipient: {
          ...FullProfileRelations,
        },
        messages: {
          orderBy: {
            lastLoginAt: "asc",
          },
        },
      },
      orderBy: {
        lastLoginAt: "desc",
      },
    },
    _count: {
      select: {
        comments: true,
        books: true,
        posts: true,
      },
    },
  },
});

export type IInboxProfile = Prisma.ProfileGetPayload<typeof FullInboxRelations>;
export type FullInboxResponse = IErrorResponse<IInboxProfile>;
