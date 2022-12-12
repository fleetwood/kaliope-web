import { Message } from "@prisma/client";
import { GetServerSideProps } from "next";
import { FormEvent, useEffect, useState } from "react";
import { MessageResponse } from "../../../types/message/MessageInfo";
import { IFullUser } from "../../../types/user/FullUser";
import { getApi, getMessage, sendApi } from "../../../utils/api";
import { __host__ } from "../../../utils/constants";
import { log, logError, todo } from "../../../utils/helpers";
import { UserSession } from "../../hooks/session";
import MessageThreadItem from "./MessageThreadItem";

interface AccountInboxProps {
  className?: string;
  user: IFullUser;
}

const AccountInbox = (props: AccountInboxProps) => {
  const [inbox, setInbox] = useState<Array<Message>|null>(null);
  const [message, setMessage] = useState<string | null>();
  const [recipient, setRecipient] = useState<string | null>();

  const sendMessage = async (e: FormEvent<HTMLFormElement>) => {
    todo("Obtain recipient+id list from Follows+Followers");
    todo("Read/Unread need to be specific to sender/recipient");
    todo("Support markup in messages");
    e.preventDefault();
    if (message) {
      const msg: MessageResponse = await sendApi("message/create", {
        senderId: props.user.id,
        recipientId: recipient,
        read: false,
        content: message,
      });
      if (msg.error) {
        log(`sendReply FAIL: ${msg.error}`);
        return;
      }
      setMessage(null);
      setInbox([])
      fetchInbox()
    }
  };

  const fetchInbox = async () => {
    log('fetch Inbox....')
    const data = await getMessage(`message/${props.user.id}`);
    try {
    if (!data.error) {
      log("....messages received",data);
      const messages = data.data?.results 
      setInbox([...messages?.Inbox || [], ...messages?.Outbox || []]);
    } else {
      logError(
        "No messages received from API...",
        data.error || " and no error either..."
      );
    }
    }
    catch(error){
        logError(
            "No messages received from API...",
            error || " and no error either..."
          );
    }
  };

  return (
    // @ts-ignore
    <div className={props?.className || ""}>
      <form
        onSubmit={(e) => sendMessage(e)}
        className="border-b border-accent-focus border-opacity-50 pb-6 relative"
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
      <h2 className="subtitle mt-8">Inbox</h2>
      {inbox?.map((message) => (
          <MessageThreadItem
            user={props.user}
            message={message}
            key={message.messageid}
          />
        ))}
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const [user] = UserSession();
  const userid = (user as IFullUser).id;

  if (user) {
    const api = await getMessage(`message/${userid}`);
    if (!api.error && api.data?.results) {
        const inbox = [...[api.data.results.Inbox],...[api.data.results.Outbox]]
        return {
            props: { inbox },
        };
    }
    else if (api.error) {
        logError('account/inbox getServerSideProps()', api.error)
    }
  }
  return { props: {} };
};

export default AccountInbox;
