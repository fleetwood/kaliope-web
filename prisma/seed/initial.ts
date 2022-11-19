import { PrismaClient, User } from "@prisma/client";
import { faker } from "@faker-js/faker";
import { now, log, logError } from "./../../utils/helpers";

const prisma = new PrismaClient();

import { LoremIpsum } from "lorem-ipsum";
const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 5,
    min: 2,
  },
  wordsPerSentence: {
    max: 16,
    min: 4,
  },
});

function rand(min: number = 0, max: number = 1) {
  if (min && !max) {
    max = min + 1;
  }
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const sentences = (total: number = 1) => lorem.generateSentences(total);
const subtitleMaybe = (): string | null => (rand() > 0 ? sentences(1) : null);

const mockPosts = (
  total: number = 1
): { title: string; subtitle?: string | null; content: string }[] => {
  const posts: { title: string; subtitle?: string | null; content: string }[] =
    [];
  total = rand(1, total);
  for (let i = 1; i <= total; i++) {
    let r = rand(2);
    posts.push({
      title: sentences(),
      subtitle: subtitleMaybe(),
      content: lorem.generateParagraphs(rand(1, 3)),
    });
  }
  return posts;
};

const mockUserPosts = (
  users: Array<User>,
  total: number = 1
): {
  user: User;
  title: string;
  subtitle?: string | null;
  content: string;
}[] => {
  return mockPosts(total).map((m) => {
    return { ...m, user: users[rand(users.length - 1)] };
  });
};

const confirm = async (user: any) => {
  log(`Seeded ${user.displayName} (${user.uid})`);
  let result = await prisma.user.findFirst({ where: { uid: user.uid } });
  log(`\t${JSON.stringify(result, null, 2)}`);
  log(">>>>>>>>>>>>>>>>");
  return;
};

async function main() {
  const tamiko = await prisma.user.create({
    data: {
      uid: "TamikoRittenburgTamikoRittenburg",
      email: "TamikoRittenburg@test.com",
      displayName: "Tamiko Rittenburg",
      photoURL: "https://xsgames.co/randomusers/assets/avatars/female/68.jpg",
      createdAt: now(),
      lastLoginAt: now(),
      posts: { create: mockPosts(51) },
    },
  });
  await confirm(tamiko);

  const delinda = await prisma.user.create({
    data: {
      uid: "DelindaLicupDelindaLicup",
      email: "DelindaLicup@test.com",
      displayName: "Delinda Licup",
      photoURL: "https://xsgames.co/randomusers/assets/avatars/female/62.jpg",
      createdAt: now(),
      lastLoginAt: now(),
      posts: { create: mockPosts(105) },
    },
  });
  await confirm(delinda);

  const julian = await prisma.user.create({
    data: {
      uid: "JulianTaillonJulianTaillon",
      email: "JulianTaillon@test.com",
      displayName: "Julian Taillon",
      photoURL: "https://xsgames.co/randomusers/assets/avatars/female/81.jpg",
      createdAt: now(),
      lastLoginAt: now(),
      posts: { create: mockPosts(45) },
    },
  });
  await confirm(julian);

  const kitty = await prisma.user.create({
    data: {
      uid: "KittyBrattaKittyBratta",
      email: "KittyBratta@test.com",
      displayName: "Kitty Bratta",
      photoURL: "https://xsgames.co/randomusers/assets/avatars/female/36.jpg",
      createdAt: now(),
      lastLoginAt: now(),
      posts: { create: mockPosts(5000) },
    },
  });
  await confirm(kitty);

  const kary = await prisma.user.create({
    data: {
      uid: "KaryRarigKaryRarig",
      email: "KaryRarig@test.com",
      displayName: "Kary Rarig",
      photoURL: "https://xsgames.co/randomusers/assets/avatars/female/53.jpg",
      createdAt: now(),
      lastLoginAt: now(),
      posts: { create: mockPosts(50) },
    },
  });
  await confirm(kary);

  const elvis = await prisma.user.create({
    data: {
      // password: 'BjDTQE9HNSbhE7kJmY',
      uid: "T5byvnfjKrSuDwBkppcFIJMOl2I2",
      email: "elvis.walsh@ethereal.email",
      displayName: "Elvis Walsh",
      photoURL: faker.image.avatar(),
      createdAt: now(),
      lastLoginAt: now(),
      posts: { create: mockPosts(50) },
    },
  });
  await confirm(elvis);

  const wei = await prisma.user.create({
    data: {
      uid: "WeiGonyawWeiGonyaw",
      email: "WeiGonyaw@test.com",
      displayName: "Wei Gonyaw",
      photoURL: "https://xsgames.co/randomusers/assets/avatars/female/12.jpg",
      createdAt: now(),
      lastLoginAt: now(),
      posts: { create: mockPosts(5) },
    },
  });
  await confirm(wei);

  const marisha = await prisma.user.create({
    data: {
      uid: "MarishaKealyMarishaKealy",
      email: "MarishaKealy@test.com",
      displayName: "Marisha Kealy",
      photoURL: "https://xsgames.co/randomusers/assets/avatars/female/23.jpg",
      createdAt: now(),
      lastLoginAt: now(),
      posts: { create: mockPosts(5) },
    },
  });
  await confirm(marisha);

  const nydia = await prisma.user.create({
    data: {
      uid: "NydiaGrazziniNydiaGrazzini",
      email: "NydiaGrazzini@test.com",
      displayName: "Nydia Grazzini",
      photoURL: "https://xsgames.co/randomusers/assets/avatars/female/98.jpg",
      createdAt: now(),
      lastLoginAt: now(),
      posts: { create: mockPosts(5) },
    },
  });
  await confirm(nydia);

  const users = [tamiko, delinda, julian, kitty, kary, elvis, marisha, nydia];
  
  let all = 0;
  users.forEach(async (u: User) => {
    log('Seeding posts for ',u.displayName)
    let user = await prisma.user.findUnique({
      where: { uid: u.uid },
      include: { posts: true },
    });
    log(`\tUser has ${user?.posts.length} posts`)
    user?.posts.forEach(async (post) => {
      let replier = await prisma.user.findUnique({
        where: { uid: users[rand(users.length - 1)].uid },
      });
      let count = rand(1,5),
        total = count;
      do{
        await prisma.post.update({
          where: { postid: post.postid },
          data: {
            posts: {
              connectOrCreate: {
                where: { postid: post.postid },
                create: {
                  created_at: now(),
                  updated_at: now(),
                  authorId: replier!.uid,
                  title: sentences(),
                  subtitle: subtitleMaybe(),
                  content: lorem.generateParagraphs(rand(2)),
                },
              },
            },
          }
        });
        all++
        log(`\t\tCreated reply from ${replier!.displayName} to ${user?.displayName} (${post.postid}) `)
      }
      while (--count > 0);
      log(`\tCreated ${total} replies`)
    });
  });
  log(`Created ${all} replies total`)
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    logError("SEEDING FAILED!!!", e);
    await prisma.$disconnect();
    process.exit(1);
  });
