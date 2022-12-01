import { Prisma } from "@prisma/client";
import { IErrorResponse } from "../../utils/FirebaseErrors";
import { FullProfileRelations } from "../profile/FullProfile";

export const FullUserRelations = Prisma.validator<Prisma.UserArgs>()({
  include: {
    profile: {
      ...FullProfileRelations,
    },
    accounts: true,
    sessions: true,
  },
});

export type IUser = Prisma.UserGetPayload<Prisma.UserArgs>;

export type IFullUser = Prisma.UserGetPayload<typeof FullUserRelations>;

export type FullUserResponse = IErrorResponse & {
  user?: IFullUser;
};
