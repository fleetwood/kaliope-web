import { Message, Prisma } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../prisma/prismaContext";
import { IErrorResponse } from "../../../utils/FirebaseErrors";
import { jsonify, log, logError } from "../../../utils/helpers";

type MessageResponse = IErrorResponse & {
  message?: Message;
};

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse<MessageResponse>
) {
  const {
    body: { messageId, markAs },
    method,
  } = req;

  log("api/message/update", messageId, markAs);

  if (method?.toUpperCase() !== "POST") {
    log("ERROR UPDATING MESSAGE", { messageId });
    // res.setHeader("Allow", ["POST"]);
    // res.status(405).end(`Method ${method} Not Allowed`);
  }

  if (!messageId) {
    log("api/user/follow missing properties");
    res
      .status(405)
      .json({ error: { code: "api/error", message: `Missing properties` } });
  }

  try {
    const message = await prisma.message.update({
      where: { messageid: messageId },
      data: { read: markAs },
    });
    res.status(200).json({ error: undefined, ...message });
  } catch (e) {
    logError("\tFAIL", e);
    res.status(400).json({ error: { code: "api/error", message: jsonify(e) } });
  }
}
