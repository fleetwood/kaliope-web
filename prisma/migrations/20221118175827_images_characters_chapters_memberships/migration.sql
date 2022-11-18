/*
  Warnings:

  - You are about to drop the column `cover` on the `Book` table. All the data in the column will be lost.
  - You are about to alter the column `authorid` on the `Book` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(255)`.
  - A unique constraint covering the columns `[coverid]` on the table `Book` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[threadid]` on the table `Post` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `chapterid` to the `Comment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `characterid` to the `Comment` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Book" DROP CONSTRAINT "Book_authorid_fkey";

-- AlterTable
ALTER TABLE "Book" DROP COLUMN "cover",
ADD COLUMN     "coverid" TEXT,
ADD COLUMN     "synopsis" TEXT,
ADD COLUMN     "tagline" TEXT,
ALTER COLUMN "authorid" SET DATA TYPE VARCHAR(255),
ALTER COLUMN "title" SET DATA TYPE VARCHAR(512);

-- AlterTable
ALTER TABLE "Comment" ADD COLUMN     "chapterid" TEXT NOT NULL,
ADD COLUMN     "characterid" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Post" ADD COLUMN     "threadid" TEXT;

-- CreateTable
CREATE TABLE "Image" (
    "imageid" TEXT NOT NULL,
    "created_at" TIMESTAMPTZ(0) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(0) DEFAULT CURRENT_TIMESTAMP,
    "url" VARCHAR(255) NOT NULL,
    "title" VARCHAR(255),
    "description" VARCHAR(255),
    "metadata" JSONB,
    "galleryid" TEXT,

    CONSTRAINT "Image_pkey" PRIMARY KEY ("imageid")
);

-- CreateTable
CREATE TABLE "Gallery" (
    "galleryid" TEXT NOT NULL,
    "created_at" TIMESTAMPTZ(0) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(0) DEFAULT CURRENT_TIMESTAMP,
    "url" VARCHAR(255) NOT NULL,
    "title" VARCHAR(255),
    "description" VARCHAR(255),
    "chapterid" TEXT,
    "characterid" TEXT,
    "userid" TEXT,
    "agencyid" TEXT,

    CONSTRAINT "Gallery_pkey" PRIMARY KEY ("galleryid")
);

-- CreateTable
CREATE TABLE "Agency" (
    "agencyid" TEXT NOT NULL,
    "created_at" TIMESTAMPTZ(0) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(0) DEFAULT CURRENT_TIMESTAMP,
    "description" TEXT NOT NULL,
    "logoid" TEXT,

    CONSTRAINT "Agency_pkey" PRIMARY KEY ("agencyid")
);

-- CreateTable
CREATE TABLE "Chapter" (
    "chapterid" TEXT NOT NULL,
    "created_at" TIMESTAMPTZ(0) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(0) DEFAULT CURRENT_TIMESTAMP,
    "chapterOrder" INTEGER NOT NULL,
    "bookid" TEXT NOT NULL,
    "galleryid" TEXT NOT NULL,

    CONSTRAINT "Chapter_pkey" PRIMARY KEY ("chapterid")
);

-- CreateTable
CREATE TABLE "Character" (
    "characterid" TEXT NOT NULL,
    "created_at" TIMESTAMPTZ(0) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(0) DEFAULT CURRENT_TIMESTAMP,
    "bookid" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "avatarid" TEXT,
    "galleryid" TEXT NOT NULL,

    CONSTRAINT "Character_pkey" PRIMARY KEY ("characterid")
);

-- CreateTable
CREATE TABLE "Genre" (
    "genreid" TEXT NOT NULL,
    "icon" VARCHAR(255) NOT NULL,
    "label" VARCHAR(255) NOT NULL,
    "created_at" TIMESTAMPTZ(0) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(0) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Genre_pkey" PRIMARY KEY ("genreid")
);

-- CreateTable
CREATE TABLE "Group" (
    "groupid" TEXT NOT NULL,
    "created_at" TIMESTAMPTZ(0) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(0) DEFAULT CURRENT_TIMESTAMP,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "ownerid" TEXT NOT NULL,
    "bookid" TEXT,

    CONSTRAINT "Group_pkey" PRIMARY KEY ("groupid")
);

-- CreateTable
CREATE TABLE "GroupMembership" (
    "membershipid" TEXT NOT NULL,
    "created_at" TIMESTAMPTZ(0) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(0) DEFAULT CURRENT_TIMESTAMP,
    "level" INTEGER NOT NULL DEFAULT 0,
    "groupParent" TEXT NOT NULL,
    "userid" TEXT NOT NULL,

    CONSTRAINT "GroupMembership_pkey" PRIMARY KEY ("membershipid")
);

-- CreateTable
CREATE TABLE "_chapter_characters" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_book_genre" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Gallery_chapterid_key" ON "Gallery"("chapterid");

-- CreateIndex
CREATE UNIQUE INDEX "Gallery_characterid_key" ON "Gallery"("characterid");

-- CreateIndex
CREATE UNIQUE INDEX "Gallery_userid_key" ON "Gallery"("userid");

-- CreateIndex
CREATE UNIQUE INDEX "Gallery_agencyid_key" ON "Gallery"("agencyid");

-- CreateIndex
CREATE UNIQUE INDEX "Agency_logoid_key" ON "Agency"("logoid");

-- CreateIndex
CREATE UNIQUE INDEX "Chapter_bookid_key" ON "Chapter"("bookid");

-- CreateIndex
CREATE UNIQUE INDEX "Chapter_galleryid_key" ON "Chapter"("galleryid");

-- CreateIndex
CREATE UNIQUE INDEX "Character_bookid_key" ON "Character"("bookid");

-- CreateIndex
CREATE UNIQUE INDEX "Character_avatarid_key" ON "Character"("avatarid");

-- CreateIndex
CREATE UNIQUE INDEX "Character_galleryid_key" ON "Character"("galleryid");

-- CreateIndex
CREATE UNIQUE INDEX "Group_bookid_key" ON "Group"("bookid");

-- CreateIndex
CREATE UNIQUE INDEX "_chapter_characters_AB_unique" ON "_chapter_characters"("A", "B");

-- CreateIndex
CREATE INDEX "_chapter_characters_B_index" ON "_chapter_characters"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_book_genre_AB_unique" ON "_book_genre"("A", "B");

-- CreateIndex
CREATE INDEX "_book_genre_B_index" ON "_book_genre"("B");

-- CreateIndex
CREATE UNIQUE INDEX "Book_coverid_key" ON "Book"("coverid");

-- CreateIndex
CREATE UNIQUE INDEX "Post_threadid_key" ON "Post"("threadid");

-- AddForeignKey
ALTER TABLE "Image" ADD CONSTRAINT "Image_imageid_fkey" FOREIGN KEY ("imageid") REFERENCES "Gallery"("galleryid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Gallery" ADD CONSTRAINT "Gallery_userid_fkey" FOREIGN KEY ("userid") REFERENCES "User"("uid") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Gallery" ADD CONSTRAINT "Gallery_agencyid_fkey" FOREIGN KEY ("agencyid") REFERENCES "Agency"("agencyid") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Agency" ADD CONSTRAINT "Agency_logoid_fkey" FOREIGN KEY ("logoid") REFERENCES "Image"("imageid") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Chapter" ADD CONSTRAINT "Chapter_bookid_fkey" FOREIGN KEY ("bookid") REFERENCES "Book"("bookid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Chapter" ADD CONSTRAINT "Chapter_galleryid_fkey" FOREIGN KEY ("galleryid") REFERENCES "Gallery"("galleryid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Character" ADD CONSTRAINT "Character_bookid_fkey" FOREIGN KEY ("bookid") REFERENCES "Book"("bookid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Character" ADD CONSTRAINT "Character_avatarid_fkey" FOREIGN KEY ("avatarid") REFERENCES "Image"("imageid") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Character" ADD CONSTRAINT "Character_galleryid_fkey" FOREIGN KEY ("galleryid") REFERENCES "Gallery"("galleryid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Book" ADD CONSTRAINT "Book_coverid_fkey" FOREIGN KEY ("coverid") REFERENCES "Image"("imageid") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Book" ADD CONSTRAINT "Book_authorid_fkey" FOREIGN KEY ("authorid") REFERENCES "User"("uid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comment" ADD CONSTRAINT "Comment_chapterid_fkey" FOREIGN KEY ("chapterid") REFERENCES "Chapter"("chapterid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comment" ADD CONSTRAINT "Comment_characterid_fkey" FOREIGN KEY ("characterid") REFERENCES "Character"("characterid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Post" ADD CONSTRAINT "Post_postid_fkey" FOREIGN KEY ("postid") REFERENCES "Post"("threadid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Group" ADD CONSTRAINT "Group_ownerid_fkey" FOREIGN KEY ("ownerid") REFERENCES "User"("uid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Group" ADD CONSTRAINT "Group_bookid_fkey" FOREIGN KEY ("bookid") REFERENCES "Book"("bookid") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GroupMembership" ADD CONSTRAINT "GroupMembership_groupParent_fkey" FOREIGN KEY ("groupParent") REFERENCES "Group"("groupid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GroupMembership" ADD CONSTRAINT "GroupMembership_userid_fkey" FOREIGN KEY ("userid") REFERENCES "User"("uid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_chapter_characters" ADD CONSTRAINT "_chapter_characters_A_fkey" FOREIGN KEY ("A") REFERENCES "Chapter"("chapterid") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_chapter_characters" ADD CONSTRAINT "_chapter_characters_B_fkey" FOREIGN KEY ("B") REFERENCES "Character"("characterid") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_book_genre" ADD CONSTRAINT "_book_genre_A_fkey" FOREIGN KEY ("A") REFERENCES "Book"("bookid") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_book_genre" ADD CONSTRAINT "_book_genre_B_fkey" FOREIGN KEY ("B") REFERENCES "Genre"("genreid") ON DELETE CASCADE ON UPDATE CASCADE;
