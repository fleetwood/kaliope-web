import { MessagerInfoProps } from "../../../types/message/MessageInfo";
import { timeDifference } from "../../../utils/helpers";
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
          <h3 className="text-secondary-content">{message.sender.displayName}</h3>
          <div>Sent: {timeDifference(message.createdAt!)}</div>
          {/* <div>Key: {message.messageid}</div> */}
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
          <h3 className="text-accent-content">{message.recipient.displayName}</h3>
          <div>Sent: {timeDifference(message.createdAt!)}</div>
          {/* <div>Key: {message.messageid}</div> */}
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
