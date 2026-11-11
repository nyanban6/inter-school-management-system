import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const schools = [
    { name: 'Northfield Academy', code: 'NFA', location: 'Lagos', category: 'Private' },
    { name: 'Green Valley College', code: 'GVC', location: 'Abuja', category: 'Public' },
    { name: 'City Heights School', code: 'CHS', location: 'Kano', category: 'Private' },
  ];

  for (const school of schools) {
    await prisma.school.upsert({
      where: { code: school.code },
      update: {},
      create: school,
    });
  }

  const northfield = await prisma.school.findUnique({ where: { code: 'NFA' } });

  if (northfield) {
    await prisma.user.upsert({
      where: { email: 'admin@northfield.edu' },
      update: {},
      create: {
        name: 'System Admin',
        email: 'admin@northfield.edu',
        passwordHash: 'demo-password',
        role: 'admin',
        schoolId: northfield.id,
      },
    });
  }

  console.log('Database seed completed.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
