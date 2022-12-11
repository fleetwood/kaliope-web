import { Message } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../prisma/prismaContext";
import { IErrorResponse } from "../../../utils/FirebaseErrors";
import { jsonify, log, logError, ymd } from "../../../utils/helpers";

type MessageResponse = IErrorResponse & {
  message?: Message;
};

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse<MessageResponse>
) {
  const {
    body: { 
        content,
        messageParentId,
        recipientId,
        senderId,
     },
    method,
  } = req;

  if (!content || !messageParentId || !recipientId || !senderId) {
    log("api/message/create missing properties");
    res
      .status(405)
      .json({ error: { code: "api/error", message: `Missing properties` } });
  }

  try {
    const message = await prisma.message.create({
        data: {
            content,
            messageParentId,
            recipientId,
            senderId,
            createdAt: ymd(),
            lastLoginAt: ymd()
        }
    });
    res.status(200).json({ error: undefined, ...message });
  } catch (e) {
    logError("\tFAIL", e);
    res.status(400).json({ error: { code: "api/error", message: jsonify(e) } });
  }
}
