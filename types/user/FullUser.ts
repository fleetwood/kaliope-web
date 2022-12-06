import { Prisma } from "@prisma/client";
import { IErrorResponse } from "../../utils/FirebaseErrors";
import { log } from "../../utils/helpers";
import { FullProfileRelations } from "../profile/FullProfile";

const FullUserRelations = Prisma.validator<Prisma.UserArgs>()({
  include: {
    profile: {
      ...FullProfileRelations,
    },
    accounts: true,
    sessions: true,
  },
});

type IUser = Prisma.UserGetPayload<Prisma.UserArgs>;

type IFullUser = Prisma.UserGetPayload<typeof FullUserRelations>;

type FullUserResponse = IErrorResponse & {
  user?: IFullUser;
};

type FullUserProps = {
  select?: Prisma.UserSelect | null | undefined;
  where?: Prisma.UserWhereInput | undefined;
  orderBy?: Prisma.Enumerable<Prisma.UserOrderByWithRelationInput> | undefined;
  cursor?: Prisma.UserWhereUniqueInput | undefined;
  take?: number | undefined;
  skip?: number | undefined;
  distinct?: Prisma.Enumerable<Prisma.UserScalarFieldEnum> | undefined;
};

type UniqueUserProps = {
  email?: string;
  id?: string;
};

export {
  FullUserRelations,
};

export type { FullUserResponse, IFullUser, IUser };
