import { PrismaClient, User } from "@prisma/client";
import { faker } from "@faker-js/faker";
import { now, log, logError, todo } from "./../../utils/helpers";

const prisma = new PrismaClient();

import { LoremIpsum } from "lorem-ipsum";
import { randomUUID } from "crypto";
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


const ymd = (date:Date) => {
  let year = date.getFullYear();
  let month = (1 + date.getMonth()).toString().padStart(2, '0');
  let day = date.getDate().toString().padStart(2, '0');
  let hour = date.getHours().toString().padStart(2, '0');
  let min = date.getMinutes().toString().padStart(2, '0');
  let sec = date.getSeconds().toString().padStart(2, '0');
  return year + '-' + month + '-' + day +' '+hour+":"+min+":"+sec;
}

let currentDate = 1653600240000;
const date = () => { return new Date(currentDate+=rand(100000,2000000)) }
const sentences = (total: number = 1) => lorem.generateSentences(total);
const subtitleMaybe = (): string | null => (rand() > 0 ? sentences(1) : null);

type mockPost = {
  title: string
  subtitle?: string | null
  content: string
  created_at: Date
  updated_at: Date
}

const mockPosts = (
  total: number = 1
): mockPost[] => {
  const posts:mockPost[] = [];
  total = rand(1, total);
  for (let i = 1; i <= total; i++) {
    let r = rand(2);
    posts.push({
      title: sentences(),
      subtitle: subtitleMaybe(),
      content: lorem.generateParagraphs(rand(1, 3)),
      created_at: date(),
      updated_at: date()
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
  content: string,
  created_at: Date,
  updated_at: Date
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
      uid: randomUUID(),
      email: "TamikoRittenburg@test.com",
      displayName: "Tamiko Rittenburg",
      photoURL: "https://xsgames.co/randomusers/assets/avatars/female/68.jpg",
      posts: { create: mockPosts(51) },
    },
  });
  await confirm(tamiko);

  const delinda = await prisma.user.create({
    data: {
      uid: randomUUID(),
      email: "DelindaLicup@test.com",
      displayName: "Delinda Licup",
      photoURL: "https://xsgames.co/randomusers/assets/avatars/female/62.jpg",
      posts: { create: mockPosts(105) },
    },
  });
  await confirm(delinda);

  const julian = await prisma.user.create({
    data: {
      uid: randomUUID(),
      email: "JulianTaillon@test.com",
      displayName: "Julian Taillon",
      photoURL: "https://xsgames.co/randomusers/assets/avatars/female/61.jpg",
      posts: { create: mockPosts(45) },
    },
  });
  await confirm(julian);

  const kitty = await prisma.user.create({
    data: {
      uid: randomUUID(),
      email: "KittyBratta@test.com",
      displayName: "Kitty Bratta",
      photoURL: "https://xsgames.co/randomusers/assets/avatars/female/36.jpg",
      
      
      posts: { create: mockPosts(500) },
    },
  });
  await confirm(kitty);

  const kary = await prisma.user.create({
    data: {
      uid: randomUUID(),
      email: "KaryRarig@test.com",
      displayName: "Kary Rarig",
      photoURL: "https://xsgames.co/randomusers/assets/avatars/female/53.jpg",
      
      
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
      
      
      posts: { create: mockPosts(50) },
    },
  });
  await confirm(elvis);

  const wei = await prisma.user.create({
    data: {
      uid: randomUUID(),
      email: "WeiGonyaw@test.com",
      displayName: "Wei Gonyaw",
      photoURL: "https://xsgames.co/randomusers/assets/avatars/female/12.jpg",
      
      
      posts: { create: mockPosts(5) },
    },
  });
  await confirm(wei);

  const marisha = await prisma.user.create({
    data: {
      uid: randomUUID(),
      email: "MarishaKealy@test.com",
      displayName: "Marisha Kealy",
      photoURL: "https://xsgames.co/randomusers/assets/avatars/female/23.jpg",
      
      
      posts: { create: mockPosts(5) },
    },
  });
  await confirm(marisha);

  const nydia = await prisma.user.create({
    data: {
      uid: randomUUID(),
      email: "NydiaGrazzini@test.com",
      displayName: "Nydia Grazzini",
      photoURL: "https://xsgames.co/randomusers/assets/avatars/female/98.jpg",
      
      
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
    user?.posts.forEach(async (post) => {
      let replier = await prisma.user.findUnique({
        where: { uid: users[rand(users.length - 1)].uid },
      });
      let count = rand(1,5),
        total = count;
      do{
        await prisma.post.create({
          data: {
            created_at: date(),
            updated_at: date(),
            authorId: replier!.uid,
            title: sentences(),
            subtitle: subtitleMaybe(),
            threadParentId: post.postid,
            content: lorem.generateParagraphs(rand(2)),
          }
        });
      }
      while (--count > 0);
      log(`\tCreated ${total} replies`)
    });
  });
}
main()
  .then(async () => {
    await prisma.$disconnect();
    todo('MAKE SURE CREATED_AT AND UPDATED_AT ARE RETURN TO NULL VALUES')
  })
  .catch(async (e) => {
    logError("SEEDING FAILED!!!", e);
    await prisma.$disconnect();
    process.exit(1);
  });
