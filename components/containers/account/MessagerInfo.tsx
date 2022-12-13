import {  MessagerInfoProps } from "../../../types/message/MessageInfo";
import { jsonify, timeDifference, ymd } from "../../../utils/helpers";
import { LeftLongIcon, RightLongIcon } from "../../ui/icons";
import { av, UserAvatar } from "../../ui/userAvatar";

const MessagerInfo = (message: MessagerInfoProps) => {
  return (
    <div className="pb-2">
      {message.sender && 
      <div className="flex space-x-2">
        <div className="indicator">
          <div className="indicator-item indicator-start mt-2 text-accent-content">{LeftLongIcon}</div>
          <UserAvatar className='' profile={message.sender} size={av.md} />
        </div>
        <div>
          <div>{message.sender.displayName}</div>
          <div>Sent: {timeDifference(message.createdAt)}</div>
        </div>
      </div>
      }
      {!message.sender && message.recipient && 
        <div className="flex space-x-2">
        <div className="indicator">
          <div className="indicator-item indicator-start indicator-bottom mb-2 text-accent-content">{RightLongIcon}</div>
          <UserAvatar className="" profile={message.recipient} size={av.md} />
          {/* <div className="font-bold">{message.recipient.displayName}</div> */}
        </div>

        <div>
          <div>{message.recipient.displayName}</div>
          <div>Sent: {timeDifference(message.createdAt)}</div>
        </div>
        </div>
      }
      {/* <pre>
        {jsonify(message)}
      </pre> */}
    </div>
  );
};

export default MessagerInfo;
