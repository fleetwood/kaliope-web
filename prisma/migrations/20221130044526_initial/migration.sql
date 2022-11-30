-- CreateTable
CREATE TABLE "Image" (
    "imageid" TEXT NOT NULL,
    "created_at" TIMESTAMPTZ(0),
    "updated_at" TIMESTAMPTZ(0),
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
    "created_at" TIMESTAMPTZ(0),
    "updated_at" TIMESTAMPTZ(0),
    "url" VARCHAR(255) NOT NULL,
    "title" VARCHAR(255),
    "description" VARCHAR(255),
    "chapterid" TEXT,
    "characterid" TEXT,
    "profileid" TEXT,
    "agencyid" TEXT,

    CONSTRAINT "Gallery_pkey" PRIMARY KEY ("galleryid")
);

-- CreateTable
CREATE TABLE "Agency" (
    "agencyid" TEXT NOT NULL,
    "created_at" TIMESTAMPTZ(0),
    "updated_at" TIMESTAMPTZ(0),
    "description" TEXT NOT NULL,
    "logoid" TEXT,

    CONSTRAINT "Agency_pkey" PRIMARY KEY ("agencyid")
);

-- CreateTable
CREATE TABLE "Chapter" (
    "chapterid" TEXT NOT NULL,
    "created_at" TIMESTAMPTZ(0),
    "updated_at" TIMESTAMPTZ(0),
    "chapterOrder" INTEGER NOT NULL,
    "bookid" TEXT NOT NULL,
    "galleryid" TEXT NOT NULL,

    CONSTRAINT "Chapter_pkey" PRIMARY KEY ("chapterid")
);

-- CreateTable
CREATE TABLE "Character" (
    "characterid" TEXT NOT NULL,
    "created_at" TIMESTAMPTZ(0),
    "updated_at" TIMESTAMPTZ(0),
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
    "created_at" TIMESTAMPTZ(0),
    "updated_at" TIMESTAMPTZ(0),
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
    "created_at" TIMESTAMPTZ(0),
    "updated_at" TIMESTAMPTZ(0),

    CONSTRAINT "Genre_pkey" PRIMARY KEY ("genreid")
);

-- CreateTable
CREATE TABLE "BookRating" (
    "bookratingid" TEXT NOT NULL,
    "authorid" TEXT NOT NULL,
    "bookid" TEXT NOT NULL,
    "created_at" TIMESTAMPTZ(0),
    "updated_at" TIMESTAMPTZ(0),

    CONSTRAINT "BookRating_pkey" PRIMARY KEY ("bookratingid")
);

-- CreateTable
CREATE TABLE "Comment" (
    "commentid" TEXT NOT NULL,
    "authorid" TEXT NOT NULL,
    "created_at" TIMESTAMPTZ(0),
    "updated_at" TIMESTAMPTZ(0),
    "content" TEXT NOT NULL,
    "bookid" TEXT NOT NULL,
    "chapterid" TEXT NOT NULL,
    "characterid" TEXT NOT NULL,

    CONSTRAINT "Comment_pkey" PRIMARY KEY ("commentid")
);

-- CreateTable
CREATE TABLE "Post" (
    "postid" TEXT NOT NULL,
    "created_at" TIMESTAMPTZ(0),
    "updated_at" TIMESTAMPTZ(0),
    "visible" BOOLEAN NOT NULL DEFAULT true,
    "title" VARCHAR(255) NOT NULL,
    "subtitle" VARCHAR(255),
    "header_image" VARCHAR(255),
    "content" TEXT NOT NULL,
    "authorId" TEXT NOT NULL,
    "threadParentId" TEXT,

    CONSTRAINT "Post_pkey" PRIMARY KEY ("postid")
);

-- CreateTable
CREATE TABLE "Message" (
    "messageid" TEXT NOT NULL,
    "senderId" TEXT NOT NULL,
    "recipientId" TEXT NOT NULL,
    "visible" BOOLEAN NOT NULL DEFAULT true,
    "read" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMPTZ(0),
    "lastLoginAt" TIMESTAMPTZ(0),
    "content" TEXT NOT NULL,
    "messageParentId" TEXT,

    CONSTRAINT "Message_pkey" PRIMARY KEY ("messageid")
);

-- CreateTable
CREATE TABLE "Profile" (
    "id" TEXT NOT NULL,
    "displayName" TEXT,
    "photoURL" TEXT,
    "createdAt" TIMESTAMPTZ(0),
    "lastLoginAt" TIMESTAMPTZ(0),
    "totalLikes" INTEGER NOT NULL DEFAULT 0,
    "totalShares" INTEGER NOT NULL DEFAULT 0,
    "totalFollows" INTEGER NOT NULL DEFAULT 0,
    "totalFollowers" INTEGER NOT NULL DEFAULT 0,
    "FollowsProfileId" TEXT NOT NULL,
    "FollowerProfileId" TEXT NOT NULL,

    CONSTRAINT "Profile_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AccountStatus" (
    "modelid" TEXT NOT NULL,

    CONSTRAINT "AccountStatus_pkey" PRIMARY KEY ("modelid")
);

-- CreateTable
CREATE TABLE "Account" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "provider" TEXT NOT NULL,
    "providerAccountId" TEXT NOT NULL,
    "refresh_token" TEXT,
    "access_token" TEXT,
    "expires_at" INTEGER,
    "token_type" TEXT,
    "scope" TEXT,
    "id_token" TEXT,
    "session_state" TEXT,
    "oauth_token_secret" TEXT,
    "oauth_token" TEXT,

    CONSTRAINT "Account_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Session" (
    "id" TEXT NOT NULL,
    "sessionToken" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "expires" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Session_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "name" TEXT,
    "email" TEXT,
    "emailVerified" TIMESTAMP(3),
    "image" TEXT,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "VerificationToken" (
    "identifier" TEXT NOT NULL,
    "token" TEXT NOT NULL,
    "expires" TIMESTAMP(3) NOT NULL
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
CREATE UNIQUE INDEX "Gallery_profileid_key" ON "Gallery"("profileid");

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
CREATE UNIQUE INDEX "Account_provider_providerAccountId_key" ON "Account"("provider", "providerAccountId");

-- CreateIndex
CREATE UNIQUE INDEX "Session_sessionToken_key" ON "Session"("sessionToken");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "VerificationToken_token_key" ON "VerificationToken"("token");

-- CreateIndex
CREATE UNIQUE INDEX "VerificationToken_identifier_token_key" ON "VerificationToken"("identifier", "token");

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
ALTER TABLE "Gallery" ADD CONSTRAINT "Gallery_profileid_fkey" FOREIGN KEY ("profileid") REFERENCES "Profile"("id") ON DELETE SET NULL ON UPDATE CASCADE;

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
ALTER TABLE "Book" ADD CONSTRAINT "Book_authorid_fkey" FOREIGN KEY ("authorid") REFERENCES "Profile"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Book" ADD CONSTRAINT "Book_coverid_fkey" FOREIGN KEY ("coverid") REFERENCES "Image"("imageid") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BookRating" ADD CONSTRAINT "BookRating_authorid_fkey" FOREIGN KEY ("authorid") REFERENCES "Profile"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BookRating" ADD CONSTRAINT "BookRating_bookid_fkey" FOREIGN KEY ("bookid") REFERENCES "Book"("bookid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comment" ADD CONSTRAINT "Comment_authorid_fkey" FOREIGN KEY ("authorid") REFERENCES "Profile"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comment" ADD CONSTRAINT "Comment_bookid_fkey" FOREIGN KEY ("bookid") REFERENCES "Book"("bookid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comment" ADD CONSTRAINT "Comment_chapterid_fkey" FOREIGN KEY ("chapterid") REFERENCES "Chapter"("chapterid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comment" ADD CONSTRAINT "Comment_characterid_fkey" FOREIGN KEY ("characterid") REFERENCES "Character"("characterid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Post" ADD CONSTRAINT "Post_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "Profile"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Post" ADD CONSTRAINT "Post_threadParentId_fkey" FOREIGN KEY ("threadParentId") REFERENCES "Post"("postid") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Message" ADD CONSTRAINT "Message_senderId_fkey" FOREIGN KEY ("senderId") REFERENCES "Profile"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Message" ADD CONSTRAINT "Message_recipientId_fkey" FOREIGN KEY ("recipientId") REFERENCES "Profile"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Message" ADD CONSTRAINT "Message_messageParentId_fkey" FOREIGN KEY ("messageParentId") REFERENCES "Message"("messageid") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Profile" ADD CONSTRAINT "Profile_FollowsProfileId_fkey" FOREIGN KEY ("FollowsProfileId") REFERENCES "Profile"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Profile" ADD CONSTRAINT "Profile_FollowerProfileId_fkey" FOREIGN KEY ("FollowerProfileId") REFERENCES "Profile"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Profile" ADD CONSTRAINT "Profile_id_fkey" FOREIGN KEY ("id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Account" ADD CONSTRAINT "Account_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Session" ADD CONSTRAINT "Session_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_chapter_characters" ADD CONSTRAINT "_chapter_characters_A_fkey" FOREIGN KEY ("A") REFERENCES "Chapter"("chapterid") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_chapter_characters" ADD CONSTRAINT "_chapter_characters_B_fkey" FOREIGN KEY ("B") REFERENCES "Character"("characterid") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_book_genre" ADD CONSTRAINT "_book_genre_A_fkey" FOREIGN KEY ("A") REFERENCES "Book"("bookid") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_book_genre" ADD CONSTRAINT "_book_genre_B_fkey" FOREIGN KEY ("B") REFERENCES "Genre"("genreid") ON DELETE CASCADE ON UPDATE CASCADE;
