import {  MessagerInfoProps } from "../../../types/message/MessageInfo";
import { jsonify } from "../../../utils/helpers";
import { LeftLongIcon, RightLongIcon } from "../../ui/icons";
import { av, UserAvatar } from "../../ui/userAvatar";

const MessagerInfo = (message: MessagerInfoProps) => {
  return (
    <div className="border-b border-primary border-opacity-30 pb-2">
      {message.sender && 
        <div className="w-full flex space-x-1">
          <div>{LeftLongIcon}</div>
          <UserAvatar className='' profile={message.sender} size={av.sm} />
          <div className="font-bold">{message.sender.displayName}</div>
        </div>
      }
      {message.recipient && 
        <div className="w-full flex space-x-1">
          <UserAvatar className="" profile={message.recipient} size={av.sm} />
          <div className="font-bold">{message.recipient.displayName}</div>
          <div>{RightLongIcon}</div>
        </div>
      }
      {/* <pre>
        {jsonify(message)}
      </pre> */}
    </div>
  );
};

export default MessagerInfo;
