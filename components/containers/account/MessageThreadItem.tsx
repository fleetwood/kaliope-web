import { Message as MessageThreadItem } from "prisma/prisma-client";
import { IFullUser } from "../../../types/user/FullUser";

interface MessageProps {
  className?: string
  key: string
  message: MessageThreadItem
  user: IFullUser
}

const MessageThreadItem = (props: MessageProps) => {
  const { message, user, key, className } = { ...props };

  return (
    <div
      className={`bg-base-200 odd:bg-opacity-50 even:bg-opacity-80 mt-2 p-4 ${className}`}
      key={key}
    >
      {
        // @ts-ignore
        message.senderId !== user.id && message.sender && (
        <div className="border-b border-primary border-opacity-30 pb-2 font-bold">
          From:{" "}
          {
            // @ts-ignore
            message.sender?.displayName || ''
          }
        </div>
      )}
      {
        // @ts-ignore
        message.senderId === user.id && message.recipient &&(
        
          <div className="border-b border-primary border-opacity-30 pb-2 font-bold">
          To:{" "}
          {
            // @ts-ignore
            message.recipient?.displayName || ''
          }
        </div>
      )}
      <div className="py-4">{message.content}</div>
      {
        // @ts-ignore
        message.messages?.map((reply) => (
          <MessageThreadItem 
            user={user} 
            message={reply} 
            key={message.messageid} 
            className="border-l border-l-primary odd:border-opacity-50 even:border-opacity-75 pl-4" 
            />
        ))
      }
    </div>
  );
};

export default MessageThreadItem;
