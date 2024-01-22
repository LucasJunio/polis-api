import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
async function main() {
  await prisma.state.upsert({
    where: { id: 1 },
    update: {},
    create: {
      name: 'MG',
    },
  });

  await prisma.city.upsert({
    where: { id: 1 },
    update: {},
    create: {
      name: 'Belo Horizonte',
      stateId: 1,
    },
  });
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
