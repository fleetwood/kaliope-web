-- CreateTable
CREATE TABLE "Book" (
    "bookid" TEXT NOT NULL,
    "authorid" TEXT NOT NULL,
    "cover" VARCHAR(255),
    "created_at" TIMESTAMPTZ(0) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(0) DEFAULT CURRENT_TIMESTAMP,
    "title" VARCHAR(255) NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "Book_pkey" PRIMARY KEY ("bookid")
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

    CONSTRAINT "Post_pkey" PRIMARY KEY ("postid")
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

    CONSTRAINT "User_pkey" PRIMARY KEY ("uid")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_uid_unique" ON "User"("uid");

-- CreateIndex
CREATE UNIQUE INDEX "user_email_unique" ON "User"("email");

-- AddForeignKey
ALTER TABLE "Book" ADD CONSTRAINT "Book_authorid_fkey" FOREIGN KEY ("authorid") REFERENCES "User"("uid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BookRating" ADD CONSTRAINT "BookRating_authorid_fkey" FOREIGN KEY ("authorid") REFERENCES "User"("uid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BookRating" ADD CONSTRAINT "BookRating_bookid_fkey" FOREIGN KEY ("bookid") REFERENCES "Book"("bookid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comment" ADD CONSTRAINT "Comment_authorid_fkey" FOREIGN KEY ("authorid") REFERENCES "User"("uid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comment" ADD CONSTRAINT "Comment_bookid_fkey" FOREIGN KEY ("bookid") REFERENCES "Book"("bookid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Post" ADD CONSTRAINT "Post_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User"("uid") ON DELETE RESTRICT ON UPDATE CASCADE;
