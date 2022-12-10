import { Message, Profile } from "prisma/prisma-client";
import { IFullUser } from "../../../types/user/FullUser";
import { sendApi } from "../../../utils/api";
import { log } from "../../../utils/helpers";
import { EyeIcon, MessageIcon, XCircleIcon } from "../../ui/icons";
import ShrinkableIconButton from "../../ui/shrinkableIconButton";

type Messager = {      id: string;
  displayName: string | null;
  photoURL: string | null;
  totalFollows: number;
  totalFollowers: number;
  Follows: Profile[];
  Followers: Profile[];
}

interface MessageProps {
  className?: string;
  key: string;
  message: Message & {
    sender?: Messager
    recipient?: Messager
    messages?: Message[]
  };
  user: IFullUser;
  showReply?: Boolean
}

const MessageThreadItem = (props: MessageProps) => {
  const { message, user, key, className, showReply = true} = { ...props };

  const markAsRead = async (messageId:string, markAs:boolean) => {
    log('markAsRead',messageId)
    const results = await sendApi(`message/update`, {messageId, markAs: !markAs});
    log(results)
  }
  
  const replyTo = (messageId:string) => {
    log('replyTo',messageId)
  }
  
  const deleteMessage = async (messageId:string) => {
    log('deleteMessage',messageId);
    const results = await sendApi(`message/delete`, {messageId});
    log(results)
  }
  return (
    <div
      className={`bg-base-200 odd:bg-opacity-50 even:bg-opacity-80 mt-2 p-4 ${className}`}
      key={key}
    >
      {message.senderId !== user.id && message.sender && (
        <div className="border-b border-primary border-opacity-30 pb-2 font-bold">
          From:{" "}
          {
            message.sender?.displayName || ""
          }
        </div>
      )}
      {
        message.senderId === user.id && message.recipient && (
          <div className="border-b border-primary border-opacity-30 pb-2 font-bold">
            To:{" "}
            {
              message.recipient?.displayName || ""
            }
          </div>
        )
      }
      <div className="pl-4">{message.content}</div>
      {message.messages && message.messages!.map((reply:Message) => (
          <MessageThreadItem
            user={user}
            message={reply}
            key={reply.messageid}
            className="border-l border-l-primary odd:border-opacity-50 even:border-opacity-75 pl-4"
            showReply={false}
          />
        ))
      }
      {showReply && 
      <div className="flex justify-evenly space-x-2 mt-4 pt-4 border-t border-t-primary-content border-opacity-50">
        <ShrinkableIconButton icon={EyeIcon} label={`Mark as ${message.read ? 'Unread' : 'Read'}`} className="btn-secondary text-secondary-content rounded-full py-2 px-4 justify-start" labelClassName="btn-secondary-content" onClick={() => markAsRead(message.messageid, message.read)} />
        <ShrinkableIconButton icon={MessageIcon} label="Reply" className="btn-secondary text-secondary-content rounded-full py-2 px-4 justify-start" labelClassName="btn-secondary-content" onClick={() => replyTo(message.messageid)} />
        <ShrinkableIconButton icon={XCircleIcon} label="Delete" className="btn-secondary text-secondary-content rounded-full py-2 px-4 justify-start" labelClassName="btn-secondary-content" onClick={() => deleteMessage(message.messageid)} />
      </div>
      }
    </div>
  );
};

export default MessageThreadItem;
