-- AlterTable
ALTER TABLE "User" ADD COLUMN     "blockedGroup" TEXT,
ADD COLUMN     "blocksGroup" TEXT,
ADD COLUMN     "followersGroup" TEXT,
ADD COLUMN     "followsGroup" TEXT;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_followersGroup_fkey" FOREIGN KEY ("followersGroup") REFERENCES "Group"("groupid") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_followsGroup_fkey" FOREIGN KEY ("followsGroup") REFERENCES "Group"("groupid") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_blocksGroup_fkey" FOREIGN KEY ("blocksGroup") REFERENCES "Group"("groupid") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_blockedGroup_fkey" FOREIGN KEY ("blockedGroup") REFERENCES "Group"("groupid") ON DELETE SET NULL ON UPDATE CASCADE;
