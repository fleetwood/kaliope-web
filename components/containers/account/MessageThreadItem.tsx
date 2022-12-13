import { Message } from "prisma/prisma-client";
import { FormEvent, useState } from "react";
import { MessageProps } from "../../../types/message/MessageInfo";
import { sendApi } from "../../../utils/api";
import { log, todo } from "../../../utils/helpers";
import { EyeIcon, MessageIcon, XCircleIcon } from "../../ui/icons";
import ShrinkableIconButton from "../../ui/shrinkableIconButton";
import MessagerInfo from "./MessagerInfo";

const MessageThreadItem = (props: MessageProps) => {
  const { 
    message, 
    user, 
    sendAndUpdate,
    className = '', 
    showReply = true, 
  } = { ...props };

  const [currentMessage, setCurrentMessage] = useState<string|null>()
  const [replyForm, setReplyForm] = useState<string>('hidden')

  const sendReply = async (e:FormEvent<HTMLFormElement>) => {
      if (currentMessage) {
          sendAndUpdate({
            senderId: user.id,
            recipientId: message.senderId || message.recipientId,
            content: currentMessage,
            messageParentId: message.messageid
        });
      }
      setCurrentMessage(null)
  }

  const markAsRead = async (messageId:string, markAs:boolean) => {
    log('markAsRead',messageId)
    const results = await sendApi(`message/update`, {messageId, markAs: !markAs});
    log(results)
  }
  
  const replyTo = (messageId:string) => {
    setReplyForm(replyForm === 'hidden' ? '' : 'hidden')
  }
  
  const deleteMessage = async (messageId:string) => {
    log('deleteMessage',messageId);
    const results = await sendApi(`message/delete`, {messageId});
    log(results)
  }
  
  return (
    <div
      className={`bg-base-200 odd:bg-opacity-50 even:bg-opacity-80 mt-2 p-4 ${className}`}
    >
      <MessagerInfo {...message} />
      <div className={`px-2 border-primary border-opacity-30 ${showReply ? 'border-t py-4' : '' }`}>
        {message.content}
      </div>
      {message.messages && message.messages!.map((reply:Message) => (
          <MessageThreadItem
            user={user}
            message={reply}
            showReply={false}
            sendAndUpdate={sendAndUpdate}
            className="border-l border-l-primary odd:border-opacity-50 even:border-opacity-75 pl-4"
            key={reply.messageid}
          />
        ))
      }

      {showReply && 

      <div className="mt-4 pt-4">
        <div className="flex justify-evenly space-x-2 min-w-full">
        <ShrinkableIconButton icon={EyeIcon} label={`Mark as ${message.read ? 'Unread' : 'Read'}`} className="btn-secondary text-secondary-content rounded-full py-2 px-4 justify-start" labelClassName="btn-secondary-content" onClick={() => markAsRead(message.messageid, message.read)} />
        <ShrinkableIconButton icon={MessageIcon} label={replyForm==='hidden'?'Reply':'Cancel'} className="btn-secondary text-secondary-content rounded-full py-2 px-4 justify-start" labelClassName="btn-secondary-content" onClick={() => replyTo(message.messageid)} />
        <ShrinkableIconButton icon={XCircleIcon} label="Delete" className="btn-secondary text-secondary-content rounded-full py-2 px-4 justify-start" labelClassName="btn-secondary-content" onClick={() => deleteMessage(message.messageid)} />
        </div>
        <form onSubmit={(e) => sendReply(e)} className={`pb-6 relative min-w-full ${replyForm}`}>
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
