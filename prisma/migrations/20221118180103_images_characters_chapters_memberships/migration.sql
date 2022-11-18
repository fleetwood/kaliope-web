-- DropForeignKey
ALTER TABLE "Post" DROP CONSTRAINT "Post_postid_fkey";

-- AddForeignKey
ALTER TABLE "Post" ADD CONSTRAINT "Post_threadid_fkey" FOREIGN KEY ("threadid") REFERENCES "Post"("postid") ON DELETE SET NULL ON UPDATE CASCADE;
