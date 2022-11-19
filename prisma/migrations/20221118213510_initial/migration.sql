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
CREATE TABLE "Book" (
    "bookid" TEXT NOT NULL,
    "authorid" VARCHAR(255) NOT NULL,
    "created_at" TIMESTAMPTZ(0) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(0) DEFAULT CURRENT_TIMESTAMP,
    "title" VARCHAR(512) NOT NULL,
    "description" TEXT NOT NULL,
    "coverid" TEXT,
    "synopsis" TEXT,
    "tagline" TEXT,

    CONSTRAINT "Book_pkey" PRIMARY KEY ("bookid")
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
CREATE TABLE "BookRating" (
    "bookratingid" TEXT NOT NULL,
    "authorid" TEXT NOT NULL,
    "bookid" TEXT NOT NULL,
    "created_at" TIMESTAMPTZ(0) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(0) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "BookRating_pkey" PRIMARY KEY ("bookratingid")
);

-- CreateTable
CREATE TABLE "Comment" (
    "commentid" TEXT NOT NULL,
    "authorid" TEXT NOT NULL,
    "created_at" TIMESTAMPTZ(0) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(0) DEFAULT CURRENT_TIMESTAMP,
    "content" TEXT NOT NULL,
    "bookid" TEXT NOT NULL,
    "chapterid" TEXT NOT NULL,
    "characterid" TEXT NOT NULL,

    CONSTRAINT "Comment_pkey" PRIMARY KEY ("commentid")
);

-- CreateTable
CREATE TABLE "Post" (
    "postid" TEXT NOT NULL,
    "created_at" TIMESTAMPTZ(0) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(0) DEFAULT CURRENT_TIMESTAMP,
    "title" VARCHAR(255) NOT NULL,
    "subtitle" VARCHAR(255),
    "header_image" VARCHAR(255),
    "content" TEXT NOT NULL,
    "authorId" TEXT NOT NULL,
    "threadid" TEXT,

    CONSTRAINT "Post_pkey" PRIMARY KEY ("postid")
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
CREATE TABLE "User" (
    "uid" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "emailVerified" BOOLEAN DEFAULT false,
    "isAnonymous" BOOLEAN DEFAULT true,
    "displayName" TEXT,
    "photoURL" TEXT,
    "createdAt" TIMESTAMPTZ(0) DEFAULT CURRENT_TIMESTAMP,
    "lastLoginAt" TIMESTAMPTZ(0) DEFAULT CURRENT_TIMESTAMP,
    "blockedGroup" TEXT,
    "blocksGroup" TEXT,
    "followersGroup" TEXT,
    "followsGroup" TEXT,

    CONSTRAINT "User_pkey" PRIMARY KEY ("uid")
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
CREATE UNIQUE INDEX "Book_coverid_key" ON "Book"("coverid");

-- CreateIndex
CREATE UNIQUE INDEX "Group_bookid_key" ON "Group"("bookid");

-- CreateIndex
CREATE UNIQUE INDEX "user_uid_unique" ON "User"("uid");

-- CreateIndex
CREATE UNIQUE INDEX "user_email_unique" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "_chapter_characters_AB_unique" ON "_chapter_characters"("A", "B");

-- CreateIndex
CREATE INDEX "_chapter_characters_B_index" ON "_chapter_characters"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_book_genre_AB_unique" ON "_book_genre"("A", "B");

-- CreateIndex
CREATE INDEX "_book_genre_B_index" ON "_book_genre"("B");

-- AddForeignKey
ALTER TABLE "Image" ADD CONSTRAINT "Image_imageid_fkey" FOREIGN KEY ("imageid") REFERENCES "Gallery"("galleryid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Gallery" ADD CONSTRAINT "Gallery_agencyid_fkey" FOREIGN KEY ("agencyid") REFERENCES "Agency"("agencyid") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Gallery" ADD CONSTRAINT "Gallery_userid_fkey" FOREIGN KEY ("userid") REFERENCES "User"("uid") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Agency" ADD CONSTRAINT "Agency_logoid_fkey" FOREIGN KEY ("logoid") REFERENCES "Image"("imageid") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Chapter" ADD CONSTRAINT "Chapter_bookid_fkey" FOREIGN KEY ("bookid") REFERENCES "Book"("bookid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Chapter" ADD CONSTRAINT "Chapter_galleryid_fkey" FOREIGN KEY ("galleryid") REFERENCES "Gallery"("galleryid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Character" ADD CONSTRAINT "Character_avatarid_fkey" FOREIGN KEY ("avatarid") REFERENCES "Image"("imageid") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Character" ADD CONSTRAINT "Character_bookid_fkey" FOREIGN KEY ("bookid") REFERENCES "Book"("bookid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Character" ADD CONSTRAINT "Character_galleryid_fkey" FOREIGN KEY ("galleryid") REFERENCES "Gallery"("galleryid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Book" ADD CONSTRAINT "Book_authorid_fkey" FOREIGN KEY ("authorid") REFERENCES "User"("uid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Book" ADD CONSTRAINT "Book_coverid_fkey" FOREIGN KEY ("coverid") REFERENCES "Image"("imageid") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BookRating" ADD CONSTRAINT "BookRating_authorid_fkey" FOREIGN KEY ("authorid") REFERENCES "User"("uid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BookRating" ADD CONSTRAINT "BookRating_bookid_fkey" FOREIGN KEY ("bookid") REFERENCES "Book"("bookid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comment" ADD CONSTRAINT "Comment_authorid_fkey" FOREIGN KEY ("authorid") REFERENCES "User"("uid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comment" ADD CONSTRAINT "Comment_bookid_fkey" FOREIGN KEY ("bookid") REFERENCES "Book"("bookid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comment" ADD CONSTRAINT "Comment_chapterid_fkey" FOREIGN KEY ("chapterid") REFERENCES "Chapter"("chapterid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comment" ADD CONSTRAINT "Comment_characterid_fkey" FOREIGN KEY ("characterid") REFERENCES "Character"("characterid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Post" ADD CONSTRAINT "Post_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User"("uid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Post" ADD CONSTRAINT "Post_threadid_fkey" FOREIGN KEY ("threadid") REFERENCES "Post"("postid") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Group" ADD CONSTRAINT "Group_bookid_fkey" FOREIGN KEY ("bookid") REFERENCES "Book"("bookid") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Group" ADD CONSTRAINT "Group_ownerid_fkey" FOREIGN KEY ("ownerid") REFERENCES "User"("uid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GroupMembership" ADD CONSTRAINT "GroupMembership_groupParent_fkey" FOREIGN KEY ("groupParent") REFERENCES "Group"("groupid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GroupMembership" ADD CONSTRAINT "GroupMembership_userid_fkey" FOREIGN KEY ("userid") REFERENCES "User"("uid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_blockedGroup_fkey" FOREIGN KEY ("blockedGroup") REFERENCES "Group"("groupid") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_blocksGroup_fkey" FOREIGN KEY ("blocksGroup") REFERENCES "Group"("groupid") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_followersGroup_fkey" FOREIGN KEY ("followersGroup") REFERENCES "Group"("groupid") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_followsGroup_fkey" FOREIGN KEY ("followsGroup") REFERENCES "Group"("groupid") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_chapter_characters" ADD CONSTRAINT "_chapter_characters_A_fkey" FOREIGN KEY ("A") REFERENCES "Chapter"("chapterid") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_chapter_characters" ADD CONSTRAINT "_chapter_characters_B_fkey" FOREIGN KEY ("B") REFERENCES "Character"("characterid") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_book_genre" ADD CONSTRAINT "_book_genre_A_fkey" FOREIGN KEY ("A") REFERENCES "Book"("bookid") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_book_genre" ADD CONSTRAINT "_book_genre_B_fkey" FOREIGN KEY ("B") REFERENCES "Genre"("genreid") ON DELETE CASCADE ON UPDATE CASCADE;
