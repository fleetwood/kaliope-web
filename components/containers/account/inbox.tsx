import { Message } from "@prisma/client";
import { FormEvent, useEffect, useState } from "react";
import { IFullUser } from "../../../types/user/FullUser";
import { getApi, sendApi } from "../../../utils/api";
import { __host__ } from "../../../utils/constants";
import { log, logError, todo } from "../../../utils/helpers";
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
  const [recipient, setRecipient] = useState<string | null>();

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
      ]);
    } catch (error) {
      logError(error);
    }
  };

  const sendMessage = (e: FormEvent<HTMLFormElement>) => {
    todo("Obtain recipient+id list from Follows+Followers");
    todo("Read/Unread need to be specific to sender/recipient");
    todo("Support markup in messages");
    if (message && recipient) {
        const msg:SendMessageProps = {
            senderId: props.user.id,
            recipientId: recipient,
            content: message,
          }
      sendAndUpdate(msg);
    }
  };

  const fetchInbox = async () => {
    log("fetch Inbox....");
    try {
      const messages = await getApi(`message/${props.user.id}`);
      if (messages.error) {
        throw messages.error;
      } else {
        setInbox([...messages.results.Inbox, ...messages.results.Outbox]);
      }
    } catch (error) {
      logError(
        "No messages received from API...",
        error || " and no error either..."
      );
    }
  };

  useEffect(() => {
    fetchInbox();
  }, []);

  return (
    // @ts-ignore
    <div className={props?.className || ""}>
      <form
        onSubmit={(e) => sendMessage(e)}
        className="pb-6 relative"
      >
        <h2 className="subtitle mt-8">Compose</h2>
        <input
          className="input input-bordered w-full mb-2"
          onChange={(e) => setRecipient(e.currentTarget.value)}
          placeholder="Recipient"
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
        />
      ))}
    </div>
  );
};

export default AccountInbox;
