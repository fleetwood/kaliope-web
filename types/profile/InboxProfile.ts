import { Prisma } from "@prisma/client";
import { IErrorResponse } from "../../utils/FirebaseErrors";

export const FullInboxRelations = Prisma.validator<Prisma.ProfileArgs>()({
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
        recipient: true
      }
    },
    Outbox: {
      where: {
        messageParentId: {
          equals: null,
        },
      },
      include: {
        sender: true,
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
