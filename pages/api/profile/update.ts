import { Profile } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
import { convertToResponseError, IErrorCode } from "../../../utils/ResponseErrors";
import { log, logError } from "../../../utils/helpers";

type ProfileUpdateResponse = {
  profile?: Profile
  error?: IErrorCode
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ProfileUpdateResponse>
) {
  const {
    id,
    displayName,
    photoURL,
    lastLoginAt,
    totalLikes,
    totalShares,
    totalFollows,
    totalFollowers,
  }: Profile = req.body;

  try {
    const profile = await prisma?.profile.update({
      where: { id },
      data: {
        displayName,
        photoURL,
        lastLoginAt,
        totalLikes,
        totalShares,
        totalFollows,
        totalFollowers,
      },
    });
    if (profile) {
      log("api/profile/update", profile);
    }
    res.status(200).json({error: undefined, ...profile})
  } catch(e) {
    const error = convertToResponseError(e)
    log("api/profile/update", e || 'Uknown error');
    res.status(200).json({profile: undefined, error})
  }
}
