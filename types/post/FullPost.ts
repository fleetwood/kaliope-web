import { Prisma } from "@prisma/client";
import { IErrorResponse } from "../../utils/FirebaseErrors";
import { FullUserRelations } from "../user/FullUser";

export const FullPostRelations = Prisma.validator<Prisma.PostArgs>()({
    include: {
      _count: {
        select: { 
          thread: true,
        },
      },
      author: {
        ...FullUserRelations
      },
      thread: {
          include: {
            _count: {
              select: {
                thread: true
              }
            },
            author: {
              ...FullUserRelations
            },
        },
      },
    },
  });
  
  export type FullPost = Prisma.PostGetPayload<typeof FullPostRelations>;
  
  export type FullPostResponse = IErrorResponse & {
    post?: FullPost;
  };