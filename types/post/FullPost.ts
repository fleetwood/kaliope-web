import { Prisma } from "@prisma/client";
import { IErrorResponse } from "../../utils/FirebaseErrors";
import { BaseProfileRelations, IBaseProfile } from "../profile/FullProfile";

export const FullPostRelations = Prisma.validator<Prisma.PostArgs>()({
    include: {
      _count: {
        select: { 
          thread: true,
        },
      },
      author: {
        ...BaseProfileRelations
      },
      thread: {
          include: {
            _count: {
              select: {
                thread: true
              }
            },
            author: {
              ...BaseProfileRelations
            },
        },
      },
    },
  });
  
  export type IFullPost = Prisma.PostGetPayload<typeof FullPostRelations> & {
    author: IBaseProfile
  };
  
  export type FullPostResponse = IErrorResponse & {
    post?: IFullPost;
  };