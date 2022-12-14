import { Message } from "@prisma/client";
import { FormEvent, useEffect, useState } from "react";
import { KeyVal } from "../../../types/props";
import { IFullUser } from "../../../types/user/FullUser";
import { getApi, sendApi } from "../../../utils/api";
import { log, logError, todo } from "../../../utils/helpers";
import AutoInput from "../../ui/autoInput";
import MessageThreadItem from "./MessageThreadItem";

interface AccountInboxProps {
  className?: string;
  user: IFullUser;
}

type SendMessageProps = {
    content: string,
    messageParentId?: string,
    recipientId: string,
    senderId: string,
}

const AccountInbox = (props: AccountInboxProps) => {
  const [inbox, setInbox] = useState<Array<Message> | null>(null);
  const [message, setMessage] = useState<string | null>();
  const [recipientName, setRecipientName] = useState<string | null>();
  const [recipientId, setRecipientId] = useState<string | null>();
  const [recipients, setRecipients] = useState<KeyVal[]>([]);

  const sendAndUpdate = async (message: SendMessageProps) => {
    const blank = () => Array<Message>(0);
    try {
      const newInbox = await sendApi("message/create", message);
      if (newInbox.error) {
        throw newInbox.error;
      }
      log('message created....',[
        ...inbox || blank(),
        ...newInbox.results?.Inbox || blank(),
        ...newInbox.results?.Outbox || blank()
      ])
      todo('Sort the Inbox')
      setInbox([
        ...inbox || blank(),
        ...newInbox.results?.Inbox || blank(),
        ...newInbox.results?.Outbox || blank()
      ]
      .sort((a, b) => a.message.createdAt.localeCompare(b.message.createdAt)));
    } catch (error) {
      logError(error);
    }
  };

  const sendMessage = (e: FormEvent<HTMLFormElement>) => {
    todo("Read/Unread need to be specific to sender/recipient");
    todo("Support markup in messages");
    todo(`e.preventDefault(). Find another way to invalidate AGAIN. ¯\_(ツ)_/¯`)
    if (message && recipientId) {
        const msg:SendMessageProps = {
            senderId: props.user.id,
            recipientId,
            content: message,
          }
      sendAndUpdate(msg);
    } else {
      log('sendMessage',message,recipientName)
    }
  };

  const fetchInbox = async () => {
    try {
      const messages = await getApi(`message/${props.user.id}`);
      if (messages.error) {
        throw messages.error;
      } else {
        setInbox([
          ...messages.results.Inbox, 
          ...messages.results.Outbox
        ]
        .sort((a, b) => a.createdAt.localeCompare(b.createdAt)*-1));
      }
    } catch (error) {
      logError(
        "No Inbox received...",
        error || " and no error either..."
      );
    }
  };

  const autoInputChange = (option?:KeyVal) => {
    if (option===null) {
      setRecipientName(null)
      setRecipientId(null)
      return
    }
    setRecipientName(option!.key)
    setRecipientId(option!.value?.toString()||option!.key)
    log('autoInputChange',recipientId,recipientName)
  }

  useEffect(() => {
    fetchInbox();
    if (props.user) {
      setRecipients([
          ...props.user.profile?.Follows||[],
          ...props.user.profile?.Followers||[],
          ...[
            'Grif','Christina','Kristina','Crystal',"Christopher",'Fleetwood'
          ].map((i) => {return {id:i,displayName:i}})
        ]
        .map(a => { return {
          key:a.displayName||a.id,
          value:a.id
        }})
        .sort((a, b) => a.key.localeCompare(b.key)))
    }
  }, []);

  return (
    // @ts-ignore
    <div className={props?.className || ""}>
      <form
        onSubmit={(e) => sendMessage(e)}
        className="pb-6 relative"
      >
        <h2 className="subtitle mt-8">Compose</h2>
        <AutoInput
          className="input input-bordered w-full mb-2"
          onUpdate={autoInputChange}
          placeholder="Recipient"
          options={recipients}
        />
        <textarea
          className="textarea textarea-bordered w-full block mb-2"
          onChange={(e) => setMessage(e.currentTarget.value)}
          placeholder="Hello! Hallå! Привет! 여보세요! שלום!"
        ></textarea>
        <br />
        <button
          className="btn-accent text-accent-content right-0 bottom-0 absolute block rounded-full py-2 px-12"
          type="submit"
        >
          Send!
        </button>
      </form>
      <div className="flex space-x-2 mt-8 align-text-bottom">
        <h2 className="subtitle bottom-0">Inbox </h2>
        <h2 className="subtitle bottom-0">({inbox?.length})</h2>
      </div>
      {inbox?.map((message) => (
        <MessageThreadItem
          user={props.user}
          message={message}
          sendAndUpdate={sendAndUpdate}
          key={message.messageid}
        />
      ))}
    </div>
  );
};

export default AccountInbox;
