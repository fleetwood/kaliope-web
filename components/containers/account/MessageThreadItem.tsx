import { Message } from "prisma/prisma-client";
import { FormEvent, useState } from "react";
import { MessageProps, MessageResponse } from "../../../types/message/MessageInfo";
import { sendApi } from "../../../utils/api";
import { log, now, todo } from "../../../utils/helpers";
import { EyeIcon, MessageIcon, XCircleIcon } from "../../ui/icons";
import ShrinkableIconButton from "../../ui/shrinkableIconButton";
import MessagerInfo from "./MessagerInfo";

const MessageThreadItem = (props: MessageProps) => {
  const { 
    message, 
    user, 
    key, 
    className, 
    showReply = true, 
  } = { ...props };

  const [currentMessage, setCurrentMessage] = useState<string|null>()

  const sendReply = async (e:FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      if (currentMessage) {
          const msg:MessageResponse = await sendApi(
            'message/create',
            {
              messageid: "dsalkjfghjakFL293814ERW7QHIFUSDAKCJF928RFHIUSCN",
              senderId: user.id,
              recipientId: message.senderId || message.recipientId,
              visible: true,
              read: false,
              content: currentMessage,
              messageParentId: message.messageid
          })
          if (msg.error) {
            log(`sendReply FAIL: ${msg.error}`);
            return;
          }
          setCurrentMessage('')
      }
  }

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
      <MessagerInfo {...message} />

      <div className={`px-2 border-primary border-opacity-30 ${showReply ? 'border-t py-4' : '' }`}>
        {message.content}
      </div>
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

      <div className="mt-4 pt-4">
        <div className="flex justify-evenly space-x-2 min-w-full">
        <ShrinkableIconButton icon={EyeIcon} label={`Mark as ${message.read ? 'Unread' : 'Read'}`} className="btn-secondary text-secondary-content rounded-full py-2 px-4 justify-start" labelClassName="btn-secondary-content" onClick={() => markAsRead(message.messageid, message.read)} />
        <ShrinkableIconButton icon={MessageIcon} label="Reply" className="btn-secondary text-secondary-content rounded-full py-2 px-4 justify-start" labelClassName="btn-secondary-content" onClick={() => replyTo(message.messageid)} />
        <ShrinkableIconButton icon={XCircleIcon} label="Delete" className="btn-secondary text-secondary-content rounded-full py-2 px-4 justify-start" labelClassName="btn-secondary-content" onClick={() => deleteMessage(message.messageid)} />
        </div>
        <form onSubmit={(e) => sendReply(e)} className="pb-6 relative min-w-full">
            <textarea className="textarea textarea-bordered w-full block my-2" onChange={e => setCurrentMessage(e.currentTarget.value)} placeholder="Hello! Hallå! Привет! 여보세요! שלום!"></textarea>
            <br />
            <button className="btn-accent text-accent-content right-0 bottom-0 absolute block rounded-full py-2 px-12" type="submit">Send!</button>
        </form>
      </div>
      }
    </div>
  );
};

export default MessageThreadItem;
