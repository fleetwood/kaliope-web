-- AlterTable
ALTER TABLE "Profile" ALTER COLUMN "FollowsProfileId" DROP NOT NULL,
ALTER COLUMN "FollowerProfileId" DROP NOT NULL;
