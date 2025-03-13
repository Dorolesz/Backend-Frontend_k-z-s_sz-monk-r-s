import { PrismaClient } from '@prisma/client'
import { faker } from '@faker-js/faker';


const prisma = new PrismaClient()
async function main() {
  const event = Array.from({ length: 5 }).map(() => ({
              fellepo: faker.person.fullName(),
              kezdesi_ido: faker.date.recent(),
              idotartam: faker.number.int({ min: 30, max: 120, multipleOf: 30 }),
              elmarad: false,
      }));
      await prisma.event.createMany({
        data: event,
      });
  }

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })