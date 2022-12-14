import { prisma } from "../../../prisma/prismaContext";
import { NextApiRequest, NextApiResponse } from "next";
import { jsonify, log, logError } from "../../../utils/helpers";
import { FullPostResponse } from "../../../types/post/FullPost";

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse<FullPostResponse>
) {
  const {
    body: { title, subtitle, header_image, content, authorId, threadParentId },
    method,
  } = req;
  try {
    const data = {
      title,
      subtitle,
      header_image,
      content,
      authorId,
      threadParentId,
      visible: true,
      created_at: new Date(),
      updated_at: new Date(),
    };
    log("api/post/create", data);

    const post = await prisma.post.create({ data });
    if (!post) {
      throw "Post not created but this should already have broke";
    }
    res.status(200).json({ error: undefined, ...post });

  } catch (error) {
    logError("\tFAIL", error);
    res.status(400).json({ error: { code: "api/error", message: jsonify(error) } });
  }
}
