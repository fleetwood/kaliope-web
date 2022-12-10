import { Prisma } from "@prisma/client";
import { IErrorResponse } from "../../utils/FirebaseErrors";
import { FollowerRelations } from "./FullProfile";

export const FullInboxRelations = Prisma.validator<Prisma.ProfileArgs>()({
  ...FollowerRelations,
  include: {
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
        recipient: {
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
        sender: {
          ...FollowerRelations
        },
        messages: true
      },
      orderBy: {
        lastLoginAt: "desc"
      },
    }
  },
});

export type IInboxProfile = Prisma.ProfileGetPayload<
  typeof FullInboxRelations
>;

export type FullInboxResponse = IErrorResponse & {
  messages?: IInboxProfile;
};
