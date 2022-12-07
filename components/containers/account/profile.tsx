import { useState } from "react";
import { IFullUser } from "../../../types/user/FullUser";
import { sendApi } from "../../../utils/api";
import { av, UserAvatar } from "../../ui/userAvatar";
import { log, logError } from "./../../../utils/helpers";

interface AccountProfileProps {
  className?: string;
  user: IFullUser;
}

const AccountProfile = (props: AccountProfileProps) => {
  const { className, user } = props;
  const [profile, setProfile] = useState(user.profile);

  const displayName =
    user.profile?.displayName || user.name || user.email || "";

  const updateHandler = (e: any, p: any) => {
    e.preventDefault();
    setProfile({ ...profile, ...p });
    log("updateHandler", profile);
  };

  const save = async (e: any) => {
    e.preventDefault();
    log("AccountProfile save...");
    try {
      const results = await sendApi(`profile/update`, profile);
      if (results.error) {
        logError("\tNope", results.error);
      } else if (results.profile) {
        log("\tSUCCESSSSS!!!!");
        setProfile(results.profile);
      }
    } catch (error) {
      logError("\tMegaNope", error);
    }
  };
  return (
    <div className={`h-full ${className}`}>
      <div className="border-b-2 bg-base-200">
        <div className="rounded shadow p-12">
          <form onSubmit={(e) => save(e)}>
            <div className="pb-6">
              <label
                htmlFor="avatar"
                className="font-semibold text-gray-700 block pb-1"
              >
                Avatar
              </label>
              <UserAvatar user={user} size={av.xl} />
              <input
                id="photoUrl"
                className="border-1  rounded-r px-4 py-2 w-full"
                type="text"
                defaultValue={user.profile?.photoURL || user.image || ""}
              />
            </div>

            <div className="pb-6">
              <label
                htmlFor="name"
                className="font-semibold text-gray-700 block pb-1"
              >
                Displayed Name
              </label>
              <input
                id="username"
                className="border-1  rounded-r px-4 py-2 w-full"
                type="text"
                defaultValue={displayName}
                onChange={(e) => {
                  updateHandler(e, { displayName: e.target.value.toString() });
                }}
              />
              <span className="text-gray-600 pt-4 block opacity-70">
                What others will see
              </span>
            </div>

            <div className="pb-4">
              <label
                htmlFor="email"
                className="font-semibold text-gray-700 block pb-1"
              >
                Email
              </label>
              <input
                id="email"
                className="border-1  rounded-r px-4 py-2 w-full"
                type="email"
                disabled
                defaultValue={user.email!}
              />
            </div>

            <button
              className="btn-primary text-primary-content p-4 w-full"
              type="submit"
            >
              Save Changes
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AccountProfile;
