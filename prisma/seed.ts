import { PrismaClient } from '@prisma/client'
import { faker } from '@faker-js/faker';


const prisma = new PrismaClient()
async function main() {
    const event = await prisma.event.create({
        data: {
            fellepo: faker.person.fullName(),
            kezdesi_ido: faker.date.recent(),
            idotartam: faker.date.future(),
            elmarad: false,
        }
    })
    console.log({ event })
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