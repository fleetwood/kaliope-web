import { Message } from "@prisma/client";
import { IErrorCode } from "../../utils/ResponseErrors";
import { IBaseProfile, IFollowersProfile } from "../profile/FullProfile";
import { IInboxProfile } from "../profile/InboxProfile";
import { IFullUser } from "../user/FullUser";

export type Messager = {
  id: string;
  displayName: string | null;
  photoURL: string | null;
  totalFollows: number;
  totalFollowers: number;
  Follows: IBaseProfile[];
  Followers: IBaseProfile[];
};

export type MessagerInfoProps = Message & {
  sender?: IFollowersProfile | undefined;
  recipient?: IFollowersProfile | undefined;
  messages?: Message[] | undefined;
};

export interface MessageProps {
  className?: string;
  // key: string;
  message: MessagerInfoProps;
  user: IFullUser;
  sendAndUpdate: Function,
  showReply?: Boolean;
}

export type MessageResponse = Message & {
  error?: IErrorCode
}