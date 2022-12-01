import { Prisma } from "@prisma/client";
import { IErrorResponse } from "../../utils/FirebaseErrors";
import { IPostProfile, PostProfileRelations } from "../profile/FullProfile";

export const FullPostRelations = Prisma.validator<Prisma.PostArgs>()({
    include: {
      _count: {
        select: { 
          thread: true,
        },
      },
      author: {
        ...PostProfileRelations
      },
      thread: {
          include: {
            _count: {
              select: {
                thread: true
              }
            },
            author: {
              ...PostProfileRelations
            },
        },
      },
    },
  });
  
  export type IFullPost = Prisma.PostGetPayload<typeof FullPostRelations> & {
    author: IPostProfile
  };
  
  export type FullPostResponse = IErrorResponse & {
    post?: IFullPost;
  };