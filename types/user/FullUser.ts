import { Prisma } from "@prisma/client";
import { IErrorResponse } from "../../utils/FirebaseErrors";

export const FullUserRelations = Prisma.validator<Prisma.UserArgs>() ({
      include: {
        _count: {
            select: {
                books: true,
                posts: true,
            }
      }}
  });

  export type FullUser = Prisma.UserGetPayload<typeof FullUserRelations>;
  
  export type FullUserResponse = IErrorResponse & {
    user?: FullUser;
  };