
import Link from "next/link";
import { FullUser } from "../../../types/user/FullUser";
import { UserAvatar } from "../../ui/userAvatar";

const ThreadPostAuthor = (props: FullUser) => {

  return (
    <div className="flex justify-items-start space-x-4">
      <div className=""><UserAvatar author={props} /></div>
      <div className="">
        <Link
          href={`/user/${props.uid}`}
          className="flex"
        >
          {props?.displayName && (
            <h3 className="text-xl font-semibold text-secondary-focus relative bottom-0">
              {props.displayName}
            </h3>
          )}
        </Link>
      </div>
    </div>
  );
};

export default ThreadPostAuthor;
