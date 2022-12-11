import { Message } from "@prisma/client";
import { FormEvent, useEffect, useState } from "react";
import { IFullUser } from "../../../types/user/FullUser";
import { log, todo } from "../../../utils/helpers";
import MessageThreadItem from "./MessageThreadItem";

interface AccountInboxProps  {
    className?: string;
    user: IFullUser;
}

const now = new Date();//.toString();
 
const AccountInbox = (props:AccountInboxProps) => {
    const [inbox, setInbox] = useState<Array<Message>>(Array<Message>(0))
    const [message, setMessage] = useState<string|null>()
    todo('Instead of using IFullUser to provide the Inbox, get it from the API directly.')
    todo('Once the Inbox is coming from API, remove it from the IFullUser.')

    useEffect(() => {
        const messages = [
            ...props.user.profile?.Inbox || [], 
            ...props.user.profile?.Outbox || []
        ]
        setInbox(messages)
    }, [])

    const sendMessage = (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (message) {
            const msg:Message = {
                createdAt: now,
                lastLoginAt: now,
                messageid: "dsalkjfghjakFL293814ERW7QHIFUSDAKCJF928RFHIUSCN",
                senderId: props.user.id,
                recipientId: "clb48jluk000l85zc556up0d7",
                visible: true,
                read: false,
                content: message,
                messageParentId: null
            }
            setInbox([msg, ...inbox])
            setMessage(null)
        }
    }

    return (
    // @ts-ignore
    <div className={props?.className||''}>
        <form onSubmit={(e) => sendMessage(e)} className="border-b border-accent-focus border-opacity-50 pb-6 relative">
            <h2 className="subtitle mt-8">Compose</h2>
            <textarea className="textarea textarea-bordered w-full block mb-2" onChange={e => setMessage(e.currentTarget.value)} placeholder="Hello! Hallå! Привет! 여보세요! שלום!"></textarea>
            <br />
            <button className="btn-accent text-accent-content right-0 bottom-0 absolute block rounded-full py-2 px-12" type="submit">Send!</button>
        </form>
        <h2 className="subtitle mt-8">Inbox</h2>
        {inbox && inbox.map((message) => 
            <MessageThreadItem user={props.user} message={message} key={message.messageid} />
        )}
    </div>
)}
 
export default AccountInbox;