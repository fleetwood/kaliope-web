
import Link from "next/link";
import { IFullUser } from "../../../types/user/FullUser";
import { UserAvatar } from "../../ui/userAvatar";

const ThreadPostAuthor = (props: IFullUser) => {
  const name = props.profile?.displayName||props.name||null;

  return (
    <div className="flex justify-items-start space-x-4">
      <div className=""><UserAvatar user={props} /></div>
      <div className="">
        <Link
          href={`/user/${props.id}`}
          className="flex"
        >
          {name && (
            <h3 className="text-xl font-semibold text-secondary-focus relative bottom-0">
              {name}
            </h3>
          )}
        </Link>
      </div>
    </div>
  );
};

export default ThreadPostAuthor;
