import { User } from "kaliope-types/models/user";
import { useEffect, useState } from "react";
import { UserAvatar } from "../../ui/userAvatar";

export type feedPostAuthorProps = {
    author: User
  }

const FeedPostAuthor = (props:feedPostAuthorProps) => {
    const [user, setUser] = useState<User>()

    const {author} = props;

    useEffect(() => {
        setUser(author)
    },[user])

    return (
        <>
        {user && (
        <UserAvatar author={user} />
        )}
        {user?.displayName && (
        <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
            {user.displayName}
        </h3>
        )}
        </>
    )
}

export default FeedPostAuthor